var q2 = '3x -4 = 5'
    a2 = ['x = 2', 'x = 6', 'x = 4', 'x = 3']

    q3 = '4x / 2 = 6'
    a3 = ['x = 8', 'x = 3', 'x = 2', 'x = 5']

    q4 = '8x-12 = 20'
    a4 = ['x = 10', 'x = 6', 'x = 0', 'x = 4']

    q5 = '4x / 8 = 2'
    a5 = ['x = 2', 'x = 3', 'x = 4', 'x = 6']

    q6 = '9x / 3 = 18'
    a6 = ['x = 12', 'x = 9', 'x = 4', 'x = 6']

    q7 = '48 / 3x = 8'
    a7 = ['x = 6', 'x = 2', 'x = 9', 'x = 7']

    q8 = '(5x)(x/2) = 40'
    a8 = ['x = 16', 'x = 12', 'x = 18', 'x = 9']

    q9 = '10x(x) = (5x)4'
    a9 = ['x = 5', 'x = 3', 'x = 9', 'x = 2']

    q10 = '5(x + 9) = 7x'
    a10 = ['x = 8', 'x = 4', 'x = 7', 'x = 6']

    
var qLineEl = document.getElementById('qLine');
var a1LineEl = document.getElementById('a1Line');
var a2LineEl = document.getElementById('a2Line');
var a3LineEl = document.getElementById('a3Line');
var a4LineEl = document.getElementById('a4Line');
var a1RadioEl = document.getElementById('a1Radio');
var a2RadioEl = document.getElementById('a2Radio');
var a3RadioEl = document.getElementById('a3Radio');
var a4RadioEl = document.getElementById('a4Radio');
var subBtnEl = document.getElementById('subBtn');
var radios = document.querySelectorAll('input[name="answer');
var a1RadioEl = document.getElementById('a1Radio');
var a2RadioEl = document.getElementById('a2Radio');
var a3RadioEl = document.getElementById('a3Radio');
var a4RadioEl = document.getElementById('a4Radio');
var userScore = 0;

timeH = document.getElementById('timeH');
var timeSecond = 60;
timeH.innerHTML = `00:${timeSecond}`;

subBtn.addEventListener('click', function(event) {
    event.preventDefault();
})

beginBtn.addEventListener('click', function beginQuiz(){
    var countDown = setInterval(function beginTime() {
    timeSecond --;
    timeH.innerHTML = `00:${timeSecond}`;
    if (timeSecond === 0) {
            clearInterval(countDown);  
            alert('OUT OF TIME!')
        }
    }, 1000)
    var beginEl = document.getElementById('begin');
    beginEl.remove();
    document.getElementById('quiz').style.visibility = "visible"
})

subBtn.addEventListener('click', function question2(){
    qLineEl = document.getElementById('qLine');
    qLineEl.innerHTML = q2;
    a1LineEl.innerHTML = a2[0]
    a2LineEl.innerHTML = a2[1]
    a3LineEl.innerHTML = a2[2]
     a4LineEl.innerHTML = a2[3]
     if (a3RadioEl.checked) userScore++;
     console.log(userScore)
    subBtn.addEventListener('click', function question3(){
        qLineEl = document.getElementById('qLine')
        qLineEl.innerHTML = q3
        a1LineEl.innerHTML = a3[0]
        a2LineEl.innerHTML = a3[1]
        a3LineEl.innerHTML = a3[2]
        a4LineEl.innerHTML = a3[3]
        if (a4RadioEl.checked) userScore++;
        console.log(userScore)
        subBtn.addEventListener('click', function question4(){
            qLineEl = document.getElementById('qLine')
            qLineEl.innerHTML = q4
            a1LineEl.innerHTML = a4[0]
            a2LineEl.innerHTML = a4[1]
            a3LineEl.innerHTML = a4[2]
            a4LineEl.innerHTML = a4[3]
            if (a2RadioEl.checked) userScore++;
            console.log(userScore)
            subBtn.addEventListener('click', function question5(){
                qLineEl = document.getElementById('qLine')
                qLineEl.innerHTML = q5
                a1LineEl.innerHTML = a5[0]
                a2LineEl.innerHTML = a5[1]
                a3LineEl.innerHTML = a5[2]
                a4LineEl.innerHTML = a5[3]
                if (a4RadioEl.checked) userScore++;
                console.log(userScore)
                subBtn.addEventListener('click', function question6(){
                    qLineEl = document.getElementById('qLine')
                    qLineEl.innerHTML = q6
                    a1LineEl.innerHTML = a3[0]
                    a2LineEl.innerHTML = a6[1]
                    a3LineEl.innerHTML = a6[2]
                    a4LineEl.innerHTML = a6[3]
                    if (a3RadioEl.checked) userScore++;
                    console.log(userScore)
                    subBtn.addEventListener('click', function question7(){
                        qLineEl = document.getElementById('qLine')
                        qLineEl.innerHTML = q7
                        a1LineEl.innerHTML = a3[0]
                        a2LineEl.innerHTML = a7[1]
                        a3LineEl.innerHTML = a7[2]
                        a4LineEl.innerHTML = a7[3]
                        if (a4RadioEl.checked) userScore++;
                        console.log(userScore)
                        subBtn.addEventListener('click', function question8(){
                            qLineEl = document.getElementById('qLine')
                            qLineEl.innerHTML = q8
                            a1LineEl.innerHTML = a8[0]
                            a2LineEl.innerHTML = a8[1]
                            a3LineEl.innerHTML = a8[2]
                            a4LineEl.innerHTML = a8[3]
                            if (a2RadioEl.checked) userScore++;
                            console.log(userScore)
                            subBtn.addEventListener('click', function question9(){
                                qLineEl = document.getElementById('qLine')
                                qLineEl.innerHTML = q9
                                a1LineEl.innerHTML = a9[0]
                                a2LineEl.innerHTML = a9[1]
                                a3LineEl.innerHTML = a9[2]
                                 a4LineEl.innerHTML = a9[3]
                                 if (a1RadioEl.checked) userScore++;
                                console.log(userScore)
                                subBtn.addEventListener('click', function question10(){
                                    qLineEl = document.getElementById('qLine')
                                    qLineEl.innerHTML = q10
                                    a1LineEl.innerHTML = a10[0]
                                    a2LineEl.innerHTML = a10[1]
                                    a3LineEl.innerHTML = a10[2]
                                    a4LineEl.innerHTML = a10[3]   
                                    if (a4RadioEl.checked) userScore++;
                                    console.log(userScore)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

   
