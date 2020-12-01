let score = 0;
var last = 0;
var life1 = 30;
var myvar;
fill=0;
var highscore='';
function start() {
    if (fill==1){
        fill=0;
    location.reload()
    }
    life1 = 30;
    score = 0;
    document.getElementById('score').innerHTML = score;
    document.getElementById('life').innerHTML = life1;
    cookieget=document.cookie.split('=')[1];
    if(cookieget==undefined){
        cookieget=0;
    }
    highscore = parseInt(cookieget);
    document.getElementById('highscore').innerHTML = highscore;
    arr = ["a1", "a2", 'a3', 'a4', 'a5', 'a6', 'a7', 'a8']
    len = arr.length;
    myvar = setInterval(function () {
        document.getElementById(arr[last]).innerHTML = "";
        var randomNumber = Math.floor(Math.random() * len);
        document.getElementById(arr[randomNumber]).innerHTML = '<img src="mole.png" onclick="one()" style="height:80%;width=70%;">';
        last = randomNumber;
    }, 700);
}

function one() {
    debugger;
    score += 10;
    if(highscore==""){
        highscore=0;
    }
    if(score>=highscore){
        highscore=score;
        document.cookie="highScore="+highscore;
    }
    document.getElementById('score').innerHTML = score;
    document.getElementById('highscore').innerHTML = highscore;

}
function life() {
    life1 = life1 - 1;
    document.getElementById('life').innerHTML = life1;
    if (life1 == 0) {
        document.getElementById("play-area").style.display = "none";
        document.getElementById("gameover").style.display = "block";
        document.getElementById('gscore').innerHTML ="High Score :" + highscore + "  Score : " + score;
        fill=1;
    }
}