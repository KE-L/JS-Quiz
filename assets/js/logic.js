// Intro variables 
var startButton = document.getElementById('start');
var submitButton = document.getElementById('submit');
var initTracking = document.getElementById('initials');
var feedbackTracking = document.getElementById('feedback');
var questions = document.getElementById('questions');

// Intro timer linked to start button
var timerTracker = document.querySelector("time");
var secondsLeft = 60;
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
// Intro faster increment if answer is incorrect

// Init game & clear "start" screen 
function initQuiz () {
var startScreen = document.getElementById('start-screen');
startScreen.classList.add("hide")
questions.classList.remove("hide")
}
startButton.addEventListener('click', initQuiz) 


// Intro questions 
var questions;

start_quiz() {
  questions = 0;
  show_questions 

show_question() {
  questionDisplay.textContent = questions[question].Question;
  for (j = 0; j < 4; j++) {
    var button = document.createElement('button')
    button.innerText = questions[question].Answers[j]
    answersDiv.appendChild(button);
  }
}

// next_question() {
//   question++;
//   check if all questions have been asked then either show_question or end_quiz
// }

var questions = [
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
answer: "",

}, 

// // Intro methodology 

];

// for (var i = 0; i < questions.length; i++){
//     console.log(questions[i])
//         for (var j = 0; j < questions[i].choices.length; j++)
//         {
//             console.log(questions[i].choices[j] + " " );
//         }
// };

