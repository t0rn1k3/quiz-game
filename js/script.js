const start = document.getElementById('start');
const startPage = document.querySelector('.start-page');
const questionsPage = document.querySelector('.questions-page');
const answersContainer = document.getElementById('answers');
const next = document.getElementById('next')
let questionText = document.getElementById('question');

let shuffledQuestions, currentQuestionIndex


//start quiz button 
start.addEventListener('click', ()=> {
    startPage.style.display = 'none';
    questionsPage.style.display = 'flex';
    shuffledQuestions = questions.sort(()=> Math.random() - .5);
    currentQuestionIndex = 0
    nextQuestion();
});


next.addEventListener('click', ()=> {
    currentQuestionIndex++;
    nextQuestion();
})


function nextQuestion() {
    reset();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionText.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', (e)=>{
            const selectedButton = e.target;
            const correct = selectedButton.dataset.correct;
            setStatus(document.body,correct)
            Array.from(answersContainer.children).forEach(button => {
                setStatus(button, button.dataset.correct)
            });
            next.style.display = 'block';
        })
        answersContainer.appendChild(button);
    });
}

function setStatus(el, correct) {
    clearStatus(el);
    if (correct) {
        el.classList.add('correct')
    }else {
        el.classList.add('wrong')
    }
}

function clearStatus(el) {
    el.classList.remove('correct');
    el.classList.remove('wrong');
}

function reset() {
    while(answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }
}

const questions =  [
    {
        question : 'Vlad the Impaler is also known as?',
        answers : [
            {text: 'cannibal', correct: false},
            {text: 'dracula', correct: true},
            {text: 'wrathful', correct: false},
            {text: 'lion heart', correct: false}
        ]
    },
    {
        question : 'count orlok is a character of which novel?',
        answers : [
            {text: 'nosferatu', correct: true},
            {text: 'Jane Eyre', correct: false},
            {text: '1984', correct: false},
            {text: 'dracula', correct: false}
        ]
    },
    {
        question : 'which football player wore the number 9 t shirt?',
        answers : [
            {text: 'andres iniesta', correct: false},
            {text: 'Alessandro Del Piero', correct: false},
            {text: 'Dimitar Berbatov', correct: true},
            {text: 'buffon', correct: false}
        ]
    },
    {
        question : 'which painting is made by michelangelo?',
        answers : [
            {text: 'the creation of adam', correct: true},
            {text: 'the last suffer', correct: false},
            {text: 'the sistine madonina', correct: false},
            {text: 'Christ of Saint John of the Cross', correct: false}
        ]
    },
    {
        question : "in which movie intro can we hear bob dylan's times they are a-changing?",
        answers : [
            {text: 'amadeus', correct: false},
            {text: 'the hateful eight', correct: false},
            {text: 'the last of the mohicans', correct: false},
            {text: 'watchmen', correct: true}
        ]
    },
    {
        question : "Ozymandias is a poem, behalf of which pharaoh?",
        answers : [
            {text: 'Darius I', correct: false},
            {text: 'Nepherites I', correct: false},
            {text: ' Ramesses II', correct: true},
            {text: 'Cleopatra I', correct: false}
        ]
    },
    {
        question : "which of theese is a marvel character?",
        answers : [
            {text: 'Ghost Rider', correct: true},
            {text: 'bane', correct: false},
            {text: 'ares', correct: false},
            {text: 'doctor manhattan', correct: false}
        ]
    },
    {
        question : "who is ed nygma?",
        answers : [
            {text: 'aquaman', correct: false},
            {text: 'penguin', correct: false},
            {text: 'batman', correct: false},
            {text: 'riddler', correct: true}
        ]
    },
    {
        question : "who was German national football team player?",
        answers : [
            {text: 'alemao', correct: false},
            {text: 'cacau', correct: true},
            {text: 'romario', correct: false},
            {text: 'adilio', correct: false}
        ]
    },
    {
        question : "which one is professional chess player?",
        answers : [
            {text: 'Magnus Carlsen', correct: true},
            {text: 'Jordan Spieth', correct: false},
            {text: 'Dimuth Karunaratne', correct: false},
            {text: 'Viviane Araújo', correct: false}
        ]
    },
]
