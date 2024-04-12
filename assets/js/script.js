document.addEventListener('DOMContentLoaded', function() {
    var playEl = document.querySelector('#play');
    var leaderEl = document.querySelector('#leader');
    var practiceEl = document.querySelector('#practice');

    // Checking if the elements exist before adding event listeners
    if (playEl) {
        playEl.addEventListener('click', function() {
            window.location.href = 'game.html';
        });
    }

    if (leaderEl) {
        leaderEl.addEventListener('click', function() {
            window.location.href = 'leader.html';
        });
    }

    if (practiceEl) {
        practiceEl.addEventListener('click', function() {
            window.location.href = 'practice.html';
        });
    }
});
