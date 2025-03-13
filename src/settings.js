const usernameInput = document.getElementById('input--username');
const usernameDisplay = document.getElementById('name');
const themeToggleButton = document.getElementById('theme-toggle-button');
const infoModal = document.getElementById('info-modal');
const userIcon = document.getElementById('img__profile');
const fileUpload = document.getElementById('file-upload');

// Load saved username from local storage
const savedUsername = localStorage.getItem('username');
if (savedUsername) {
    usernameInput.value = savedUsername;
    usernameDisplay.textContent = savedUsername;
}

// Load saved theme from local storage or set default to dark-theme
const savedTheme = localStorage.getItem('theme') || 'dark-theme';
document.body.classList.add(savedTheme);

// Load saved profile image from local storage
const savedProfileImage = localStorage.getItem('profileImage');
if (savedProfileImage) {
    userIcon.src = savedProfileImage;
}

usernameInput.addEventListener('input', () => {
    const username = usernameInput.value;
    usernameDisplay.textContent = username;
    // Save username to local storage
    localStorage.setItem('username', username);
});

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    // Save theme to local storage
    const theme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
    localStorage.setItem('theme', theme);
});

fileUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const imageDataUrl = e.target.result;
            userIcon.src = imageDataUrl;
            // Save profile image to local storage
            localStorage.setItem('profileImage', imageDataUrl);
        };
        reader.readAsDataURL(file);
    }
});

var infOpen = 0;

function info() {
    if (infOpen === 0) {
        infoModal.style.display = 'flex';
        infOpen = 1;
    } else if (infOpen === 1) {
        infoModal.style.display = 'none';
        infOpen = 0;
    }
}