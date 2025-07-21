const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let dead = 0;
let lost = 0;

const MAX_DEAD = 10;
const MAX_LOST = 5;

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.addEventListener('click', function () {
        if (dead === MAX_DEAD || lost === MAX_LOST) {
            return;
        }

        if (hole.classList.contains('hole_has-mole')) {
            dead++;
            deadCounter.textContent = dead;

            if (dead === MAX_DEAD) {
                alert('Победа! Вы убили 10 кротов!');
                resetGame();
            }
        } else {
            lost++;
            lostCounter.textContent = lost;

            if (lost === MAX_LOST) {
                alert('Игра окончена! Вы допустили 5 промахов.');
                resetGame();
            }
        }
    });
}

function resetGame() {
    dead = 0;
    lost = 0;
    deadCounter.textContent = '0';
    lostCounter.textContent = '0';
}