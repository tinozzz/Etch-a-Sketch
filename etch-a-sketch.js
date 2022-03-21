// checks if the mouse is pressed down
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const body = document.querySelector("body");

// old version of grid size
// let size = 16;

// ask user for grid size
let size = parseInt(prompt("Please enter size of the rows/columns: ", "16"));
if (size > 100){
    alert(`Sorry, ${size} is too large, setting to default: 16`);
    size = 16;
}
// old version of creating grid, square width needed to be manually fixed

// const container = document.createElement("div");
// container.setAttribute('class', 'container');
// body.appendChild(container);

// for(let i = 1; i <= size**2; i++){
    // create a new square div on each iteration
    // const square = document.createElement("div");
    // square.textContent = `${i}`;
    // square.setAttribute('style', 'border: 1px solid black');
    // square.setAttribute('class','square');
    // // change the width of each square to accomodate for the number of columns
    // square.style.width = `${100 / size - 0.25}%`;
    // container.appendChild(square);
// }

// create a grid through a nested for-loop for making rows and columns to account
// for managing square width size of flex-wrap
for (let i = 1; i <= size; i++){
    // create row
    const container = document.createElement("div");
    container.setAttribute('class', 'container');
    body.appendChild(container);
    for (let j = 1; j <= size; j++){
        // create a new square div on each row
        const square = document.createElement("div");
        // square.textContent = `${i}'${j}`;
        square.setAttribute('style', 'border: 1px solid black');
        square.setAttribute('class','square');
        container.appendChild(square);
    }
}

function colourIn(e) {
    if (e.type ==='mouseover' && !mouseDown) return;
    // console.log(e.type);
    this.classList.add('testingClass');
}

function colourOut() {
    for (const box of shade){
        box.classList.remove('testingClass');
    }
}
const shade = document.querySelectorAll('.square');
shade.forEach(box =>{
    box.addEventListener("mousedown", colourIn);
    box.addEventListener("mouseover", colourIn);
});

const button = document.createElement("button");
button.textContent = "clear";
button.addEventListener("click", colourOut);
body.insertBefore(button, body.children[0]);
