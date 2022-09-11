var randomNumber1 = Math.floor((Math.random()*6) + 1);

var randomDiceImage1 = "images/dice" + randomNumber1 +".png";

document.querySelector(".leftImg").setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor((Math.random()*6) + 1);

var randomDiceImage2 = "images/dice" + randomNumber2 +".png";

document.querySelector(".rightImg").setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h2").innerHTML = "Player 1 Won!!!";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h2").innerHTML = "Player 2 Won!!!";
}else {
  document.querySelector("h2").innerHTML = "Draw...  Roll Again";
}
