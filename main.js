let myButton = document.getElementById("button");
let targetDiv = document.getElementById("demo");
myButton.addEventListener("click", makeWords);

function makeWords() {
    targetDiv.innerHTML = `<h1 class="new-class">About Me</h1>
    <br>
    <img src="https://avatars2.githubusercontent.com/u/59631645?s=460&v=4 alt="Picture of me"/>
    <br>
    <p>My name is David Everett and I'm from central Illinois.  I have been living in Nashville for abouts 5 years now.  I studied music in college but now have a blossoming interest in web development and I'm excited to see where this takes me.</p>`;
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
    <p>As a child, the T-Rex was always my favorite because at the time it was known as the most dangerous predator on Earth</p>`;
}

