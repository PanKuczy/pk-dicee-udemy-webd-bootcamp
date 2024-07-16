var allDice = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
var playerOneRoll = "./images/dice6.png";
var playerTwoRoll = "./images/dice6.png";

function diceRoll(){

    playerOneRoll = allDice[Math.floor(Math.random()*6)];
    playerTwoRoll = allDice[Math.floor(Math.random()*6)];
}


document.querySelector(".img1").setAttribute("src", playerOneRoll);
document.querySelector(".img2").setAttribute("src", playerTwoRoll);

if(sessionStorage.getItem('flag')===null){
    sessionStorage.setItem('flag', '1');
}else {

    diceRoll();

if (playerOneRoll>playerTwoRoll){
    document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!"
} else if(playerOneRoll<playerTwoRoll){
        document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681"
} else {
    document.querySelector("h1").textContent = "Draw!"
}
document.querySelector(".img1").setAttribute("src", playerOneRoll);
document.querySelector(".img2").setAttribute("src", playerTwoRoll);
}
