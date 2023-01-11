var minutesLeft = 0;
var secondsLeft = 0;
var timeleft = 0;
min = Math.ceil(1);
max = Math.floor(10);
rand1 = Math.floor(Math.random() * (max - min)) + min;
rand2 = Math.floor(Math.random() * (max - min)) + min;

var time_of_given_question = new Array();
time_of_given_question.push(new Date().toLocaleString());
localStorage.setItem('time_of_given_question', time_of_given_question)
var question_digits = new Array();
localStorage.setItem('question_digits', [])
var user_answer = new Array();
localStorage.setItem('user_answer', [])
var correct_number = new Array();
localStorage.setItem('correct_number', [])

var countOfAnswers = 0;
localStorage.setItem('all_answers', 0)
var countOfCorrectAnswers = 0;
localStorage.setItem('correct_answers', 0)

var answers = new Array();
localStorage.setItem('answers', [])

var downloadTimer = setInterval(function () {
    localStorage.setItem('time_mins', minutesLeft)
    localStorage.setItem('time_sec', secondsLeft)
    if (minutesLeft >= 10) {
        clearInterval(downloadTimer);
        document.getElementById("text").innerHTML = "Время вышло";
        window.location.href = 'results.html';
    } else if (secondsLeft >= 60) {
        secondsLeft = 0;
        minutesLeft += 1;
    } else if (secondsLeft >= 0 && secondsLeft <= 9) {
        document.getElementById("timer").innerHTML = "Времени прошло: " + minutesLeft + ".0" + secondsLeft;
    } else {
        document.getElementById("timer").innerHTML = "Времени прошло: " + minutesLeft + "." + secondsLeft;
    }
    secondsLeft += 1;
}, 1000);

function readClick(num) {
    time_of_given_question.push(new Date().toLocaleString())
    localStorage.setItem('time_of_given_question', time_of_given_question)
    user_answer.push(num)
    localStorage.setItem('user_answer', user_answer)
    question_digits.push(new Array([rand1, rand2]))
    localStorage.setItem('question_digits', question_digits)

    if (localStorage.getItem('game_type') == "2") {
        console.log(rand1 + "+" + rand2 + "=" + num);
        document.getElementById("operation").innerHTML = rand1 + "+" + rand2;
        countOfAnswers += 1;
        localStorage.setItem('all_answers', countOfAnswers)
        console.log(localStorage.getItem('all_answers'));
        correct_number.push((rand1 + rand2) % 10);
        localStorage.setItem('correct_number', correct_number)
        if ((rand1 + rand2) % 10 == num) {
            countOfCorrectAnswers += 1;
            localStorage.setItem('correct_answers', countOfCorrectAnswers);
            answers.push(1);
            localStorage.setItem('answers', answers);
            console.log(localStorage.getItem('correct_answers') + "YES");
        } else {
            answers.push(0);
            localStorage.setItem('answers', answers);
        }
    }
    else if (localStorage.getItem('game_type') == "1") {
        console.log(rand1 + "*" + rand2 + "=" + num);
        document.getElementById("operation").innerHTML = rand1 + "*" + rand2;
        countOfAnswers += 1;
        localStorage.setItem('all_answers', countOfAnswers)
        console.log(localStorage.getItem('all_answers'));
        correct_number.push((rand1 * rand2) % 10);
        localStorage.setItem('correct_number', correct_number)
        if ((rand1 * rand2) % 10 == num) {
            countOfCorrectAnswers += 1;
            localStorage.setItem('correct_answers', countOfCorrectAnswers);
            answers.push(1);
            localStorage.setItem('answers', answers);
            console.log(localStorage.getItem('correct_answers') + "YES");
        } else {
            answers.push(0);
            localStorage.setItem('answers', answers);
        }
    }
    rand1 = Math.floor(Math.random() * (max - min)) + min;
    rand2 = Math.floor(Math.random() * (max - min)) + min;
    if (localStorage.getItem('game_type') == "2") {
        document.getElementById("operation").innerHTML = rand1 + "+" + rand2;
    }
    else if (localStorage.getItem('game_type') == "1") {
        document.getElementById("operation").innerHTML = rand1 + "*" + rand2;
    }
}

window.onload = function () {

    if (localStorage.getItem('game_type') == "2") {
        console.log("ADDDDDD");
        document.getElementById("operation").innerHTML = rand1 + "+" + rand2;
    }
    else if (localStorage.getItem('game_type') == "1") {
        console.log("MUUUU");
        document.getElementById("operation").innerHTML = rand1 + "*" + rand2;
    }
};