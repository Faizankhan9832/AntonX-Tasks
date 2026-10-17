// ===============================
// QUESTIONS
// ===============================

const questions = [

    {
        question: "What does HTML stand for?",

        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],

        correctAnswer: "Hyper Text Markup Language"
    },

    {
        question: "Which language is used to style HTML pages?",

        answers: [
            "JavaScript",
            "CSS",
            "Python",
            "SQL"
        ],

        correctAnswer: "CSS"
    },

    {
        question: "Which keyword is used to declare a variable that cannot be reassigned?",

        answers: [
            "let",
            "var",
            "const",
            "static"
        ],

        correctAnswer: "const"
    },

    {
        question: "Which method converts a JSON string into a JavaScript object?",

        answers: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()"
        ],

        correctAnswer: "JSON.parse()"
    },

    {
        question: "Which array method creates a new array by transforming every element?",

        answers: [
            "filter()",
            "forEach()",
            "map()",
            "find()"
        ],

        correctAnswer: "map()"
    },

    {
        question: "What does localStorage store?",

        answers: [
            "Data on the user's browser",
            "Data only inside a function",
            "Data on a remote server",
            "Data inside the CPU"
        ],

        correctAnswer: "Data on the user's browser"
    },

    {
        question: "Which keyword creates a function that does not have its own 'this'?",

        answers: [
            "function",
            "arrow",
            "return",
            "class"
        ],

        correctAnswer: "arrow"
    },

    {
        question: "Which method is commonly used to make an HTTP request in JavaScript?",

        answers: [
            "fetch()",
            "request()",
            "httpGet()",
            "send()"
        ],

        correctAnswer: "fetch()"
    },

    {
        question: "Which method removes the last element from an array?",

        answers: [
            "shift()",
            "pop()",
            "push()",
            "remove()"
        ],

        correctAnswer: "pop()"
    },

    {
        question: "What does JSON.stringify() do?",

        answers: [
            "Converts an object into a JSON string",
            "Converts JSON into an object",
            "Deletes an object",
            "Creates a new array"
        ],

        correctAnswer: "Converts an object into a JSON string"
    }

];


// ===============================
// VARIABLES
// ===============================

let currentQuestion = 0;

let score = 0;


// ===============================
// GET HTML ELEMENTS
// ===============================

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const nextButton =
    document.getElementById("next-btn");

const scoreElement =
    document.getElementById("score");

const questionNumberElement =
    document.getElementById("question-number");

const totalQuestionsElement =
    document.getElementById("total-questions");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const finalScoreElement =
    document.getElementById("final-score");

const resultMessage =
    document.getElementById("result-message");

const restartButton =
    document.getElementById("restart-btn");


// ===============================
// TOTAL QUESTIONS
// ===============================

totalQuestionsElement.textContent =
    questions.length;


// ===============================
// SHOW QUESTION
// ===============================

function showQuestion() {

    // Get current question object

    const current = questions[currentQuestion];


    // Show question number

    questionNumberElement.textContent =
        currentQuestion + 1;


    // Show question text

    questionElement.textContent =
        current.question;


    // Empty previous answers

    answersElement.innerHTML = "";


    // Disable Next button

    nextButton.disabled = true;


    // Create answer buttons

    current.answers.forEach(function(answer) {

        const button =
            document.createElement("button");


        button.textContent = answer;


        button.classList.add("answer-btn");


        button.addEventListener("click", function() {

            checkAnswer(button, answer);

        });


        answersElement.appendChild(button);

    });

}


// ===============================
// CHECK ANSWER
// ===============================

function checkAnswer(selectedButton, selectedAnswer) {

    const current =
        questions[currentQuestion];


    // Get all answer buttons

    const buttons =
        document.querySelectorAll(".answer-btn");


    // Disable all buttons

    buttons.forEach(function(button) {

        button.disabled = true;

    });


    // Check answer

    if (selectedAnswer === current.correctAnswer) {

        selectedButton.classList.add("correct");

        score++;

        scoreElement.textContent = score;

    }

    else {

        selectedButton.classList.add("incorrect");


        // Find the correct answer

        buttons.forEach(function(button) {

            if (
                button.textContent ===
                current.correctAnswer
            ) {

                button.classList.add("correct");

            }

        });

    }


    // Enable next button

    nextButton.disabled = false;

}


// ===============================
// NEXT QUESTION
// ===============================

nextButton.addEventListener("click", function() {

    currentQuestion++;


    // Check if quiz is finished

    if (currentQuestion < questions.length) {

        showQuestion();

    }

    else {

        showResults();

    }

});


// ===============================
// SHOW RESULTS
// ===============================

function showResults() {

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");


    finalScoreElement.textContent =
        score;


    const percentage =
        (score / questions.length) * 100;


    if (percentage === 100) {

        resultMessage.textContent =
            "Perfect score! Excellent work!";

    }

    else if (percentage >= 70) {

        resultMessage.textContent =
            "Great job! You did really well.";

    }

    else if (percentage >= 50) {

        resultMessage.textContent =
            "Good effort! Keep practicing.";

    }

    else {

        resultMessage.textContent =
            "Keep practicing. You can improve!";

    }

}


// ===============================
// RESTART QUIZ
// ===============================

restartButton.addEventListener("click", function() {

    currentQuestion = 0;

    score = 0;

    scoreElement.textContent = 0;


    resultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");


    showQuestion();

});


// ===============================
// START QUIZ
// ===============================

showQuestion();