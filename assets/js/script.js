var startButton = document.getElementById("start");
var introText = document.getElementById("introTextContainer");
var answerButtons = document.getElementById("answer-buttons");
var timer = document.getElementById("timer-container");

var btnA = document.getElementById("a");
var btnB = document.getElementById("b");
var btnC = document.getElementById("c");


var currentQuestion = 0;
var i = 0;

var myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
    },
    correctAnswer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "ESLint",
      b: "jQuery",
      c: "RequireJS",
      
    },
    correctAnswer: "a",
  },
];

// when start button is pressed a new <li> is produced in <section><section/>
var questionEl = document.querySelector("#tasks-to-do");

var questionHandler = function(event) {
  var questionItemEl = document.createElement("li");
  questionItemEl.className = "task-item";
  questionItemEl.textContent = myQuestions[currentQuestion].question;
  questionEl.appendChild(questionItemEl);
};

startButton.addEventListener("click", questionHandler);



// START BUTTON
startButton.addEventListener("click", function () {
  closeDiv();
  showQuestion();
  countdown();
  startGame();
});



// give classname that specifys whether that answer is correct or incorrenct, then onButtonClick di if statement that checks className if selected choice === correct answer is correct else wrong answer

//compare id value to correct answer



// on button click find value of buttons id then store that value in a variable then console.log it
var buttonListenerA = document.getElementById("a").addEventListener("click", function() {
  console.log(btnA.id)
  if (btnA.id === myQuestions[currentQuestion].correctAnswer) {
    window.alert("Correct!");
    nextQuestion();
  } else {
    window.alert("Wrong answer");
  }
});

var buttonListenerB = document.getElementById("b").addEventListener("click", function() {
  console.log(btnB.id)
  if (btnB.id === myQuestions[currentQuestion].correctAnswer) {
    window.alert("Correct!");
    nextQuestion();
  } else {
    window.alert("Wrong answer");
  }
});

var buttonListenerC = document.getElementById("c").addEventListener("click", function() {
  console.log(btnC.id)
  if (btnC.id === myQuestions[currentQuestion].correctAnswer) {
    window.alert("Correct!");
    nextQuestion();
  } else {
    window.alert("Wrong answer");
  }
});

function nextQuestion() {
  currentQuestion++;
  questionHandler();
}

function endGame() {
  if (currentQuestion === 3) {
    console.log("Congratulations! you have reached the end of the game");
  }
}


//compare that value to the value of the correct answer

// function checkAnswer() {
//   if (answerChosen === this.myQuestions[i].correctAnswer) {
//     window.alert("You answered correctly")
//   } else {
//     window.alert("incorrect")
//   }
// }

//for each question isolate the correct answer then look for what the user pressed
// do with if statement or switch case











function startGame() {
  
  btnA.innerHTML = myQuestions[currentQuestion].answers.a;
  btnB.innerHTML = myQuestions[currentQuestion].answers.b;
  btnC.innerHTML = myQuestions[currentQuestion].answers.c;

  
  if (currentQuestion === 1) {
    questionTextBox.textContent = myQuestions[0].question;
  } else if (currentQuestion === 2) {
    questionTextBox.textContent = myQuestions[1].question;
  } else if (currentQuestion === 3) {
    questionTextBox.textContent = myQuestions[2].question;
  }
}

// funtion designed to make questions appear on the html webpage after start button is clicked
function showQuestion() {
  answerButtons.style.display = "block";
  timer.style.display = "block";
}

// function designed to make start button and intro text dissapear after start button is clicked
function closeDiv() {
  introText.style.display = "none";
  startButton.style.display = "none";
}









// var infoEl = document.createElement("div");
// var imgEl = document.createElement("img");
//var questionEl = document.createElement("div");

// function nextQuestion() {}
// // using a for loop update questionTextBox.textContent with currentQuestion which comes from the myQuestions array
// // use for each here:


// function showDiv() {
//     questionBox.style.display = "block";
//   }

// function startTimer() {
//   // set interval timer
//   // what is left on timer = the score
//   // wrong answer is time subtracted
// }

// function gameOver() {
//   setInterval(function () {
//     alert("Times Up - Game Over!");
//   }, 30000);
// } 


// // add question attempt 1
// questionEl.textContent =
//     "myQuestions[0]";
 
//   infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
  
//   questionEl.setAttribute("style", "font-size:25px; text-align:center");
//   document.body.appendChild(infoEl);
//   infoEl.appendChild(imgEl);
//   infoEl.appendChild(questionEl);
  
  




var mins = 2;

//calculate the seconds
var secs = mins * 60;

//countdown function is evoked when start button is clicked
function countdown() {
  setTimeout("Decrement()", 60);
}

//Decrement function decrement the value.
function Decrement() {
  if (document.getElementById) {
    minutes = document.getElementById("minutes");
    seconds = document.getElementById("seconds");

    //if less than a minute remaining
    //Display only seconds value.
    if (seconds < 59) {
      seconds.value = secs;
    }

    //Display both minutes and seconds
    else {
      minutes.value = getminutes();
      seconds.value = getseconds();
    }
    //when less than a minute remaining color changes to red
    if (mins < 1) {
      minutes.style.color = "red";
      seconds.style.color = "red";
    }
    //if seconds becomes zero, page alert time up
    if (mins < 0) {
      alert("time up");
      minutes.value = 0;
      seconds.value = 0;
    }
    //if seconds > 0 then seconds is decremented
    else {
      secs--;
      setTimeout("Decrement()", 1000);
    }
  }
}

function getminutes() {
  //minutes is seconds divided by 60, rounded down
  mins = Math.floor(secs / 60);
  return mins;
}

function getseconds() {
  //take minutes remaining (as seconds) away
  //from total seconds remaining
  return secs - Math.round(mins * 60);
}




