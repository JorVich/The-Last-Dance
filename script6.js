let noButtonClicks = 0; // Contador de clics en el botón "No"

function changeText() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const texts = [
        "¿Estás segura?", 
        "¿Muuuuuuy segura?",  
        "¿Te estás vengando por tu tarea?", 
        "Va pues, ya dejo de preguntar", 
        "Bromitaaa", 
        "Está bien, ya paro"
    ];

    if (noButtonClicks < texts.length) {
        noButton.textContent = texts[noButtonClicks];
        noButtonClicks++;

        yesButton.style.fontSize = (parseInt(window.getComputedStyle(yesButton).fontSize) + 2) + 'px';
    } else {
        location.href = 'index8.html'; // Redirigir a otra página al final de las frases
    }
}

function increaseSize() {
    const yesButton = document.querySelector('.yes-button');
    yesButton.style.fontSize = (parseInt(window.getComputedStyle(yesButton).fontSize) + 2) + 'px';
    location.href = 'index7.html'; // Redirigir a otra página al hacer clic en "Yes"
}
