const modal = document.getElementById('new-box-modal');
const closeBtn = document.querySelector('.close-btn');
const downloadButton = document.querySelector('.download-button');
const playButton = document.getElementById('button--play');
const playModalButton = document.querySelector('.download-button'); // Corrected selector
const divBox = document.getElementById('div__box');

modal.style.display = 'none';

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

playButton.onclick = function() {
    modal.style.display = 'block';
}

playModalButton.onclick = function() {
    const version = document.querySelector('.dropdown').value;
    const memory = document.querySelectorAll('.dropdown')[1].value.replace(' ', '');
    const user = document.getElementById('name').textContent; // Get the username from the displayed name
    // Mostrar el div de carga
    const loadingDiv = document.getElementById('div__loading');
    loadingDiv.style.display = 'flex';
    
    window.electron.startDownload({ version, memory, user });
    
    // Esconder el div de carga después de 15 segundos
    setTimeout(() => {
        loadingDiv.style.display = 'none';
    }, 15000);
}