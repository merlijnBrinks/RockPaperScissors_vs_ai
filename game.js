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
  console.log("error404: ai Input not found")
}

if (inputForRockPaperScissors === "Rock" && aiInput === "paper") {
  console.log("You lost. ai's input was " + aiInput)
}
else if (inputForRockPaperScissors === "Rock" && aiInput === "scissor") {
  console.log("You won!!! ai's input was " + aiInput)
}
else if (inputForRockPaperScissors === "Rock" && aiInput === "rock") {
  console.log("It's a draw!")
}
else if (inputForRockPaperScissors === "Paper" && aiInput === "paper") {
  console.log("It's a draw!")
}
else if (inputForRockPaperScissors === "Paper" && aiInput === "rock") {
  console.log("You won!!! ai's input was " + aiInput)
}
else if (inputForRockPaperScissors === "Paper" && aiInput === "scissor") {
  console.log("You lost. ai's input was " + aiInput)
}
else if (inputForRockPaperScissors === "Scissors" && aiInput === "paper") {
  console.log("You won!!! ai's input was " + aiInput)
}
else if (inputForRockPaperScissors === "Scissors" && aiInput === "rock") {
  console.log("You lost. ai's input was " + aiInput)
}
else if (inputForRockPaperScissors === "Scissors" && aiInput === "scissor") {
  console.log("It's a draw!")
}
else if (inputForRockPaperScissors === "scissor") {
  console.log("Please use capital")
}
else if (inputForRockPaperScissors === "paper") {
  console.log("Please use capital")
}
else if (inputForRockPaperScissors === "rock") {
  console.log("Please use capital")
}
else if (inputForRockPaperScissors === "scissor") {
  console.log("Please use capital and add an s at the end when using scissors")
}
else {
  console.log("error 404 input not found")
}

}
