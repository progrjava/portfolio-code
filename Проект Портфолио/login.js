// Проверяем, есть ли сохраненное значение темы в localStorage
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// Функция для установки темы
function setTheme(isDark) {
    if (isDark) {
        document.querySelector('.register-section').style.background = 'rgba(53, 53, 54, 1)';
        document.querySelector('.register-section').style.border = '2px solid #F5F5F7';
        document.querySelector('.login-butt').style.color = 'rgba(245, 245, 247, 1)';
        document.querySelector('.login-butt').style.border = '2px solid rgba(245, 245, 247, 1)';
        document.querySelector('.login-butt').style.background = 'rgba(53, 53, 54, 1)';
    } else {
        document.querySelector('.register-section').style.background = 'rgba(245, 245, 247, 1)';
        document.querySelector('.register-section').style.background = '2px solid #353536';
        document.querySelector('.login-butt').style.color = 'rgba(53, 53, 54, 1)';
        document.querySelector('.login-butt').style.border = '2px solid rgba(53, 53, 54, 1)';
        document.querySelector('.login-butt').style.background = 'rgba(245, 245, 247, 1)';
    }
}

// Устанавливаем тему при загрузке страницы
setTheme(isDarkMode);

// Добавьте код для сохранения темы при обновлении страницы
window.addEventListener('load', function() {
    setTheme(isDarkMode);
});