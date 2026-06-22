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
const quizContainer = document.getElementById("quiz-container");
const quizQuestions = [...questions]

function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = quizQuestions.splice(randomIndex, 1)[0];
    const question = randomQuestion.question;
    const options = randomQuestion.options;
    const answer = randomQuestion.answer;
    console.log(question, options, answer);

    quizContainer.innerHTML = ` 
    
        <h1 class="question-titel">${question}</h1>
        <div class="quiz-buttons-div">
            <button class="btn">${options[0]}</button>
            <button class="btn">${options[1]}</button>
            <button class="btn">${options[2]}</button>
            <button class="btn">${options[3]}</button>
       
            <div class="next-btn-div">
            <button class="next-btn" id="next-btn">Next Question</button>
        </div>
    `
    startButton.style.display = "none";
    
}


generateQuestion();