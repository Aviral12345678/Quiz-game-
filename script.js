// DOM Elements
const startScreen = document.getElementById("start-screen");
const selectionScreen = document.getElementById("selection-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-btn");
const selectionButtons = document.querySelectorAll(".selection-btn");
const restartButton = document.getElementById("restart-btn");

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const progressBar = document.getElementById("progress");

// QUESTION BANKS
const questions = {
  frontend: [
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Creative Style Sheets", correct: false },
        { text: "Cascading Style Sheets", correct: true },
        { text: "Computer Style Sheets", correct: false },
        { text: "Colorful Style Sheets", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used to link an external JavaScript file?",
      answers: [
        { text: "<script>", correct: true },
        { text: "<js>", correct: false },
        { text: "<javascript>", correct: false },
        { text: "<link>", correct: false },
      ],
    },
    {
      question: "Which property is used to change the background color in CSS?",
      answers: [
        { text: "color", correct: false },
        { text: "bgcolor", correct: false },
        { text: "background-color", correct: true },
        { text: "background", correct: false },
      ],
    },
    {
      question: "What does DOM stand for?",
      answers: [
        { text: "Data Object Modal", correct: false },
        { text: "Document Oriented Model", correct: false },
        { text: "Digital Object Management", correct: false },
        { text: "Document Object Model", correct: true },
      ],
    },
    {
      question: "Which of these is a popular CSS framework?",
      answers: [
        { text: "Node.js", correct: false },
        { text: "Bootstrap", correct: true },
        { text: "Python", correct: false },
        { text: "Django", correct: false },
      ],
    },
  ],
  backend: [
    {
      question: "Which of these is a runtime environment for JavaScript on the server?",
      answers: [
        { text: "Express", correct: false },
        { text: "Node.js", correct: true },
        { text: "React", correct: false },
        { text: "Vue", correct: false },
      ],
    },
    {
      question: "What does SQL stand for?",
      answers: [
        { text: "Structured Query Language", correct: true },
        { text: "Simple Query Linux", correct: false },
        { text: "Standard Quick List", correct: false },
        { text: "System Query Logic", correct: false },
      ],
    },
    {
      question: "Which HTTP method is typically used to update an existing resource?",
      answers: [
        { text: "GET", correct: false },
        { text: "POST", correct: false },
        { text: "PUT/PATCH", correct: true },
        { text: "DELETE", correct: false },
      ],
    },
    {
      question: "What is the default port for a MongoDB server?",
      answers: [
        { text: "3000", correct: false },
        { text: "8080", correct: false },
        { text: "27017", correct: true },
        { text: "5432", correct: false },
      ],
    },
    {
      question: "What does API stand for?",
      answers: [
        { text: "Application Programming Interface", correct: true },
        { text: "App Professional Integration", correct: false },
        { text: "Applied Program Interaction", correct: false },
        { text: "Automated Program Interface", correct: false },
      ],
    },
  ],
  fullstack: [
    {
      question: "What does the 'M' stand for in MERN stack?",
      answers: [
        { text: "MySQL", correct: false },
        { text: "MariaDB", correct: false },
        { text: "MongoDB", correct: true },
        { text: "Microsoft", correct: false },
      ],
    },
    {
      question: "Which part of a web application handles the database logic?",
      answers: [
        { text: "Client-side", correct: false },
        { text: "Frontend", correct: false },
        { text: "Backend", correct: true },
        { text: "CSS", correct: false },
      ],
    },
    {
      question: "Which system is most commonly used for version control?",
      answers: [
        { text: "Git", correct: true },
        { text: "Docker", correct: false },
        { text: "Kubernetes", correct: false },
        { text: "Jenkins", correct: false },
      ],
    },
    {
      question: "What is MVC in software architecture?",
      answers: [
        { text: "Model View Control", correct: true },
        { text: "Main Variable Class", correct: false },
        { text: "Multi View Container", correct: false },
        { text: "Module Version Code", correct: false },
      ],
    },
    {
      question: "What is 'Deployment'?",
      answers: [
        { text: "Writing code", correct: false },
        { text: "Fixing bugs", correct: false },
        { text: "Taking the app live on a server", correct: true },
        { text: "Designing the UI", correct: false },
      ],
    },
  ],
  ai: [
    {
      question: "What does ML stand for in the context of Artificial Intelligence?",
      answers: [
        { text: "Memory Logic", correct: false },
        { text: "Machine Learning", correct: true },
        { text: "Manual Language", correct: false },
        { text: "Model Layer", correct: false },
      ],
    },
    {
      question: "Which programming language is most widely used for AI and Data Science?",
      answers: [
        { text: "Java", correct: false },
        { text: "Python", correct: true },
        { text: "C++", correct: false },
        { text: "PHP", correct: false },
      ],
    },
    {
      question: "What is 'TensorFlow'?",
      answers: [
        { text: "A CSS Framework", correct: false },
        { text: "A Database", correct: false },
        { text: "An Open-source AI Library", correct: true },
        { text: "A Web Browser", correct: false },
      ],
    },
    {
      question: "What does NLP stand for?",
      answers: [
        { text: "Natural Language Processing", correct: true },
        { text: "New Layer Protocol", correct: false },
        { text: "Neural Logical Program", correct: false },
        { text: "Native List Processing", correct: false },
      ],
    },
    {
      question: "What is a Neural Network?",
      answers: [
        { text: "A type of internet router", correct: false },
        { text: "A computing system inspired by the human brain", correct: true },
        { text: "A social media platform", correct: false },
        { text: "A database management system", correct: false },
      ],
    },
  ],
  others: [
    {
      question: "Who is known as the father of computers?",
      answers: [
        { text: "Alan Turing", correct: false },
        { text: "Charles Babbage", correct: true },
        { text: "Bill Gates", correct: false },
        { text: "Steve Jobs", correct: false },
      ],
    },
    {
      question: "What does WWW stand for in a web address?",
      answers: [
        { text: "World Wide Web", correct: true },
        { text: "World Wide Word", correct: false },
        { text: "Whole Wide World", correct: false },
        { text: "Web World Wide", correct: false },
      ],
    },
    {
      question: "What is the smallest unit of digital information?",
      answers: [
        { text: "Byte", correct: false },
        { text: "Bit", correct: true },
        { text: "Kilobyte", correct: false },
        { text: "Nibble", correct: false },
      ],
    },
    {
      question: "Which company developed the Windows operating system?",
      answers: [
        { text: "Apple", correct: false },
        { text: "Google", correct: false },
        { text: "Microsoft", correct: true },
        { text: "IBM", correct: false },
      ],
    },
    {
      question: "What does HTTP stand for?",
      answers: [
        { text: "HyperText Transfer Protocol", correct: true },
        { text: "High Tech Trust Process", correct: false },
        { text: "Hyperlink Text Trading Path", correct: false },
        { text: "Home Text Transfer Program", correct: false },
      ],
    },
  ],
};

// QUIZ STATE
let currentField = "frontend";
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let currentQuestionsList = [];

// EVENT LISTENERS
startButton.addEventListener("click", () => {
  startScreen.classList.remove("active");
  selectionScreen.classList.add("active");
});

selectionButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    currentField = e.target.dataset.field;
    startQuiz();
  });
});

restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;
  currentQuestionsList = questions[currentField];
  totalQuestionsSpan.textContent = currentQuestionsList.length;
  maxScoreSpan.textContent = currentQuestionsList.length;
  selectionScreen.classList.remove("active");
  quizScreen.classList.add("active");
  showQuestion();
}

function showQuestion() {
  answersDisabled = false;
  const currentQuestion = currentQuestionsList[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  const progressPercent = (currentQuestionIndex / currentQuestionsList.length) * 100;
  progressBar.style.width = progressPercent + "%";
  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answersDisabled) return;
  answersDisabled = true;
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });
  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestionsList.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  finalScoreSpan.textContent = score;
  const percentage = (score / currentQuestionsList.length) * 100;
  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a true " + currentField + " expert!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! Your " + currentField + " knowledge is solid!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else {
    resultMessage.textContent = "Keep studying the " + currentField + " path!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
}
