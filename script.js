var startButton = document.querySelector("#start-button");
var introText = document.getElementById("introText-container");
var questionBox = document.getElementById("question-container");
var timer = document.getElementById("timer-container");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var questionEl = document.createElement("div");




// make sure to hide questions at start

// on click make questions appear and intro text to disapear
// timer also starts on click
// first question appears


// START BUTTON
startButton.addEventListener("click", function () {
  console.log("This button works!");
  closeDiv();
  showQuestion();
  countdown();
  startGame(myQuestions[0]);
});
/*
// if answered correctly move to next question
// else alert try again
if (answer is correct) {
    nextQuestion()
    } else {
        alert("wrong,select again")
    } 
*/



// funtion designed to make questions appear on the html webpage after start button is clicked
function showQuestion() {

    questionBox.style.display = "block";
    timer.style.display = "block";

    

  
  
}


// function designed to make start button and intro text dissapear after start button is clicked
function closeDiv() {
  introText.style.display = "none";
  startButton.style.display = "none";
  
}

// Timer function
//set minutes
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
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
  },
];

var currentQuestion = 0;
var i = 0;

function startGame() {
  
var questionTextBox = document.querySelector(".currentQuestionTextBox");
if (currentQuestion === 1) {
    questionTextBox.textContent = myQuestions[0].question;
}
else if (currentQuestion === 2) {
    questionTextBox.textContent = myQuestions[1].question;
} else if (currentQuestion === 3) {
    questionTextBox.textContent = myQuestions[2].question;
}

}

function nextQuestion() {
    
}
// using a for loop update questionTextBox.textContent with currentQuestion which comes from the myQuestions array
// use for each here:


/*
function showDiv() {
    questionBox.style.display = "block";
  }

function startTimer() {
  // set interval timer
  // what is left on timer = the score
  // wrong answer is time subtracted
}

function gameOver() {
  setInterval(function () {
    alert("Times Up - Game Over!");
  }, 30000);
} 


// add question attempt 1
questionEl.textContent =
    "myQuestions[0]";
 
  infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
  
  questionEl.setAttribute("style", "font-size:25px; text-align:center");
  document.body.appendChild(infoEl);
  infoEl.appendChild(imgEl);
  infoEl.appendChild(questionEl);
  
  */

