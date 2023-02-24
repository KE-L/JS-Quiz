// Introduce variables 
var startButton = document.getElementById('start');
var submitButton = document.getElementById('submit');
var initTracking = document.getElementById('initials');
var feedbackTracking = document.getElementById('feedback');
var questions = document.getElementById('questions');
var timeEl = document.querySelector('#time');
var questions = document.querySelector('#questions');
var finalScore = document.querySelector('#finalScore');
var startScreen = document.querySelector('#start-screen');
var timerTracker = document.querySelector("time");
var choicesEl = document.querySelector('#choices');
var questionsIndex = 0;
var secondsLeft = 60;
var timer;
var questionsTitle = document.querySelector("#question-title");





// function setTime(){
// var timerInterval = setInterval(function(){
//     secondsLeft--;
//     if (secondsLeft === 0) {
// clearInterval(timerInterval);
// sendMessage();
//     }
// }, 
// 1000);
// };


// function to start  quiz
function startQuiz() {
    startScreen.setAttribute("class", "hide");
    questions.setAttribute('class', 'show');
    timer = setInterval(timerTick(), 1000);
    receiveQuestions();
}

function timerTick() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft <= 0) {
        endQuiz();
    }
}
// function to receive questions
function receiveQuestions() {
    var startingQuestion = questionsArr[questionsIndex];
    questionsTitle.textContent = startingQuestion.title;
    choicesEl.innerHTML = '';
    startingQuestion.choices.forEach(function (choice, index) {
        var choices = document.createElement('button');
        choices.setAttribute('class', 'choice , btn btn-info');
        choices.setAttribute('value', choice);
        choices.textContent = index + 1 + '. ' + choice;
        choices.onclick = questionsClickFunc;
        choicesEl.appendChild(choices);
    })
}
// function to flick through question
function questionsClickFunc() {
    if (this.value !== questionsArr[questionsIndex].answer) {
        secondsLeft -= 15;

        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
        timeEl.textContent = secondsLeft;

        feedbackTracking.textContent = 'Wrong answer';


    } else {
        feedbackTracking.textContent = 'Correct answer';
    }

    feedbackTracking.setAttribute('class', 'feedback');
    setTimeout(function () {
        feedbackTracking.setAttribute('class', 'feeback hide')
    }, 1000);

    questionsIndex++;

    if (questionsIndex === questionsArr.length) {
        endQuiz()
    } else {
        receiveQuestions()
    }

};
//function to end Quiz
function endQuiz() {
    clearInterval(timer);

    // var highScoreEl = document.querySelector('#highscore-section');
    // highScoreEl.setAttribute('class', 'show');


    var lastScore = document.querySelector('#final-score');
    lastScore.textContent = secondsLeft;

    questions.setAttribute('class', 'hide');
}

startButton.onclick = startQuiz;


// Introduce questions 
var questionsArr = [
    {
        title: 'Question 1 = What is JavaScript',
        choices: ['A = An orange cake', 'b = An actors prop', 'c = A coding language'],
        answer: 'c',
    }
    ,
    {
        title: 'Question 2 = What is a Boolean?',
        choices: ['1 = An Aussie toy', '2 = A Datatype', '3 = The latest dance craze'],
        answer: '2',
    },
    {
        title: ' Question 3 = What is Boolean used for?',
        choices: ['a = To combine or exclude keywords for a focused a search,', 'b = To start drama', 'c = hair removal'],
        answer: 'a = To combine or exclude keywords for a focused a search',
    },
    {
        title: 'Question 4 = What is string in data type?',
        choices: ['1 = an array data structure of bytes (or words) that stores a sequence of elements', '2 = The place to be on friday night', '3 = nothing'],
        answer: '1 = an array data structure of bytes (or words) that stores a sequence of elements',
    },
    {
        title: 'Question 5 - What is a string vs integer?',
        choices: ['a = Integer is a numeric value, while String is a character value represented in quotes', 'b = The latest Star Warz Movie', 'c = The next big MMA fight '],
        answer: 'a = Integer is a numeric value, while String is a character value represented in quotes'
    },
];

