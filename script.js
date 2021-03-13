var startButton = document.querySelector("#start-button");
var introText = document.getElementById("introText-container");
var questionBox = document.getElementById("question-container");
var timer = document.getElementById("timer-container");
var infoEl = document.createElement('div');
var imgEl = document.createElement("img");
var questionEl = document.createElement('div');
var i = 0;


// START BUTTON
startButton.addEventListener("click", function () {
  console.log("This button works!");
  closeDiv();
  showQuestion();
  countdown();
});

function startTimer() {
  // set interval timer
  // what is left on timer = the score
  // wrong answer is time subtracted
}

function gameOver() {
    setInterval(function(){ alert("Times Up Game Over!"); }, 30000);
  }



// funtion designed to make questions appear on the html webpage after start button is clicked
function showQuestion() {
    /*
  for (var i = 0; i < myQuestions.length; i++) {
    console.log(myQuestions[i]);
    console.log("helllloooooo anyboy there?");*/

    questionEl.textContent = "got to somehow get the question array to show up here somehow.";

//imgEl.setAttribute('src', "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
//imgEl.setAttribute('height', 200);
//imgEl.setAttribute('width', 200);
questionEl.setAttribute('style', 'font-size:25px; text-align:center');
document.body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(questionEl);
    
  }
//}


// function designed to make start button and intro text dissapear after start button is clicked
function closeDiv() {
  introText.style.display = "none";
  startButton.style.display = "none";
  questionBox.style.display = "block";
  timer.style.display = "block";
}




// Timer function
//set minutes 
var mins = 2; 
  
//calculate the seconds 
var secs = mins * 60; 

//countdown function is evoked when page is loaded 
function countdown() { 
    setTimeout('Decrement()', 60); 
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
        //getminutes and getseconds is used to 
        //get minutes and seconds 
        else { 
            minutes.value = getminutes(); 
            seconds.value = getseconds(); 
        } 
        //when less than a minute remaining 
        //colour of the minutes and seconds 
        //changes to red 
        if (mins < 1) { 
            minutes.style.color = "red"; 
            seconds.style.color = "red"; 
        } 
        //if seconds becomes zero, 
        //then page alert time up 
        if (mins < 0) { 
            alert('time up'); 
            minutes.value = 0; 
            seconds.value = 0; 
        } 
        //if seconds > 0 then seconds is decremented 
        else { 
            secs--; 
            setTimeout('Decrement()', 1000); 
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
 




// make sure to hide questions at start

// on click make questions appear and intro text to disapear
// timer also starts on click
// first question appears

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



/*
function showDiv() {
    questionBox.style.display = "block";
  }
*/