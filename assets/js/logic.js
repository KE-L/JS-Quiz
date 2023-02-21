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
var questionsIndex  = 0;
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
timer = setInterval(timerTick(),1000);
receiveQuestions();
}

function timerTick(){
    secondsLeft --;
    timeEl.textContent = secondsLeft;
    if(secondsLeft <= 0) {
        endQuiz();
    }
}
// function to receive questions
function receiveQuestions(){
var startingQuestion = questionsArr[questionsIndex];
questionsTitle.textContent = startingQuestion.title;
choicesEl.innerHTML = '';
startingQuestion.choices.forEach(function(choice, index){
    var choices = document.createElement('button');
    choices.setAttribute('class','choice');
    choices.setAttribute('value',choice);
    choices.textContent = index + 1 + '. ' + choice;
    choices.onclick = questionsClickFunc;
    choicesEl.appendChild(choices);
})
}
// function to flick through question
function questionsClickFunc(){
    if(this.value !== questionsArr[questionsIndex].answer){
        secondsLeft -= 15;

        if(secondsLeft < 0){
            secondsLeft = 0;
        }
timeEl.textContent  = secondsLeft;

feedbackTracking.textContent = 'Wrong answer';


    } else {
        feedbackTracking.textContent = 'Correct answer';
    }

feedbackTracking.setAttribute('class', 'feedback');
setTimeout(function(){
    feedbackTracking.setAttribute('class', 'feeback hide')
},1000);

questionsIndex ++;

if(questionsIndex === questionsArr.length){
    endQuiz()
} else {
    receiveQuestions()
}

};
//function to end Quiz
function endQuiz(){
    clearInterval(timer);

    // var highScoreEl = document.querySelector('#highscore-section');
    // highScoreEl.setAttribute('class', 'show');


    var lastScore = document.querySelector('#final-score');
    lastScore.textContent =  secondsLeft;

    questions.setAttribute('class', 'hide');
}

startButton.onclick = startQuiz;


// Introduce questions 
var questionsArr = [
    {
        title: "Question 1",
        choices: ["A","b","c","d"],
        answer: "d",
        
    }
    , 
    {
        title: "Question 2",
        choices: ["1","2","3","4"],
        answer: "4",
    },
    {
        title: "Question 3",
        choices: ["data","set","match","flex"],
        answer: "flex",
    },
    {
        title: "Question 4",
        choices: ["me","say","no","way"],
        answer: "say",
        
    }, 

{
    title: "Question 5",
    choices: ["litty","titty","in","the","city"],
    answer: "no",
    
}, 
];

