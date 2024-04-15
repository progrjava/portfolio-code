/*let isDarkMode = false;
document.querySelector('.theme-changer').addEventListener('click', function() {
    if (isDarkMode) {
        document.querySelector('a.theme-changer svg.theme-moon path').setAttribute('stroke', 'black');
        document.querySelector('a.theme-changer svg.theme-star path').setAttribute('stroke', 'black');
        document.querySelector('a.theme-changer svg').setAttribute('fill', '#F5F5F7');
        document.querySelector('button.button-login').style.border = '2px solid #353536';
        document.querySelector('button.button-login').style.background = '#F5F5F7';
        document.querySelector('button.button-login').style.color = '#353536';
        document.querySelector('.main-header').style.background = '#F5F5F7';
        document.querySelector('.main-header').style.borderBottom = '2px solid #353536';
        document.querySelector('body').style.background = '#ffffff';
        document.querySelector('section.about-wave-info').style.background = '#F5F5F7';
        document.querySelector('section.about-wave-info').style.border = '2px solid #353536';
        document.querySelector('section.about-wave-info').style.color = 'black';
        document.querySelector('h1.about-wave').style.color = 'black';
        isDarkMode = false;
    } else {
        document.querySelector('a.theme-changer svg.theme-moon path').setAttribute('stroke', '#ffffff');
        document.querySelector('a.theme-changer svg.theme-star path').setAttribute('stroke', '#ffffff');
        document.querySelector('a.theme-changer svg').setAttribute('fill', '#353536');
        document.querySelector('button.button-login').style.border = '2px solid #ffffff';
        document.querySelector('button.button-login').style.background = '#353536';
        document.querySelector('button.button-login').style.color = '#ffffff';
        document.querySelector('.main-header').style.background = '#353536';
        document.querySelector('.main-header').style.borderBottom = '2px solid #ffffff';
        document.querySelector('body').style.background = '#353536';
        document.querySelector('section.about-wave-info').style.background = '#353536';
        document.querySelector('section.about-wave-info').style.border = '2px solid #F5F5F7';
        document.querySelector('section.about-wave-info').style.color = 'white';
        document.querySelector('h1.about-wave').style.color = 'white';
        isDarkMode = true;
    }
});

document.querySelector('.button-login').addEventListener('mouseover', function() {
    if (isDarkMode){
        this.style.backgroundColor = '#3434D5';
        this.style.color = '#f5f5f7';
        this.style.border = '2px solid #f5f5f7';
    }
    else {
        this.style.backgroundColor = '#3434D5';
        this.style.color = '#f5f5f7';
        this.style.border = 'none';
    }
});

document.querySelector('.button-login').addEventListener('mouseout', function() {
    if (isDarkMode){
        this.style.backgroundColor = '#353536';
        this.style.color = '#f5f5f7';
        this.style.border = '2px solid #f5f5f7';
    }
    else {
        this.style.backgroundColor = '#f5f5f7';
        this.style.color = '#353536';
        this.style.border = '2px solid #353536';
    }
});*/
// Проверяем, есть ли сохраненное значение темы в localStorage
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// Функция для установки темы
function setTheme(isDark) {
    if (isDark) {
        document.querySelector('a.theme-changer svg.theme-moon path').setAttribute('stroke', '#ffffff');
        document.querySelector('a.theme-changer svg.theme-star path').setAttribute('stroke', '#ffffff');
        document.querySelector('a.theme-changer svg').setAttribute('fill', '#353536');
        document.querySelector('button.button-login').style.border = '2px solid #ffffff';
        document.querySelector('button.button-login').style.background = '#353536';
        document.querySelector('button.button-login').style.color = '#ffffff';
        document.querySelector('.main-header').style.background = '#353536';
        document.querySelector('.main-header').style.borderBottom = '2px solid #ffffff';
        document.querySelector('body').style.background = '#353536';
        document.querySelector('section.about-wave-info').style.background = '#353536';
        document.querySelector('section.about-wave-info').style.border = '2px solid #F5F5F7';
        document.querySelector('section.about-wave-info').style.color = 'white';
        document.querySelector('h1.about-wave').style.color = 'white';
    } else {
        document.querySelector('a.theme-changer svg.theme-moon path').setAttribute('stroke', 'black');
        document.querySelector('a.theme-changer svg.theme-star path').setAttribute('stroke', 'black');
        document.querySelector('a.theme-changer svg').setAttribute('fill', '#F5F5F7');
        document.querySelector('button.button-login').style.border = '2px solid #353536';
        document.querySelector('button.button-login').style.background = '#F5F5F7';
        document.querySelector('button.button-login').style.color = '#353536';
        document.querySelector('.main-header').style.background = '#F5F5F7';
        document.querySelector('.main-header').style.borderBottom = '2px solid #353536';
        document.querySelector('body').style.background = '#ffffff';
        document.querySelector('section.about-wave-info').style.background = '#F5F5F7';
        document.querySelector('section.about-wave-info').style.border = '2px solid #353536';
        document.querySelector('section.about-wave-info').style.color = 'black';
        document.querySelector('h1.about-wave').style.color = 'black';

    }
}

// Устанавливаем тему при загрузке страницы
setTheme(isDarkMode);

// Обработчик клика по кнопке смены темы
document.querySelector('.theme-changer').addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('isDarkMode', isDarkMode); // Сохраняем текущую тему в localStorage
    setTheme(isDarkMode);
});

// Добавьте код для сохранения темы при обновлении страницы
window.addEventListener('load', function() {
    setTheme(isDarkMode);
});

// Обработчики для кнопки входа
document.querySelector('.button-login').addEventListener('mouseover', function() {
    if (isDarkMode) {
        this.style.backgroundColor = '#3434D5';
        this.style.color = '#f5f5f7';
        this.style.border = '2px solid #f5f5f7';
    } else {
        this.style.backgroundColor = '#3434D5';
        this.style.color = '#f5f5f7';
        this.style.border = 'none';
    }
});

document.querySelector('.button-login').addEventListener('mouseout', function() {
    if (isDarkMode) {
        this.style.backgroundColor = '#353536';
        this.style.color = '#f5f5f7';
        this.style.border = '2px solid #f5f5f7';
    } else {
        this.style.backgroundColor = '#f5f5f7';
        this.style.color = '#353536';
        this.style.border = '2px solid #353536';
    }
});
