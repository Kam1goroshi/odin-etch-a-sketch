/**
 * Generates a pixel
 * @param {*} size 
 */
const generatePixel = (size) => {
    pixel = new Object();
    pixel.startingColor = "#ffffff";
    const rect = document.createElement('div');
    rect.setAttribute('class','pixel');
    rect.style.backgroundColor = pixel.startingColor;
    rect.style.width = `${size}px`;
    rect.style.height = `${size}px`;
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

// const deleteCurrentCanvas(){

// }

const displayCanvas = (canvas) => {
    canvas.pixelRows.forEach(element => {
        document.querySelector(".canvas").appendChild(element);
    });
}

const canvas = generateCanvas(16, 100);
displayCanvas(canvas);
console.log(canvas);