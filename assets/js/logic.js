// Introduce variables 
var startButton = document.getElementById('start');
var submitButton = document.getElementById('submit');
var initTracking = document.getElementById('initials');
var feedbackTracking = document.getElementById('feedback');
var questions = document.getElementById('questions');
var timeEl = document.querySelector('#time');
var questions = document.querySelector('#questions');
var finalScore = document.querySelector('#finalScore');
var startScreen = document.getElementById('#start-screen');
var timerTracker = document.querySelector("time");
var choicesEl = document.querySelector('#choices');
var questionsIndex  = 0;
var secondsLeft = 60;
var timer;
var questionsTitle = document.querySelector("#questions-title");





function setTime(){
var timerInterval = setInterval(function(){
    secondsLeft--;
    if (secondsLeft === 0) {
clearInterval(timerInterval);
sendMessage();
    }
}, 
1000);
};


// function to start  quiz
function startQuiz() {
startScreen.setAttribute('class', 'hide');
questions.setAttribute('class', 'show');
timer = setInterval();
receiveQuestions()
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

}

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


// // Intro methodology 

// for (var i = 0; i < questions.length; i++){
    //     console.log(questions[i])
    //         for (var j = 0; j < questions[i].choices.length; j++)
    //         {
        //             console.log(questions[i].choices[j] + " " );
        //         }
        // };
        
        
        // var questions;
        
        // function start_quiz(){
            //   questions = 0;
            //   show_question;
        //   questions.classList.remove("hide")
        // };
        
        // function show_question() {
        //   questionDisplay.textContent = questions[questions].Question;
        //   for (j = 0; j < 4; j++) {
        //     var button = document.createElement('button')
        //     button.innerText = questions[questions].Answers[j]
        //     answersDiv.appendChild(button);
        //   };
        
        // // next_question() {
        // //   question++;
        // //   check if all questions have been asked then either show_question or end_quiz
        // // }