const questions = [
    {
        "question": "How many continents are there on Earth?",
        "options": ["5", "6", "7", "8"],
        "answer": "7"
    },

    {
        "question": "Which language is mainly spoken in Brazil?",
        "options": ["Spanish", "Portuguese", "English", "French"],
        "answer": "Portuguese"
    },

    {
        "question": " Which ocean is the largest?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "answer": "Pacific Ocean"
    },

    {
        "question": "What is 12 x 8?",
        "options": ["88", "92", "96", "108"],
        "answer": "96"
    },

    {
        "question": "What is the capital of France?",
        "options": ["Madrid", "Paris", "Rome", "Berlin"],
        "answer": "Paris"
    },
]


const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const quizButtons = document.getElementById("quiz-buttons-div");
const quizContainer = document.getElementById("quiz-container");
const quizQuestion = document.getElementById("question-titel");


const quizQuestions = [...questions]
const rightAnswers = [];

startButton.addEventListener("click", generateQuestion);
nextButton.addEventListener("click", generateQuestion);

function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    const randomQuestion = quizQuestions.splice(randomIndex, 1)[0];
    const question = randomQuestion.question;
    const options = randomQuestion.options;
    const answer = randomQuestion.answer;
    console.log(question, options, answer);

    quizQuestion.innerText = `${question}`;
    quizButtons.innerHTML = ` 
        <button class="btn">${options[0]}</button>
        <button class="btn">${options[1]}</button>
        <button class="btn">${options[2]}</button>
        <button class="btn">${options[3]}</button
    `

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(function (button) {
        button.addEventListener("click", () => {
            checkAnswer(button, answer);
            disabledButtons(button)
        });

    });

    if (quizQuestions.length === 0) {
        nextButton.innerText = "End Quiz"
    }

    startButton.style.display = "none";
    quizContainer.style.display = "block";
}


function checkAnswer(button, answer) {
    if (button.innerText === answer) {
        button.style.backgroundColor = "green"
        button.style.color = "white"
    }

    else {
        button.style.backgroundColor = "red"
        button.style.color = "white"
    }
}


function disabledButtons(button) {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(function(allButtons){
        if (button != allButtons){
            allButtons.disabled=true;
        }
    })
}



