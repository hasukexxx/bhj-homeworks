const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clickCount = 0;

cookie.addEventListener('click', function() {
    clickCount++;
    counter.textContent = clickCount;

    if (cookie.width === 200) {
        cookie.width = 180;
    } else {
        cookie.width = 200;
    }
});