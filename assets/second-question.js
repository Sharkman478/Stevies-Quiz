var timerEl = document.getElementById('timer');
var timeLeft = localStorage.getItem('timeLeft');
var incorrectEl = document.getElementById('incorrect');
var incorrect2El = document.getElementById('incorrect2');
var incorrect3El = document.getElementById('incorrect3');
var correctEl = document.getElementById('correct');
function startTimer() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        localStorage.setItem('timeLeft', timeLeft);
        timerEl.textContent = timeLeft + ': Timer';
        if (timeLeft == 0) {
            window.location.href = "./final-page.html";
            clearInterval(timerInterval);
        }
    }, 1000);
}
startTimer();

correctEl.addEventListener('click', function() {
    window.location.href = "./final-page.html"
});

incorrectEl.addEventListener('click', function() {
    timeLeft10()
});
incorrect2El.addEventListener('click', function() {
    timeLeft10()
});
incorrect3El.addEventListener('click', function() {
    timeLeft10()
});

function timeLeft10() {
    return timeLeft-=10;
}