var minutesLeft = 0;
var secondsLeft = 0;
var timeleft = 0;
min = Math.ceil(1);
max = Math.floor(10);
rand1 = Math.floor(Math.random() * (max - min)) + min;
rand2 = Math.floor(Math.random() * (max - min)) + min;
var countOfAnswers = 0;
localStorage.setItem('all_answers', 0)
var countOfCorrectAnswers = 0;
localStorage.setItem('correct_answers', 0)

var downloadTimer = setInterval(function () {
    localStorage.setItem('time_mins', minutesLeft)
    localStorage.setItem('time_sec', secondsLeft)
    if (minutesLeft >= 10) {
        clearInterval(downloadTimer);
        document.getElementById("text").innerHTML = "Время вышло";
        window.location.href='results.html';
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
    if (localStorage.getItem('selectID') == "AD") {
        console.log(rand1 + "+" + rand2 + "=" + num);
        document.getElementById("operation").innerHTML = rand1 + "+" + rand2;
        countOfAnswers += 1;
        localStorage.setItem('all_answers', countOfAnswers)
        console.log(localStorage.getItem('all_answers'));
        if ((rand1 + rand2) % 10 == num) {
            countOfCorrectAnswers += 1;
            localStorage.setItem('correct_answers', countOfCorrectAnswers);
            console.log(localStorage.getItem('correct_answers') + "YES");
        }
    }
    else if (localStorage.getItem('selectID') == "MU") {
        console.log(rand1 + "*" + rand2 + "=" + num);
        document.getElementById("operation").innerHTML = rand1 + "*" + rand2;
        countOfAnswers += 1;
        localStorage.setItem('all_answers', countOfAnswers)
        console.log(localStorage.getItem('all_answers'));
        if ((rand1 * rand2) % 10 == num) {
            countOfCorrectAnswers += 1;
            localStorage.setItem('correct_answers', countOfCorrectAnswers);
            console.log(localStorage.getItem('correct_answers') + "YES");
        }
    }
    rand1 = Math.floor(Math.random() * (max - min)) + min;
    rand2 = Math.floor(Math.random() * (max - min)) + min;
    if (localStorage.getItem('selectID') == "AD") {
        document.getElementById("operation").innerHTML = rand1 + "+" + rand2;
    }
    else if (localStorage.getItem('selectID') == "MU") {
        document.getElementById("operation").innerHTML = rand1 + "*" + rand2;
    }
}

window.onload = function() {

    if (localStorage.getItem('selectID') == "AD") {
        console.log("ADDDDDD");
        document.getElementById("operation").innerHTML = rand1 + "+" + rand2;
    }
    else if (localStorage.getItem('selectID') == "MU") {
        console.log("MUUUU");
        document.getElementById("operation").innerHTML = rand1 + "*" + rand2;
    }
 };