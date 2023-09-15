var timerEl = document.getElementById('timer');
var timeValue = localStorage.getItem('timeValue');
console.log(timeValue)
function startTimer() {
    var timerInterval = setInterval(function() {
        timeValue--;
        timerEl.textContent = timeValue + ': Timer';
        if (timeValue == 0) {
            timerEl.textContent = '';
            clearInterval(timerInterval);
        }
    }, 1000);
}
startTimer();