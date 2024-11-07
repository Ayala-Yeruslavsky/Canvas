const canvas = document.getElementById("myCanvas");
const myCanvas = canvas.getContext("2d");

let currentColor = 'black'; 
let currentThickness = 1;   
let painting = false;

let marginY = canvas.getBoundingClientRect().top;
let randomLetterElement = document.getElementById("randomLetter");


function changeColor(color) {
    resetColorSelection(); 
    myCanvas.strokeStyle = color; 
    const button = document.getElementById(color);
    button.classList.add("selected-color");
}

function changeLineThickness(thickness) {
    myCanvas.lineWidth = thickness; 
    const previousSelectedThickness = document.querySelector('button.selected-thickness');
    if (previousSelectedThickness) {
        previousSelectedThickness.classList.remove('selected-thickness');
    }
    const button = document.getElementById(`lineThick${thickness}`);
    button.classList.add('selected-thickness');
}

function paint(event) {
    if (event.buttons === 1) {
        myCanvas.lineTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - marginY); 
        myCanvas.stroke(); 
    }
}

function mark() {
    myCanvas.beginPath(); 
}

function changeRandomColor() {
    resetColorSelection(); 
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'brown', 'black', 'purple', 'pink', 'cyan'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    myCanvas.strokeStyle = randomColor;
    
   
    document.getElementById("randomColor").classList.add("selected-color");
}

function resetColorSelection() {
    const buttons = document.querySelectorAll('button.selected-color');
    buttons.forEach(button => {
        button.classList.remove('selected-color'); 
    });
}


function generateRandomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    const randomIndex = Math.floor(Math.random() * letters.length);
    const randomLetter = letters[randomIndex];

    randomLetterElement.textContent = randomLetter;
    randomLetterElement.style.fontSize = '50px';
    randomLetterElement.style.fontWeight = 'bold';
   
}

function resetCanvas() {
    myCanvas.clearRect(0, 0, canvas.width, canvas.height); 
}