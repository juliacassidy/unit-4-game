//starting values

let wins = 0;
let losses = 0;
let gemOneValue = 0;
let gemTwoValue = 0;
let gemThreeValue = 0;
let scoreToMatch = 0;
let yourScore = 0;

//adding values
function resetGame() {
    scoreToMatch = 19 + (Math.floor((Math.random() * 120)));
    yourScore = 0;
    gemOneValue = 1 + (Math.floor((Math.random() * 12)));
    gemTwoValue = 1 + (Math.floor((Math.random() * 12)));
    gemThreeValue = 1 + (Math.floor((Math.random() * 12)));
    gemFourValue = 1 + (Math.floor((Math.random() * 12)));

    $("#scoreToMatch").html("scoreToMatch : " + targetScore);
    $("#yourScore").html("Your Score : " + yourScore);
    $("#wins").html("Wins : " + wins);
    $("#losses").html("Losses : " + losses);
}

function newScore() {
    yourScore = newScore;
    $("#yourScore").html("Your Score : " + yourScore);
}

function updateRecord() {
    const difference = scoreToMatch - yourScore;

    if (difference === 0 || difference < 0) {
        if (difference === 0) {
            wins += 1;
            $("#wins").html("Wins : " + wins);
        } else {
            losses += 1;
            $("#losses").html("Losses : " + losses);
        }



        // game reset after playing
        resetGame(); {
        }



        function updateGame(newScore) {
            updateScore(newScore);
            updateRecord();
        }


        $(document).ready(function () {
            resetGame();


            $("#gemOne").on("click", function () {
                updateGame(yourScore + gemOneValue);
            });

            $("#gemTwo").on("click", function () {
                updateGame(yourScore + gemTwoValue);
            });

            $("#gemThree").on("click", function () {
                updateGame(yourScore + gemThreeValue)
            });

            $("#gemFour").on("click", function () {
                updateGame(yourScore + gemFourValue);
            });

        })}}