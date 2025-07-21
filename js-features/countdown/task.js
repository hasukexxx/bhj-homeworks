const timerElement = document.getElementById('timer');
const statusElement = document.getElementById('status');

let seconds = parseInt(timerElement.textContent, 10);

function updateTimer() {
    seconds--;

    timerElement.textContent = seconds;

    if (seconds <= 0) {
        clearInterval(timerInterval); 
        alert('Вы победили в конкурсе!'); 
    }
}

const timerInterval = setInterval(updateTimer, 1000);