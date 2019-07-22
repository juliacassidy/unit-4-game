let randomResult;
let losses;
let win;


randomResult= Math.floor(Math.random()* 120) + 19;


$("result").html("Random Rusult: " + randomResult);
for(var i=0; i<4; i++){
    var random=Math.floor(Math.random() * 12)
    console.log(random);
    var gems = $("<div>");
    gems.attr({
        "class": 'gems',
        "data-random-number": random
    });
    $(".gems").append(gems); 
}