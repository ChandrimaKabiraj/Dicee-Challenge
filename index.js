var randomNum=Math.floor(Math.random()*6)+1;
var randomImg="dice" + randomNum + ".png";
var imgsrc = randomImg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imgsrc);


var randomNum2=Math.floor(Math.random()*6)+1;
var randomImg2="dice" + randomNum2 + ".png";
var imgsrc2 = randomImg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imgsrc2);


if(randomNum > randomNum2)
{
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNum2 > randomNum)
{
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else
{
  document.querySelector("h1").innerHTML = "Draw!";
}
