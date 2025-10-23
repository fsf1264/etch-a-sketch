function setupGrids(numberOfGrids = 16, containerWidth = 864, containerHeight = 864){
const containerGrids = document.querySelectorAll('.container > div')
if(containerGrids!= []){   
    for(let grid of containerGrids){
        container.removeChild(grid)
    }
}
let filteredNumberOfGrids = numberOfGrids
if(numberOfGrids > 100){
    filteredNumberOfGrids = 100
}
else if (numberOfGrids < 1 || numberOfGrids === null ||numberOfGrids === ''){
    filteredNumberOfGrids = 16
}
let grids = []
for (let i = 0; i < filteredNumberOfGrids; i++){
    for (let i = 0; i < filteredNumberOfGrids; i++){
    let newElement 
    grids.push(newElement)
}
}
for (let grid of grids){
grid = document.createElement('div')
grid.classList.add('grids')
let gridWidth = containerWidth / filteredNumberOfGrids
let gridHeight = containerHeight / filteredNumberOfGrids
grid.style.width = `${gridWidth}px`
grid.style.height = `${gridHeight}px`
if (gridWidth < 25){
    grid.style.border = 'solid 0px black'
}
container.appendChild(grid)
}}

function listentoMouseenter(grids){
    for(let grid of grids){
    grid.addEventListener("mouseenter", () =>{
    grid.style.backgroundColor = 'blue'})    
}
}

function listentoGridsButton(gridsButton){
    gridsButton.addEventListener("click", 
    () =>{
    let numberOfGrids = prompt('What number of squares per side do you want?')
    setupGrids(numberOfGrids)
    let grids = document.querySelectorAll('.grids')
    listentoMouseenter(grids)
    }) 
}
function listentoResetButton(resetButton){
    resetButton.addEventListener("click", 
    () =>{
    const containerGrids = document.querySelectorAll('.container > div')
    for (let grid of containerGrids){
        grid.style.backgroundColor = 'white'
    }})
}
const container = document.querySelector('.container')
const btnGrids = document.querySelector('.btn-grids')
const btnReset = document.querySelector('.btn-reset')
setupGrids()
let grids = document.querySelectorAll('.grids')
listentoGridsButton(btnGrids)
listentoResetButton(btnReset)
listentoMouseenter(grids)


