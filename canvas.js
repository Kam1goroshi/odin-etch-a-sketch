let isMouseDown = false;
let brushColor = "#000"
/**
 * Generates a pixel
 * @param {*} size 
 */
const generatePixel = (size) => {
    pixel = new Object();
    pixel.startingColor = "#ffffff";
    const rect = document.createElement('div');
    rect.setAttribute('class','pixel');
    rect.addEventListener('mouseover', () => {
        if(isMouseDown)
            rect.style.backgroundColor = brushColor;
    })
    rect.addEventListener('mousedown', () => {
            rect.style.backgroundColor = brushColor;
    })
    
    rect.style.backgroundColor = pixel.startingColor;
    rect.style.width = `${size}px`;
    rect.style.height = `${size}px`;
    rect.style.borderColor = "#b3b9bc";
    rect.style.borderWidth = "1px";
    rect.style.borderStyle = "solid";
    pixel.element = rect;
    return pixel;
}

const generateCanvas = (pixelCount, pixelSize) => {
    const canvas = new Object();
    canvas.pixelArray = new Array(pixelCount);
    canvas.pixelRows = new Array(pixelCount);
    for (let i = 0; i < pixelCount; i++) {
        canvas.pixelArray[i] = new Array(pixelCount);
        canvas.pixelRows[i] = document.createElement('div');
        canvas.pixelRows[i].setAttribute('class','row');
        for (let j = 0; j < pixelCount; j++) {
            canvas.pixelArray[i][j] = generatePixel(pixelSize);
            canvas.pixelRows[i].appendChild(canvas.pixelArray[i][j].element);
        }
    }
    return canvas;
}

const removeCurrentCanvas = () => {
    const documentCanvas = document.querySelector(".canvas");
    while(documentCanvas.hasChildNodes)
        documentCanvas.removeChild(documentCanvas.firstChild);
}

const displayCanvas = (canvas) => {
    canvas.pixelRows.forEach(element => {
        document.querySelector(".canvas").appendChild(element);
    });
}

document.querySelector('body').addEventListener('mousedown', ()=>{
    isMouseDown = true;
})

document.querySelector('body').addEventListener('mouseup', ()=>{
    isMouseDown = false;
})

document.querySelector('body').addEventListener('mouseleave', ()=>{
    isMouseDown = false;
})

const canvas = generateCanvas(32, 24);
displayCanvas(canvas);
// canvas.pixelArray[2][2].element.style.borderColor = "#111111";

console.log(canvas);

// This is what eventually should happen on hover.
// canvas.pixelArray[2][2].element.style.boxShadow = "inset 0 0 4px 4px  rgba(0,0,0,.5);