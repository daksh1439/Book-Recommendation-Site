const questions = [
    {
        question: "Who wrote '1984'?",
        options: ["Aldous Huxley", "George Orwell", "F. Scott Fitzgerald", "Ernest Hemingway"],
        correct: 1
    },
    {
        question: "What is the name of the fictional world in 'The Lord of the Rings'?",
        options: ["Narnia", "Westeros", "Middle Earth", "Oz"],
        correct: 2
    },
    {
        question: "Who is the author of 'The Catcher in the Rye'?",
        options: ["J.D. Salinger", "Mark Twain", "Harper Lee", "John Steinbeck"],
        correct: 0
    },
    {
        question: "In which book do characters play the 'Hunger Games'?",
        options: ["Divergent", "Maze Runner", "The Hunger Games", "Twilight"],
        correct: 2
    },
    {
        question: "Which book features a boy named Harry Potter?",
        options: ["The Chronicles of Narnia", "Harry Potter and the Sorcerer's Stone", "The Hobbit", "Percy Jackson and the Olympians"],
        correct: 1
    },
    {
        question: "What is the primary theme of 'Brave New World'?",
        options: ["Government control and societal conformity", "Love and betrayal", "War and peace", "Human nature vs. technology"],
        correct: 0
    },
    {
        question: "In which city does the novel 'The Great Gatsby' take place?",
        options: ["Chicago", "New York", "Paris", "London"],
        correct: 1
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["J.K. Rowling", "Harper Lee", "Jane Austen", "William Shakespeare"],
        correct: 1
    },
    {
        question: "Which book tells the story of a dystopian society ruled by 'Big Brother'?",
        options: ["Fahrenheit 451", "1984", "The Road", "Animal Farm"],
        correct: 1
    },
    {
        question: "What is the name of the fictional detective created by Arthur Conan Doyle?",
        options: ["Hercule Poirot", "Sherlock Holmes", "Sam Spade", "Miss Marple"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadNextQuestion() {
    if (currentQuestion < questions.length) {
        const questionData = questions[currentQuestion];
        document.getElementById('question').textContent = questionData.question;
        const options = document.querySelectorAll('.option');
        options.forEach((option, index) => {
            option.textContent = questionData.options[index];
            option.style.backgroundColor = '#8D6E63';
            option.disabled = false;
        });
        document.getElementById('next-button').style.display = 'none';
    } else {
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('score').textContent = `Your score: ${score} / 10`;
    }
}

function nextQuestion(optionIndex) {
    const correctOption = questions[currentQuestion].correct;
    const options = document.querySelectorAll('.option');
    if (optionIndex === correctOption) {
        score++;
    }
    options[correctOption].style.backgroundColor = 'green';
    options[optionIndex].style.backgroundColor = optionIndex === correctOption ? 'green' : 'red';
    options.forEach(option => option.disabled = true);
    document.getElementById('next-button').style.display = 'inline-block';
    currentQuestion++;
}

loadNextQuestion();
