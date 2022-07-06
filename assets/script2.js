// QUESTIONS
var qA = [{
    question: '6x + 5 = 47',
    choices: ['x = 7', 'x = 3', 'x = 5', 'x = 9'],
    answer: 0
},
{
    question: '7 + 2x = 23 ',
    choices: ['x = 4', 'x = 9', 'x = 8', 'x = 10'],
    answer: 2
},
{
    question: '10 + 7x = 45',
    choices: ['x = 6', 'x = 8', 'x = 3', 'x = 5'],
    answer: 3
},
{
    question: '6x + 9 = 15 ',
    choices: ['x = 1', 'x = 4', 'x = 2', 'x = 3'],
    answer: 0
},
{
    question: '1 + 7x = 8',
    choices: ['x = 3', 'x = 1', 'x = 2', 'x = 9'],
    answer: 1
},
{
    question: '5x - 4 = 51',
    choices: ['x = 6', 'x = 10', 'x = 9', 'x = 11'],
    answer: 3
},
{
    question: '6x - 6 = 48 ',
    choices: ['x = 9', 'x = 14', 'x = 7', 'x = 6'],
    answer: 0
},
{
    question: '- 4x + 4 = - 12',
    choices: ['x = 4', 'x = -4', 'x = 2', 'x = -3'],
    answer: 0
},
{
    question: '2x + 3 = 11',
    choices: ['x = 4', 'x = 5', 'x = 7', 'x = 8'],
    answer: 2
},
{
    question: '- 7x - 9 = - 93',
    choices: ['x = -10', 'x = -8', 'x = 16', 'x = 12'],
    answer: 3
}];

// VARIABLES
var QAIndex = 0;
var timeSecond = 60;
var userScore = 0;

// DOCUMENT
var timerP = document.getElementById('timerP')
var timerSpan = document.getElementById('timerSpan');
var start = document.getElementById('start');
var beginBtn = document.getElementById('beginBtn');
var quiz = document.getElementById('quiz');
var question = document.getElementById('question');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
var done = document.getElementById('done');

// START QUIZ
timerSpan.innerText = '00';
beginBtn.addEventListener('click', () => {
    startTimer();
    start.remove();
    displayQuestion();
});
choice1.addEventListener('click', checkAnswer);
choice2.addEventListener('click', checkAnswer);
choice3.addEventListener('click', checkAnswer);
choice4.addEventListener('click', checkAnswer);

// TIMER
function startTimer() {
    timerSpan.innerText = '60';
    var countDown = setInterval(function beginTime() {
        timeSecond--;
        timerSpan.innerText = timeSecond;
        if (timeSecond < 30) {
            timerP.style.color = 'red'
            timerSpan.style.color = 'red'
        }
        if (timeSecond < 10) {
            timerSpan.innerText = `0${timeSecond}`;
        }
        if (timeSecond === 0) {
            clearInterval(countDown);
            alert('OUT OF TIME!')
            endQuiz();
        }
    }, 1000)
}

// QUIZ BODY
// DISPLAY QUESTIONS
function displayQuestion() {
    question.innerText = qA[QAIndex].question;
    choice1.innerText = qA[QAIndex].choices[0]
    choice2.innerText = qA[QAIndex].choices[1]
    choice3.innerText = qA[QAIndex].choices[2]
    choice4.innerText = qA[QAIndex].choices[3]
}
// CHECK ANSWERS, TEE UP REMAINING QUESTIONS, END QUIZ WHEN COMPLETE
function checkAnswer(event) {
    console.log(event.target.dataset.index)
    if (qA[QAIndex].answer == event.target.dataset.index) { 
        userScore++
        console.log('CORRECT!')
    } else {
        console.log('wrong')
    }
    QAIndex++;
    if (QAIndex >= qA.length) {endQuiz();} 
    else {displayQuestion();}
}
//END OF QUIZ
function endQuiz() {
    userName = prompt('enter your name!');
    localStorage.setItem(userName, userScore);
    timerP.remove();
    timerSpan.remove();
    quiz.remove();
    var highScores = document.getElementById('highScores');
        highScores.innerText = 'HIGH SCORES!'
    for (i = 0; i < localStorage.length; i++) {
        listedScore = document.createElement('li')
        listedScore.innerText = `${localStorage.key(i)} - ${localStorage.getItem(localStorage.key(i))}`
        document.getElementById('highScores').appendChild(listedScore)
    }
}







