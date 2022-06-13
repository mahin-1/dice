

var xx = ["dice1.png" ,"dice2.png" ,"dice3.png" , "dice4.png" , "dice5.png" , "dice6.png" ];
var bb  =  Math.floor(Math.random()*6);
var cc =  Math.floor(Math.random()*6);
var mm = xx[bb];
var nn = xx[cc];
document.getElementById("i1").src=mm;
document.getElementById("i2").src=nn;


if(bb > cc){
  document.querySelector("h1").innerHTML="	🗽Player 1 Wins!!";
}
if(cc > bb){
  document.querySelector("h1").innerHTML="Player 2 Wins	🗽";
}
//else{

  //  document.querySelector("h1").innerHTML="Tie";

//}
