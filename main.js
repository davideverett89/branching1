let myButton = document.getElementById("button");
let targetDiv = document.getElementById("demo");
myButton.addEventListener("click", makeWords);

function makeWords() {
    targetDiv.innerHTML = `<h1 class="new-class">David Everett</h1>
    <br>
    <img src="https://avatars2.githubusercontent.com/u/59631645?s=460&v=4 alt="Picture of me"/>
    <br>
    <p>Great to meet you!  My name is David and I recently turned 30 years old.  I studied music, but I hope to also one day become a web developer!</p>`;
}

let newButton = document.getElementById("button-2");
let newDiv = document.getElementById("demo-2");
newButton.addEventListener("click", moreWords);

function moreWords() {
    targetDiv.innerHTML = `<h2>My Favorite Dinosaur</h2>
    <br>
    <h3>Tyrannosaurus Rex</h3>
    <br>
    <img src="https://scitechdaily.com/images/Tyrannosaurus-rex-Dinosaur.jpg" alt="T-Rex">
    <p>As a child the T-Rex was always my favorite because at the time it was the meanest dinosaur around!  Bigger, meaner dinosaurs have been discovered since then, but I gotta stay true to my guy T-Rex.</p>`;
}

