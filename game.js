let streak = 0

let streakMax = 0


function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

function onStartUp() {
    hideRock();
    hidePaper();
    hideScissors();
    hideScissorsAi();
    hidePaperAi();
    hideRockAi();
}


window.onload = function() {
    onStartUp();
};


function hidePaperAi() {
    var x = document.getElementById("paperAi");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function hideRockAi() {
    var x = document.getElementById("rockAi");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function hideScissorsAi() {
    var x = document.getElementById("scissorsAi");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function hideRock() {
    var x = document.getElementById("rockIn");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function hidePaper() {
    var x = document.getElementById("paperIn");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function hideScissors() {
    var x = document.getElementById("scissorsIn");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



function setRock() {

    hideRock();

    setTimeout(function() {


        let inputForRockPaperScissors = "Rock"

        let aiInput = Math.floor((Math.random() * 3) + 1)
        // sets value of aiInput to 1, 2 or 3

        if (aiInput === 1) {
            aiInput = "paper";
            hidePaperAi();
        } else if (aiInput === 2) {
            aiInput = "rock";
            hideRockAi();
        } else if (aiInput === 3) {
            aiInput = "scissors";
            hideScissorsAi();
        } else {
            document.getElementById("result").innerHTML = "error404: ai Input not found";
        }

        if (inputForRockPaperScissors === "Rock" && aiInput === "paper") {
            document.getElementById("result").innerHTML = "You lost";
            streak = 0;
        } else if (inputForRockPaperScissors === "Rock" && aiInput === "scissors") {
            document.getElementById("result").innerHTML = "You won!!!";
            streak = streak + 1;
            if (streakMax < streak) {
                streakMax = streak;
            }
        } else if (inputForRockPaperScissors === "Rock" && aiInput === "rock") {
            document.getElementById("result").innerHTML = "It's a draw";
        } else if (inputForRockPaperScissors === "Paper" && aiInput === "paper") {
            document.getElementById("result").innerHTML = "It's a draw";
        } else if (inputForRockPaperScissors === "Paper" && aiInput === "rock") {
            document.getElementById("result").innerHTML = "You won!!!";
            streak = streak + 1;
        } else if (inputForRockPaperScissors === "Paper" && aiInput === "scissors") {
            document.getElementById("result").innerHTML = "You lost";
            streak = 0;
        } else if (inputForRockPaperScissors === "Scissors" && aiInput === "paper") {
            document.getElementById("result").innerHTML = "You won!!!!";
            streak = streak + 1;
        } else if (inputForRockPaperScissors === "Scissors" && aiInput === "rock") {
            document.getElementById("result").innerHTML = "You lost";
            streak = 0;
        } else if (inputForRockPaperScissors === "Scissors" && aiInput === "scissors") {
            document.getElementById("result").innerHTML = "It's a draw!";
        } else if (inputForRockPaperScissors === "scissors") {
            document.getElementById("result").innerHTML = "Please use capital";
        } else if (inputForRockPaperScissors === "paper") {
            document.getElementById("result").innerHTML = "Please use capital";
        } else if (inputForRockPaperScissors === "rock") {
            document.getElementById("result").innerHTML = "Please use capital";
        } else if (inputForRockPaperScissors === "scissor") {
            document.getElementById("result").innerHTML = "Please use capital and add an s at the end when using scissors";
        } else if (inputForRockPaperScissors === "Win") {
            document.getElementById("result").innerHTML = "You Thought you broke the system but it was me DIO!";
        } else if (inputForRockPaperScissors === "Pistol") {
            document.getElementById("result").innerHTML = "No... Just no.";
        } else if (inputForRockPaperScissors === "Yeet") {
            document.getElementById("result").innerHTML = "Yoink!";
        } else if (inputForRockPaperScissors === "up up down down left right left right B A start") {
            document.getElementById("result").innerHTML = "You won!!!!!";
        } else {
            document.getElementById("result").innerHTML = "Please use a valid input...";
        }

        document.getElementById("streak").innerHTML = "Current streak: " + streak;
        document.getElementById("streakMax").innerHTML = "Biggest streak: " + streakMax;

        setTimeout(function() {
            hideRock();
            if (aiInput === "paper") {
                hidePaperAi();
            } else if (aiInput === "rock") {
                hideRockAi();
            } else if (aiInput === "scissors") {
                hideScissorsAi();
            }
            document.getElementById("result").innerHTML = "Will you play another round?";
        }, 1500);
    }, 1500);

}

function setPaper() {

    hidePaper();

    setTimeout(function() {



        let inputForRockPaperScissors = "Paper"

        let aiInput = Math.floor((Math.random() * 3) + 1)
        // sets value of aiInput to 1, 2 or 3

        if (aiInput === 1) {
            aiInput = "paper";
            hidePaperAi();
        } else if (aiInput === 2) {
            aiInput = "rock";
            hideRockAi();
        } else if (aiInput === 3) {
            aiInput = "scissors";
            hideScissorsAi();
        } else {
            document.getElementById("result").innerHTML = "error404: ai Input not found";
        }

        if (inputForRockPaperScissors === "Rock" && aiInput === "paper") {
            document.getElementById("result").innerHTML = "You lost";
            streak = 0;
        } else if (inputForRockPaperScissors === "Rock" && aiInput === "scissors") {
            document.getElementById("result").innerHTML = "You won!!!";
            streak = streak + 1;
        } else if (inputForRockPaperScissors === "Rock" && aiInput === "rock") {
            document.getElementById("result").innerHTML = "It's a draw";
        } else if (inputForRockPaperScissors === "Paper" && aiInput === "paper") {
            document.getElementById("result").innerHTML = "It's a draw";
        } else if (inputForRockPaperScissors === "Paper" && aiInput === "rock") {
            document.getElementById("result").innerHTML = "You won!!!";
            streak = streak + 1;
            if (streakMax < streak) {
                streakMax = streak;
            }
        } else if (inputForRockPaperScissors === "Paper" && aiInput === "scissors") {
            document.getElementById("result").innerHTML = "You lost";
            streak = 0;
        } else if (inputForRockPaperScissors === "Scissors" && aiInput === "paper") {
            document.getElementById("result").innerHTML = "You won!!!!";
            streak = streak + 1;
        } else if (inputForRockPaperScissors === "Scissors" && aiInput === "rock") {
            document.getElementById("result").innerHTML = "You lost";
            streak = 0;
        } else if (inputForRockPaperScissors === "Scissors" && aiInput === "scissors") {
            document.getElementById("result").innerHTML = "It's a draw!";
        } else if (inputForRockPaperScissors === "scissors") {
            document.getElementById("result").innerHTML = "Please use capital";
        } else if (inputForRockPaperScissors === "paper") {
            document.getElementById("result").innerHTML = "Please use capital";
        } else if (inputForRockPaperScissors === "rock") {
            document.getElementById("result").innerHTML = "Please use capital";
        } else if (inputForRockPaperScissors === "scissor") {
            document.getElementById("result").innerHTML = "Please use capital and add an s at the end when using scissors";
        } else if (inputForRockPaperScissors === "Win") {
            document.getElementById("result").innerHTML = "You Thought you broke the system but it was me DIO!";
        } else if (inputForRockPaperScissors === "Pistol") {
            document.getElementById("result").innerHTML = "No... Just no.";
        } else if (inputForRockPaperScissors === "Yeet") {
            document.getElementById("result").innerHTML = "Yoink!";
        } else if (inputForRockPaperScissors === "up up down down left right left right B A start") {
            document.getElementById("result").innerHTML = "You won!!!!!";
        } else {
            document.getElementById("result").innerHTML = "Please use a valid input...";
        }
        document.getElementById("streak").innerHTML = "Current streak: " + streak;
        document.getElementById("streakMax").innerHTML = "Biggest streak: " + streakMax;

        setTimeout(function() {
            hidePaper()
            if (aiInput === "paper") {
                hidePaperAi();
            } else if (aiInput === "rock") {
                hideRockAi();
            } else if (aiInput === "scissors") {
                hideScissorsAi();
            }
            document.getElementById("result").innerHTML = "Will you play another round?";
        }, 1500);
    }, 1500);



}


function setScissors() {

    hideScissors();

    setTimeout(function() {


        let inputForRockPaperScissors = "Scissors"


        let aiInput = Math.floor((Math.random() * 3) + 1)
        // sets value of aiInput to 1, 2 or 3

        if (aiInput === 1) {
            aiInput = "paper";
            hidePaperAi();
        } else if (aiInput === 2) {
            aiInput = "rock";
            hideRockAi();
        } else if (aiInput === 3) {
            aiInput = "scissors";
            hideScissorsAi();
        } else {
            document.getElementById("result").innerHTML = "error404: ai Input not found";
        }

        if (inputForRockPaperScissors === "Rock" && aiInput === "paper") {
            document.getElementById("result").innerHTML = "You lost";
            streak = 0;
        } else if (inputForRockPaperScissors === "Rock" && aiInput === "scissors") {
            document.getElementById("result").innerHTML = "You won!!!";
            streak = streak + 1;
        } else if (inputForRockPaperScissors === "Rock" && aiInput === "rock") {
            document.getElementById("result").innerHTML = "It's a draw";
        } else if (inputForRockPaperScissors === "Paper" && aiInput === "paper") {
            document.getElementById("result").innerHTML = "It's a draw";
        } else if (inputForRockPaperScissors === "Paper" && aiInput === "rock") {
            document.getElementById("result").innerHTML = "You won!!!";
            streak = streak + 1;
        } else if (inputForRockPaperScissors === "Paper" && aiInput === "scissors") {
            document.getElementById("result").innerHTML = "You lost";
            streak = 0;
        } else if (inputForRockPaperScissors === "Scissors" && aiInput === "paper") {
            document.getElementById("result").innerHTML = "You won!!!!";
            streak = streak + 1;
            if (streakMax < streak) {
                streakMax = streak;
            }
        } else if (inputForRockPaperScissors === "Scissors" && aiInput === "rock") {
            document.getElementById("result").innerHTML = "You lost";
            streak = 0;
        } else if (inputForRockPaperScissors === "Scissors" && aiInput === "scissors") {
            document.getElementById("result").innerHTML = "It's a draw!";
        } else if (inputForRockPaperScissors === "scissors") {
            document.getElementById("result").innerHTML = "Please use capital";
        } else if (inputForRockPaperScissors === "paper") {
            document.getElementById("result").innerHTML = "Please use capital";
        } else if (inputForRockPaperScissors === "rock") {
            document.getElementById("result").innerHTML = "Please use capital";
        } else if (inputForRockPaperScissors === "scissor") {
            document.getElementById("result").innerHTML = "Please use capital and add an s at the end when using scissors";
        } else if (inputForRockPaperScissors === "Win") {
            document.getElementById("result").innerHTML = "You Thought you broke the system but it was me DIO!";
        } else if (inputForRockPaperScissors === "Pistol") {
            document.getElementById("result").innerHTML = "No... Just no.";
        } else if (inputForRockPaperScissors === "Yeet") {
            document.getElementById("result").innerHTML = "Yoink!";
        } else if (inputForRockPaperScissors === "up up down down left right left right B A start") {
            document.getElementById("result").innerHTML = "You won!!!!!";
        } else {
            document.getElementById("result").innerHTML = "Please use a valid input...";
        }
        document.getElementById("streak").innerHTML = "Current streak: " + streak;

        document.getElementById("streakMax").innerHTML = "Biggest streak: " + streakMax;

        setTimeout(function() {
            hideScissors()
            if (aiInput === "paper") {
                hidePaperAi();
            } else if (aiInput === "rock") {
                hideRockAi();
            } else if (aiInput === "scissors") {
                hideScissorsAi();
            }
            document.getElementById("result").innerHTML = "Will you play another round?";
        }, 1500);

    }, 1500);

}

/*
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
*/
// a key map of allowed keys

function onKonamiCode(cb) {
    var input = '';
    var key = '38384040373937396665';
    document.addEventListener('keydown', function(e) {
        input += ("" + e.keyCode);
        if (input === key) {
            return cb();
        }
        if (!key.indexOf(input)) return;
        input = ("" + e.keyCode);
    });
}

onKonamiCode(function() {
    alert('SECRET!!!!!')
})