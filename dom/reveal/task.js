const allBoxes = document.querySelectorAll('.reveal');

function isVisible(el) {
    const {top, bottom} = el.getBoundingClientRect();

    if (bottom < 0 || top > window.innerHeight) {
        return false
    } else {
        return true
    }
}

function checkVisibleBlocks() {
    allBoxes.forEach(box => {
        if (isVisible(box)) {
                box.classList.add('reveal_active')
        } else {
            box.classList.remove('reveal_active')
        }
    })
};

checkVisibleBlocks();

window.addEventListener('scroll', checkVisibleBlocks);