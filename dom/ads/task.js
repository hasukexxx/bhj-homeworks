document.querySelectorAll('.rotator').forEach(rotator => {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case')); 
    let currentIndex = 0;

    function rotate() {
        cases[currentIndex].classList.remove('rotator__case_active');

        currentIndex = (currentIndex + 1) % cases.length;

        cases[currentIndex].classList.add('rotator__case_active');
    }

    setInterval(rotate, 1000);
});