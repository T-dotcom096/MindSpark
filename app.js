import { getRandomQuote } from './quote.js';

const card = document.getElementById('quote-card');
const textEl = document.getElementById('quote-text');
const authorEl = document.getElementById('quote-author');
const toggleBtn = document.getElementById('toggle-btn');
const timerSelect = document.getElementById('timer-select');
const bgOverlay = document.querySelector('.background-overlay');

let intervalId = null;


function updateDisplay() {
    const { text, author } = getRandomQuote();

    // Text update with fade
    textEl.style.opacity = 0;
    setTimeout(() => {
        textEl.textContent = `"${text}"`;
        authorEl.textContent = `- ${author}`;
        textEl.style.opacity = 1;
        card.style.transform = `rotateY(0deg)`;
    }, 400);
}

toggleBtn.addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        toggleBtn.textContent = 'Start Timer';
    } else {
        updateDisplay();
        intervalId = setInterval(updateDisplay, parseInt(timerSelect.value));
        toggleBtn.textContent = 'Stop Timer';
    }
});

