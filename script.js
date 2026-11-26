
/* 1. Select Theme Button */

let button = document.getElementById("theme-toggle");


/* 2. Load Saved Theme */

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    button.innerHTML = "🌙 Dark Mode";
}


/* 3. Theme Toggle */

button.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        button.innerHTML = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");

    } 
    else {

        button.innerHTML = "☀️ Light Mode";

        localStorage.setItem("theme", "dark");

    }

});
/* 4. Typing Animation */

let words = ["Web Developer", "Programmer", "BCA Student"];

let wordIndex = 0;
let letterIndex = 0;

let typingElement = document.getElementById("typing-text");

function typeText() {

    if (letterIndex < words[wordIndex].length) {

        typingElement.innerHTML += words[wordIndex][letterIndex];

        letterIndex++;

        setTimeout(typeText, 100);

    } 
    else {

        setTimeout(eraseText, 1000);

    }

}

function eraseText() {

    if (letterIndex > 0) {

        typingElement.innerHTML = words[wordIndex].substring(0, letterIndex - 1);

        letterIndex--;

        setTimeout(eraseText, 50);

    } 
    else {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        setTimeout(typeText, 500);

    }

}

typeText();
/* 5. Scroll to Top Button */

let topButton = document.getElementById("top-button");

/* Show Button While Scrolling */

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } 
    else {
        topButton.style.display = "none";
    }

});

/* Scroll to Top on Click */

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});