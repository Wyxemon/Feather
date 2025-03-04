document.getElementById('create-btn').addEventListener('click', () => {
    const acceptCheckbox = document.getElementById('accept');
    const noAcceptMessage = document.getElementById('no-accept');
    if (!acceptCheckbox.checked) {
        noAcceptMessage.classList.add('show');
    } else {
        noAcceptMessage.classList.remove('show');
        window.location.href = '../thankyou/index.html'; // Reemplaza con la URL deseada
    }
});