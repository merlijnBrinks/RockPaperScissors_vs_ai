function myFunction() {


let inputForRockPaperScissors = prompt("choose input: Rock, Paper or Scissors. (use capital)", "Rock")
// ask for input
let aiInput = Math.floor((Math.random() * 3) + 1)
// sets value of aiInput to 1, 2 or 3

if (aiInput === 1) {
  aiInput = "paper"
}
else if (aiInput === 2) {
  aiInput = "rock"
}
else if (aiInput === 3) {
  aiInput = "scissor"
}
else {
  document.getElementById("result").innerHTML = "error404: ai Input not found";
}

if (inputForRockPaperScissors === "Rock" && aiInput === "paper") {
  document.getElementById("result").innerHTML = "You lost";
}
else if (inputForRockPaperScissors === "Rock" && aiInput === "scissor") {
  document.getElementById("result").innerHTML = "You won!!!";
}
else if (inputForRockPaperScissors === "Rock" && aiInput === "rock") {
  document.getElementById("result").innerHTML = "It's a draw";
}
else if (inputForRockPaperScissors === "Paper" && aiInput === "paper") {
  document.getElementById("result").innerHTML = "It's a draw";
}
else if (inputForRockPaperScissors === "Paper" && aiInput === "rock") {
  document.getElementById("result").innerHTML = "You won!!!";
}
else if (inputForRockPaperScissors === "Paper" && aiInput === "scissor") {
  document.getElementById("result").innerHTML = "You lost";
}
else if (inputForRockPaperScissors === "Scissors" && aiInput === "paper") {
  document.getElementById("result").innerHTML = "You won!!!!";
}
else if (inputForRockPaperScissors === "Scissors" && aiInput === "rock") {
  document.getElementById("result").innerHTML = "You lost";
}
else if (inputForRockPaperScissors === "Scissors" && aiInput === "scissor") {
  document.getElementById("result").innerHTML = "It's a draw!";
}
else if (inputForRockPaperScissors === "scissor") {
  document.getElementById("result").innerHTML = "Please use capital";
}
else if (inputForRockPaperScissors === "paper") {
  document.getElementById("result").innerHTML = "Please use capital";
}
else if (inputForRockPaperScissors === "rock") {
  document.getElementById("result").innerHTML = "Please use capital";
}
else if (inputForRockPaperScissors === "scissor") {
  document.getElementById("result").innerHTML = "Please use capital and add an s at the end when using scissors";
}
else {
  document.getElementById("result").innerHTML = "error";
}

}
