const usernameInput = document.getElementById('input--username');
const usernameDisplay = document.getElementById('name');
const themeToggleButton = document.getElementById('theme-toggle-button');

// Load saved username from local storage
const savedUsername = localStorage.getItem('username');
if (savedUsername) {
    usernameInput.value = savedUsername;
    usernameDisplay.textContent = savedUsername;
}

// Load saved theme from local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
}

usernameInput.addEventListener('input', () => {
    const username = usernameInput.value;
    usernameDisplay.textContent = username;
    // Save username to local storage
    localStorage.setItem('username', username);
});

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    // Save theme to local storage
    const theme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
    localStorage.setItem('theme', theme);
});

