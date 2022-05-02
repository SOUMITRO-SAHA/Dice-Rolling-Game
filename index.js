// Generating Random Number 1 to 6
var randomNumber1 = Math.floor((Math.random()*6) + 1);
var randomNumber2 = Math.floor((Math.random()*6) + 1);

//Image Resource location Generator
var randomImageSource1 = "images/dice"+randomNumber1+".png";
var randomImageSource2 = "images/dice"+randomNumber2+".png";


//Set Dice Image
//Assigning the Attribute to the required image src .

//for Player 1.
document.querySelectorAll(".dice img")[0].setAttribute("src",randomImageSource1);
//for Player 2.
document.querySelectorAll(".dice img")[1].setAttribute("src",randomImageSource2);


//Player Wining Massage
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}








// Not Efficient Code //
/*
//Conditions for Player 1 Dice Image
if(randomNumber1 === 1){
  document.querySelector(".img1").setAttribute("src","images/dice1.png")
}
else if(randomNumber1 === 2){
  document.querySelector(".img1").setAttribute("src","images/dice2.png")
}
else if(randomNumber1 === 3){
  document.querySelector(".img1").setAttribute("src","images/dice3.png")
}
else if(randomNumber1 === 4){
  document.querySelector(".img1").setAttribute("src","images/dice4.png")
}
else if(randomNumber1 === 5){
  document.querySelector(".img1").setAttribute("src","images/dice5.png")
}
else if(randomNumber1 === 6){
  document.querySelector(".img1").setAttribute("src","images/dice6.png")
}


//Conditions for Player 2 Dice Image
if(randomNumber2 === 1){
  document.querySelector(".img2").setAttribute("src","images/dice1.png")
}
else if(randomNumber2 === 2){
  document.querySelector(".img2").setAttribute("src","images/dice2.png")
}
else if(randomNumber2 === 3){
  document.querySelector(".img2").setAttribute("src","images/dice3.png")
}
else if(randomNumber2 === 4){
  document.querySelector(".img2").setAttribute("src","images/dice4.png")
}
else if(randomNumber2 === 5){
  document.querySelector(".img2").setAttribute("src","images/dice5.png")
}
else if(randomNumber2 === 6){
  document.querySelector(".img2").setAttribute("src","images/dice6.png")
}

//Who Wins Massage
if(randomNumber1 == randomNumber1){
  //Draw
  document.querySelector(".container h1").innerHTML="Draw";
}
else if(randomNumber1 >= randomNumber1){
  //Player 1 wins
  document.querySelector(".container h1").innerHTML="Player 1 wins";
}
else{
  //Player 2 wins
  document.querySelector(".container h1").innerHTML="Player 2 wins";
}
*/
