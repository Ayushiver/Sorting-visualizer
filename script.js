let array = [];

function generateArray() {
    const barsContainer = document.getElementById("bars-container");
    barsContainer.innerHTML = "";

    for (let i = 0; i < 100; i++) {
        const value = Math.floor(Math.random() * 100) + 1;
        array.push(value);

        const bar = document.createElement("div");
        bar.style.height = `${value * 4}px`;
        bar.className = "bar";
        barsContainer.appendChild(bar);
    }
}

function swapBars(bar1, bar2) {
    const tempHeight = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = tempHeight;
}

async function bubbleSort() {
    const bars = document.querySelectorAll(".bar");
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].style.backgroundColor = "#FF4949";
            bars[j + 1].style.backgroundColor = "#FF4949";
            await new Promise(resolve => setTimeout(resolve, 50));

            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapBars(bars[j], bars[j + 1]);
            }

            bars[j].style.backgroundColor = "#5B8DEE";
            bars[j + 1].style.backgroundColor = "#5B8DEE";
        }
        bars[array.length - i - 1].style.backgroundColor = "#13CE66";
    }
}

async function selectionSort() {
    const bars = document.querySelectorAll(".bar");
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        bars[minIndex].style.backgroundColor = "#FF4949";

        for (let j = i + 1; j < array.length; j++) {
            bars[j].style.backgroundColor = "#FF4949";
            await new Promise(resolve => setTimeout(resolve, 50));

            if (array[j] < array[minIndex]) {
                bars[minIndex].style.backgroundColor = "#5B8DEE";
                minIndex = j;
                bars[minIndex].style.backgroundColor = "#FF4949";
            } else {
                bars[j].style.backgroundColor = "#5B8DEE";
            }
        }

        const temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;
        swapBars(bars[minIndex], bars[i]);

        bars[i].style.backgroundColor = "#13CE66";
    }
}

async function insertionSort() {
    const bars = document.querySelectorAll(".bar");
    for (let i = 1; i < array.length; i++) {
        const key = array[i];
        let j = i - 1;

        bars[i].style.backgroundColor = "#FF4949";
        await new Promise(resolve => setTimeout(resolve, 50));

        while (j >= 0 && array[j] > key) {
            bars[j].style.backgroundColor = "#FF4949";
            bars[j + 1].style.height = bars[j].style.height;
            j--;
            await new Promise(resolve => setTimeout(resolve, 50));
            bars[j + 1].style.backgroundColor = "#5B8DEE";
        }

        bars[j + 1].style.height = `${key * 4}px`;
        bars[j + 1].style.backgroundColor = "#13CE66";
    }
}

function resetArray() {
    array = [];
    generateArray();
}

generateArray();
