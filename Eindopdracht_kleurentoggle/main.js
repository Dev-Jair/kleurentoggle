const colorRed = document.getElementById('red');
const colorYellow = document.getElementById('yellow');
const colorPurple = document.getElementById('purple');
const colorBlue = document.getElementById('blue');
const colorPink = document.getElementById('pink');

const firstColor = ["#ff0000"];
const secondColor = ["#ffff00"];
const thirdColor = ["#800080"];
const fourthColor = ["#0000ff"];
const fifthColor = ["#ffc0cb"];

document.getElementById('red').addEventListener('click', () => {
    document.querySelector("body").style.background = firstColor
});

document.getElementById('yellow').addEventListener('click', () => {
    document.querySelector("body").style.background = secondColor
});

document.getElementById('purple').addEventListener('click', () => {
    document.querySelector("body").style.background = thirdColor
});

document.getElementById('blue').addEventListener('click', () => {
    document.querySelector("body").style.background = fourthColor
});

document.getElementById('pink').addEventListener('click', () => {
    document.querySelector("body").style.background = fifthColor
});