const newBoxBtn = document.getElementById('new-box-btn');
const modal = document.getElementById('new-box-modal');
const closeBtn = document.querySelector('.close-btn');
const downloadButton = document.querySelector('.download-button');
const divBox = document.getElementById('div__box');
const news = document.getElementById('news');

modal.style.display = 'none';

newBoxBtn.onclick = function() {
    modal.style.display = 'block';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

downloadButton.onclick = function() {
    const version = document.querySelector('.dropdown').value;
    const memory = document.querySelectorAll('.dropdown')[1].value.replace(' ', '');
    console.log('Download button clicked with version:', version, 'and memory:', memory);
    
    // Mostrar el div de carga
    const loadingDiv = document.getElementById('div__loading');
    loadingDiv.style.display = 'flex';
    
    window.electron.startDownload(version, memory);
    newBox(version);
    
    // Esconder el div de carga después de 5 segundos
    setTimeout(() => {
        loadingDiv.style.display = 'none';
    }, 15000);
}

function newBox(version) {
    const divBox = document.getElementById('div__box');
    const newBoxInstall = document.createElement('div');
    newBoxInstall.id = 'div__box__install';
    newBoxInstall.innerHTML = `
        <img src="resources/box.png">
        <p>Version ${version}</p>
    `;
    divBox.appendChild(newBoxInstall);
}