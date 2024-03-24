const translations = [
    "Translator", // English
    "Traducteur", // French
    "مترجمة", // Arabic
    "Editor", // English
    "Redacteur", // French
    "محررة", // Arabic
    "Proofreader", // English
    "Correcteur", // French
    "مدققة", // Arabic
];

let index = 0;

function changeTitle() {
    document.getElementById("designation").textContent = translations[index];
    index = (index + 1) % translations.length;
}

setInterval(changeTitle, 1000); // Change title every 2 seconds
