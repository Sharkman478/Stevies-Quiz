var timerEl = document.getElementById('timer');
var timeLeft = localStorage.getItem('timeLeft');
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
