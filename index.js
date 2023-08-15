var randomNumber1 = (Math.floor(Math.random()*6)) + 1;
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");
var randomNumber2 = (Math.floor(Math.random()*6)) + 1;
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");
if (randomNumber1===randomNumber2){
    var win = "Draw!";
}
else if (randomNumber1>randomNumber2){
    var win = "Player1 wins!";
}
else {
    var win = "Player2 wins!";
}
document.querySelector("h1").innerHTML= win;