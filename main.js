let myButton = document.getElementById("button");
let targetDiv = document.getElementById("demo");
let word = window.prompt("Pick any random word.");
myButton.addEventListener("click", makeWords);

function makeWords() {
    targetDiv.innerHTML = `<h1 class="new-class">${word}</h1>`;
}

