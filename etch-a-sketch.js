function setupGrids(numberOfGrids = 16){
let grids = []
for (let i = 0; i < numberOfGrids; i++){
    for (let i = 0; i < numberOfGrids; i++){
    let newElement 
    grids.push(newElement)
}
}
for (let grid of grids){
grid = document.createElement('div')
grid.classList.add('grids')
container.appendChild(grid)
}}

function mouseenterListener(grids){
    for(let grid of grids){
    grid.addEventListener("mouseenter", () =>{
    grid.style.backgroundColor = 'blue'})    
}
}

const container = document.querySelector('.container')
setupGrids()
const grids = document.querySelectorAll('.grids')
mouseenterListener(grids)

