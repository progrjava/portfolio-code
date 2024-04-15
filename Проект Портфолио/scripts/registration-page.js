// Проверяем, есть ли сохраненное значение темы в localStorage
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// Функция для установки темы
function setTheme(isDark) {
    if (isDark) {
        document.querySelector('.registration').style.background = 'rgba(53, 53, 54, 1)';
        document.querySelector('.registration').style.border = '2px solid rgba(245, 245, 247, 1)';
        document.querySelectorAll('.form-field')
        .forEach(field => field.style.border = '2px solid rgba(245, 245, 247, 1)');
        document.querySelectorAll('.form-field svg path').forEach(p => p.setAttribute('stroke', 'white'));
        document.querySelectorAll('.form-field input')
        .forEach(inp => inp.style.background = 'rgba(53, 53, 54, 1)');
        document.querySelectorAll('.form-field input')
        .forEach(inp => inp.style.color = 'rgba(245, 245, 247, 1)');
    } else {
        document.querySelector('.registration').style.background = '#F5F5F7';
        document.querySelector('.registration').style.border = '2px solid #353536';
        document.querySelectorAll('.form-field')
        .forEach(field => field.style.border = '2px solid #353536');
        document.querySelectorAll('.form-field svg path').forEach(p => p.setAttribute('stroke', 'black'));
        document.querySelectorAll('.form-field input')
        .forEach(inp => inp.style.background = '#F5F5F7');
        document.querySelectorAll('.form-field input')
        .forEach(inp => inp.style.color = 'rgba(53, 53, 54, 1)');
    }
}

// Устанавливаем тему при загрузке страницы
setTheme(isDarkMode);

// Добавьте код для сохранения темы при обновлении страницы
window.addEventListener('load', function() {
    setTheme(isDarkMode);
});