var timerEl = document.getElementById('timer');
var timeLeft = localStorage.getItem('timeLeft');
var initialsButtonEl = document.getElementById('initialsbutton');
var initialsEl = document.getElementById('initials');


initialsButtonEl.addEventListener('click', function() {
    var score = timeLeft;
    console.log(score)
    localStorage.setItem('score', score);
    var userScore= localStorage.getItem('score')
    console.log(initialsEl.value)
    var storedInitials = initialsEl.value;
    console.log(storedInitials);
    localStorage.setItem("storedInitials", storedInitials);
    var displayInitials = localStorage.getItem("storedInitials");
    console.log(displayInitials);
    var li = document.querySelector('#initial-list');
    li.textContent = 'Initials: ' + displayInitials + ' ' + userScore;
});

console.log(initialsButtonEl.value);