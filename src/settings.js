const usernameInput = document.getElementById('input--username');
const usernameDisplay = document.getElementById('name');

// Load saved username from local storage
const savedUsername = localStorage.getItem('username');
if (savedUsername) {
    usernameInput.value = savedUsername;
    usernameDisplay.textContent = savedUsername;
}

usernameInput.addEventListener('input', () => {
    const username = usernameInput.value;
    usernameDisplay.textContent = username;
    // Save username to local storage
    localStorage.setItem('username', username);
});

