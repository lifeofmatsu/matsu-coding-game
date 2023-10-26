let quizEl = document.getElementById('quiz');
let answerElA = document.getElementById('answerA');
let answerElB = document.getElementById('answerB');
let answerElC = document.getElementById('answerC');
let answerElD = document.getElementById('answerD');
let feedbackEl = document.getElementById('feedback');

let leaderEl = document.querySelector('.leader');

const questionBank = [
    {
        question: 'String values must be enclosed within ______ when being assigned to variables.',
        answerChoices: {
            a: 'A. commas',
            b: 'B. curly brackets',
            c: 'C. quotes',
            d: 'D. paranthesis'
        },
        correctAnswer: 'c'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answerChoices: {
            a: 'A. JavaScript',
            b: 'B. terminal/bash',
            c: 'C. for loops',
            d: 'D. console.log'
        },
        correctAnswer: 'd'
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answerChoices: {
            a: 'A. strings',
            b: 'B. booleans',
            c: 'C. alerts',
            d: 'D. numbers'
        },
        correctAnswer: 'c'
    },
    {
        question: 'The condition in an if/else statement is enclosed with ______.',
        answerChoices: {
            a: 'A. quotes',
            b: 'B. curly brackets',
            c: 'C. parenthesis',
            d: 'D. square brackets'
        },
        correctAnswer: 'b'
    }
];

// event listener to redirect to leaderboard from game page
leaderEl.addEventListener('click', function() {
    window.location.href = 'leader.html';
});