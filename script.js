const containerElement = document.querySelector('.container');

function createDiv(){
    for (let index = 0; index < 30; index++) {
        const divElement = document.createElement("div");
        divElement.classList.add("color-container");
        containerElement.appendChild(divElement);
    }
}

function randomColor(){
    const colorPick = "0123456789abcdef";
    let colorCode = "";
    for (let index = 0; index < 6; index++) {
        const choice = Math.floor(Math.random()*colorPick.length);
        colorCode += colorPick.substring(choice, choice+1);
    }
    return colorCode;
}

createDiv();

const colorContainerEls = document.querySelectorAll(".color-container");

function generateColor(){
    colorContainerEls.forEach((divEl) => {
        divEl.style.backgroundColor = '#' + randomColor();
        divEl.innerText = "#" + randomColor();
    })
}

generateColor();