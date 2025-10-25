function setupSquares(numberOfSquares = 16, containerWidth = 864, containerHeight = 864){
const containerSquares = document.querySelectorAll('.container > div')
if(containerSquares!= []){   
    for(let square of containerSquares){
        container.removeChild(square)
    }
}
let filteredNumberOfSquares = numberOfSquares
if(numberOfSquares > 100){
    filteredNumberOfSquares = 100
}
else if (numberOfSquares < 1 || numberOfSquares === null ||numberOfSquares === ''){
    filteredNumberOfSquares = 16
}
let squares = []
for (let i = 0; i < filteredNumberOfSquares; i++){
    for (let i = 0; i < filteredNumberOfSquares; i++){
    let newElement 
    squares.push(newElement)
}
}
for (let square of squares){
square = document.createElement('div')
square.classList.add('squares')
let squareWidth = containerWidth / filteredNumberOfSquares
let squareHeight = containerHeight / filteredNumberOfSquares
square.style.width = `${squareWidth}px`
square.style.height = `${squareHeight}px`
if (squareWidth < 25){
    square.style.border = 'solid 0px black'
}
container.appendChild(square)
}}

function listentoMouseenter(squares){
    for(let square of squares){
    square.addEventListener("mouseenter", () =>{
    square.style.backgroundColor = currentColor})    
}
}

function listentoSquaresButton(squaresButton){
    squaresButton.addEventListener("click", 
    () =>{
    let numberOfSquares = prompt('What number of squares per side do you want?')
    setupSquares(numberOfSquares)
    let squares = document.querySelectorAll('.squares')
    listentoMouseenter(squares)
    }) 
}

function listentoResetButton(resetButton){
    resetButton.addEventListener("click", 
    () =>{
    const containerSquares = document.querySelectorAll('.container > div')
    for (let square of containerSquares){
        square.style.backgroundColor = 'white'
    }})
}

function listentoColorButton(colorButton){
    colorButton.addEventListener("click", 
    () =>{
        let idOfCurrentColor = COLORS.findIndex((color) => color === currentColor)
        currentColor = COLORS[idOfCurrentColor + 1]
        if(currentColor === undefined){
            currentColor = COLORS[0]
        }
        btnColor.style.backgroundColor = currentColor
    })
}
let currentColor = 'blue'
const COLORS = ['blue', 'black', 'red', 'green', '#FF4D00', '#FF69B4', 'yellow', 'purple', 'brown', 'white' ]
const container = document.querySelector('.container')
const btnColor = document.querySelector('.btn-color')
btnColor.style.backgroundColor = currentColor
const btnSquares = document.querySelector('.btn-squares')
const btnReset = document.querySelector('.btn-reset')
setupSquares()
let squares = document.querySelectorAll('.squares')
listentoColorButton(btnColor)
listentoSquaresButton(btnSquares)
listentoResetButton(btnReset)
listentoMouseenter(squares)


