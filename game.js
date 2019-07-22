var randomResult;
var lost = 0;
var win = 0;
var yourScore = 0;


var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
        'images/gem1.png',
        'images/gem2.png',
        'images/gem3.png',
        'images/gem4.png',];

    randomResult = Math.floor(Math.random() * 101) + 19;


    $("#result").html('Score to Match: ' + randomResult);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover"
        });
        $(".crystals").append(crystal);

    }

    $("#yourScore").html("Your Score: " + yourScore);

}

resetAndStart();



$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    yourScore += num;


    $("#yourScore").html("Total score: " + yourScore);

    console.log(yourScore);

    if (yourScore > randomResult
    ) {

        lost++;

        $("#lost").html("Losses: " + lost);

        yourScore = 0;

        alert("You lose!");

        resetAndStart();

    }
    else if (yourScore === randomResult
    ) {

        win++;

        $("#win").html("Wins: " + win);

        alert("You win!");

        yourScore = 0;

        resetAndStart();

    }

});