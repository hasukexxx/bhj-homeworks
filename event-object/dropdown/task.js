    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');

        valueElement.addEventListener('click', function (e) {
            list.classList.toggle('dropdown__list_active');
        });

        items.forEach(item => {
            const link = item.querySelector('.dropdown__link');

            link.addEventListener('click', function (e) {
                e.preventDefault();

                valueElement.textContent = this.textContent;
                list.classList.remove('dropdown__list_active');
            });
        });

        document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target)) {
                list.classList.remove('dropdown__list_active');
            }
        });
    });