var timerEl = document.getElementById('timer');

var timeLeft = 60;

function startTimer() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft + ': Timer';
        if (timeLeft == 0) {
            timerEl.textContent = '';
            clearInterval(timerInterval);
        }
    }, 1000);
}
startTimer();
var timeValue = localStorage.setItem('timeValue', timeLeft)
console.log( localStorage);
// if (incorrect) {
//     timer--15;
// } else {
//     timer=timer;
// }
