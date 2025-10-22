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

const container = document.querySelector('.container')
const btnGrids = document.querySelector('.btn-grids')
setupGrids()
let grids = document.querySelectorAll('.grids')
listentoGridsButton(btnGrids)
listentoMouseenter(grids)


