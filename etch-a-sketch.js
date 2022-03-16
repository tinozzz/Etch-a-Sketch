const body = document.querySelector("body");
const container = document.createElement("div");
container.setAttribute('class', 'container');
body.appendChild(container);
const size = 16;
for(let i = 1; i <= size**2; i++){
    // create a new square div on each iteration
    const square = document.createElement("div");
    square.textContent = `${i}`;
    square.setAttribute('style', 'border: 1px solid black');
    square.setAttribute('class','square');
    // change the width of each square to accomodate for the number of columns
    square.style.width = `${100 / size - 0.5}%`;
    container.appendChild(square);
}
