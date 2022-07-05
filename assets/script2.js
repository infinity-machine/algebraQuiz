var qA = [{
    question: 'what is uhhhhh',
    choices: ['options1', 'option2', 'option3', 'option4'],
    answer: 1
},
{
    question: 'question 2',
    choices: ['option1', 'option2', 'option3', 'option4'],
    answer: 0
},
{
    question: 'question 3',
    choices: ['option1', 'option2', 'option3', 'option4'],
    answer: 2
},
{
    question: 'question 4',
    choices: ['option1', 'option2', 'option3', 'option4'],
    answer: 3
},
{
    question: 'question 5',
    choices: ['option1', 'option2', 'option3', 'option4'],
    answer: 1
},
{
    question: 'question 6',
    choices: ['option1', 'option2', 'option3', 'option4'],
    answer: 4
},
{
    question: 'question 7',
    choices: ['option1', 'option2', 'option3', 'option4'],
    answer: 0
},
{
    question: 'question 8',
    choices: ['option1', 'option2', 'option3', 'option4'],
    answer: 0
},
{
    question: 'question 9',
    choices: ['option1', 'option2', 'option3', 'option4'],
    answer: 2
},
{
    question: 'question 10',
    choices: ['option1', 'option2', 'option3', 'option4'],
    answer: 3
}];
var currentQ = 0;
var timeSecond = 60;
var userScore = 0
var begin = document.getElementById('begin')
var quiz = document.getElementById('quiz')
var questionTitle = document.getElementById('question');
var choice1 = document.getElementById('choice1')
var choice2 = document.getElementById('choice2')
var choice3 = document.getElementById('choice3')
var choice4 = document.getElementById('choice4')
var beginBtn = document.getElementById('beginBtn');
var done = document.getElementById('done');
var score = document.getElementById('score')

beginBtn.addEventListener('click', () => {
    startTimer();
    displayQuestion();
});
choice1.addEventListener('click', checkAnswer);
choice2.addEventListener('click', checkAnswer);
choice3.addEventListener('click', checkAnswer);
choice4.addEventListener('click', checkAnswer);
time = document.getElementById('time');

function startTimer() {
    var countDown = setInterval(function beginTime() {
        timeSecond--;
        time.innerHTML = `00:${timeSecond}`;
        if (timeSecond === 0) {
            clearInterval(countDown);
            alert('OUT OF TIME!')
            endQuiz();
        }
    }, 1000)
}

function displayQuestion() {
    begin.remove();
    questionTitle.innerText = qA[currentQ].question;
    choice1.innerText = qA[currentQ].choices[0]
    choice2.innerText = qA[currentQ].choices[1]
    choice3.innerText = qA[currentQ].choices[2]
    choice4.innerText = qA[currentQ].choices[3]

}
function checkAnswer(event) {
    console.log(event.target.dataset.index)
    if (qA[currentQ].answer == event.target.dataset.index) {
        console.log('CORRECT!');
        userScore++;
    } else {
        console.log('WRONG!!!!');
    }
    currentQ++;
    if (currentQ >= qA.length) {
        endQuiz();
    } else {
        displayQuestion();
    }
}

function endQuiz() {
    userInitials = prompt('enter your initials!');
    localStorage.setItem(userInitials, userScore);
    time.remove();
    quiz.remove();
}


for (i = 0; i < localStorage.length; i++) {
    listedScore = document.createElement('li')
    listedScore.innerText = `${localStorage.key(i)} - ${localStorage.getItem(localStorage.key(i))}`
    document.getElementById('highScores').appendChild(listedScore)
}

