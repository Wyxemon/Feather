const modal = document.getElementById('new-box-modal');
const closeBtn = document.querySelector('.close-btn');
const downloadButton = document.querySelector('.download-button');
const playButton = document.getElementById('button--play');
const playModalButton = document.querySelector('.play-button');
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
    // Mostrar el div de carga
    const loadingDiv = document.getElementById('div__loading');
    loadingDiv.style.display = 'flex';
    
    window.electron.startPlay(version, memory);
    
    // Esconder el div de carga después de 5 segundos
    setTimeout(() => {
        loadingDiv.style.display = 'none';
    }, 15000);
}