
let streak = 0

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
  aiInput = "scissors"
}
    
else {
  document.getElementById("result").innerHTML = "error404: ai Input not found";
}

if (inputForRockPaperScissors === "Rock" && aiInput === "paper") {
  document.getElementById("result").innerHTML = "You lost";
    streak = 0;
}
else if (inputForRockPaperScissors === "Rock" && aiInput === "scissors") {
  document.getElementById("result").innerHTML = "You won!!!";
   streak = streak + 1;
}
else if (inputForRockPaperScissors === "Rock" && aiInput === "rock") {
  document.getElementById("result").innerHTML = "It's a draw";
}
else if (inputForRockPaperScissors === "Paper" && aiInput === "paper") {
  document.getElementById("result").innerHTML = "It's a draw";
}
else if (inputForRockPaperScissors === "Paper" && aiInput === "rock") {
  document.getElementById("result").innerHTML = "You won!!!";
    streak = streak + 1;
}
else if (inputForRockPaperScissors === "Paper" && aiInput === "scissors") {
  document.getElementById("result").innerHTML = "You lost";
    streak = 0;
}
else if (inputForRockPaperScissors === "Scissors" && aiInput === "paper") {
  document.getElementById("result").innerHTML = "You won!!!!";
    streak = streak + 1;
}
else if (inputForRockPaperScissors === "Scissors" && aiInput === "rock") {
  document.getElementById("result").innerHTML = "You lost";
    streak = 0;
}
else if (inputForRockPaperScissors === "Scissors" && aiInput === "scissors") {
  document.getElementById("result").innerHTML = "It's a draw!";
}
else if (inputForRockPaperScissors === "scissors") {
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
else if (inputForRockPaperScissors === "Win") {
    document.getElementById("result").innerHTML = "You Thought you broke the system but it was me DIO!";
}
    else if (inputForRockPaperScissors === "Pistol") {
    document.getElementById("result").innerHTML = "No... Just no.";
}
    else if (inputForRockPaperScissors === "Yeet") {
    document.getElementById("result").innerHTML = "Yoink!";
}
    else if (inputForRockPaperScissors === "up up down down left right left right B A start") {
    document.getElementById("result").innerHTML = "You won!!!!!";
}
else {
  document.getElementById("result").innerHTML = "Please use a valid input...";
}

document.getElementById("streak").innerHTML = streak;
    
}
