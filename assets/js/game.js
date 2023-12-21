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

let currentQuestion = 0;
let time = questionBank.length * 15;
let timerEl;

// Start the quiz
const startQuiz = () => {
    document.getElementById('start-quiz').style.display = 'none';
    timerId = setInterval(countdown, 1000);
    loadQuestion(currentQuestion);
}

// Load a question
const loadQuestion = (questionIndex) => {
    const questionObject = questionBank[questionIndex];
    const quizContainerEl = document.getElementById('quiz-container');
    quizContainerEl.innerHTML = `
        <div class="question">${questionObject.question}</div>
        <div class="choices">${Object.entries(questionObject.answerChoices).map(([key, choice]) => `<button onclick="checkAnswer('${key}')" class="choice">${choice}</button>`).join('')}</div>
    `;
}

//check user's answer choice for correctness
const checkAnswer = (userAnswer) => {
    if (questionBank[currentQuestion].correctAnswer === userAnswer) {
        // Correct answer
        alert("Correct!");
    } else {
        // Wrong answer, penalize time
        time -= 10;
        alert("Wrong!");
    }

    // Move to next question
    currentQuestion++;
    if (currentQuestion === questionBank.length) {
        endQuiz();
    } else {
        loadQuestion(currentQuestion);
    }
}

// Timer tick function
const countdown = () => {
    time--;
    document.getElementById('time').textContent = time;

    if (time <= 0) {
        endQuiz();
    }
}

// End the quiz
const endQuiz = () => {
    clearInterval(timerEl);
    const quizContainerEl = document.getElementById('quiz-container');

    quizContainerEl.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>Your score is ${time}</p>
        <form id="score-form">
            <label for="initials">Enter initials:</label>
            <input type="text" id="initials" name="initials" required />
            <button type="submit">Submit</button>
        </form>
    `;

    const scoreFormEl = document.getElementById('score-form');
    scoreFormEl.addEventListener('submit', saveScore);
}

// Save the high score
const saveScore = (event) => {
    event.preventDefault();

    const initials = document.getElementById('initials').value;
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const newScore = {
        score: time,
        initials: initials
    };  

    highScores.push(newScore);
    highScores.sort((a, b) => b.score - a.score); // Sort the scores in descending order
    localStorage.setItem('highScores', JSON.stringify(highScores));

    window.location.href = 'leaderboard.html'; // Redirect to high scores page
}

//initialize timer display
document.getElementById('time').textContent = time;


document.addEventListener('DOMContentLoaded', (event) => {
    const startQuizEl = document.getElementById('start-quiz');
    startQuizEl.addEventListener('click', startQuiz);
  });
  


// let leaderEl = document.querySelector('.leader');
// event listener to redirect to leaderboard from game page
// leaderEl.addEventListener('click', function() {
//     window.location.href = 'leaderboard.html';
// });