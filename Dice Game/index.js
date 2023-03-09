let randomNumber1 = (Math.floor(Math.random()*6) + 1);

let randomNumber2 = (Math.floor(Math.random()*6) + 1);

let image1 = document.querySelectorAll("img")[0]; 

let image2 = document.querySelectorAll("img")[1]; 

let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

image1.setAttribute("src", randomDiceImage1);

image2.setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🥇Player 1 Wins";
}

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "🎀= Tie =🎀";
}

if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🥇"
}

