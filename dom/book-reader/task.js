const book = document.getElementById('book');
const fontSizeControls = document.querySelectorAll('.book__control_font-size .font-size');

function fontSizeClick(e) {
    e.preventDefault();
    const clickedButton = e.target;
    const size = clickedButton.dataset.size;

    fontSizeControls.forEach(button => {
        button.classList.remove('font-size_active');
    });

    clickedButton.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    if (size === 'small') {
        book.classList.add('book_fs-small');
    } else if (size === 'big') {
        book.classList.add('book_fs-big');
    }
}

fontSizeControls.forEach(button => {
    button.addEventListener('click', fontSizeClick);
});