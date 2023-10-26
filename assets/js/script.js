var playEl = document.querySelector('#play');
var leaderEl = document.querySelector('#leader');
var practiceEl = document.querySelector('#practice');

// event listeners to redirect to respective page from homepage
playEl.addEventListener('click', function() {
    window.location.href = 'game.html';
});

leaderEl.addEventListener('click', function() {
    window.location.href = 'leader.html';
});

practiceEl.addEventListener('click', function() {
    window.location.href = 'practice.html';
});


