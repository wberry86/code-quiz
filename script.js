var startButton = document.querySelector('#start-button');
var introText = document.getElementById('introText-container');
var questionBoxEl = document.getElementById('question-container');



startButton.addEventListener("click", function() {
    console.log("This button works!");
    showDiv();
    closeDiv();
})




function showDiv() {
  questionBoxEl.style.display = "block";
}

function closeDiv() {
  
  introText.style.display = "none";
}







// make sure to hide questions at start

// on click make questions appear and intro text to disapear
// timer also starts on click
// first question appears

/*
var myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm",
        },
        correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
        },
        correctAnswer: "d"
    }
];

*/