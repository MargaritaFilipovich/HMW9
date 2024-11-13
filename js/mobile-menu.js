// Отримуємо елементи
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const burgerClose = document.createElement('div');
burgerClose.classList.add('burger-close');
burgerClose.innerHTML = '&times;'; // Хрестик

// Додаємо хрестик в навігаційне меню
nav.prepend(burgerClose);

// Відкриття меню
burger.addEventListener('click', () => {
    nav.classList.add('active');
    burgerClose.style.display = 'block'; // Показуємо хрестик
});

// Закриття меню при натисканні на хрестик
burgerClose.addEventListener('click', () => {
    nav.classList.remove('active');
    burgerClose.style.display = 'none'; // Ховаємо хрестик
});