// Global Variables
const eightBall = document.querySelector('.eight-ball');
const eight = document.querySelector('.eight');
const question = document.querySelector('.question')
const answer = document.querySelector('.answer');
const form = document.querySelector('.form');

// Event Listeners
form.addEventListener('submit', function(e){
    if (question.validity.valueMissing) {
        e.preventDefault();
        eightBall.style.backgroundColor = 'blue';
        eight.style.opacity = 0;
        answer.textContent = 'Please ask a question!'
    } else if (question.validity.valid) {
        e.preventDefault();
        getAnswer();
    }
});

const answers = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes - definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful',
]

function getAnswer() {
    // Generate and display Answer
    const magicAnswer = Math.floor(Math.random() * answers.length);
    answer.textContent = answers[magicAnswer];
    question.value = '';
    // Adjust styles
    eightBall.style.backgroundColor = 'blue';
    eight.style.opacity = 0;
}
