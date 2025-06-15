let array = [];
const numBars = 50;

function generateArray() {
    array = [];
    const container = document.getElementById('bars-container');
    container.innerHTML = '';
    for (let i = 0; i < numBars; i++) {
        let value = Math.floor(Math.random() * 400) + 50;
        array.push(value);

        const bar = document.createElement('div');
        bar.style.height = `${value}px`;
        bar.classList.add('bar');
        container.appendChild(bar);
    }
}

async function startSort() {
    const algorithm = document.getElementById('algorithm').value;
    if (algorithm === 'bubble') await bubbleSort();
    if (algorithm === 'selection') await selectionSort();
    if (algorithm === 'insertion') await insertionSort();
}

async function bubbleSort() {
    const bars = document.getElementsByClassName('bar');
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].style.backgroundColor = 'red';
            bars[j + 1].style.backgroundColor = 'red';

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                bars[j].style.height = `${array[j]}px`;
                bars[j + 1].style.height = `${array[j + 1]}px`;
            }
            await new Promise(resolve => setTimeout(resolve, 30));

            bars[j].style.backgroundColor = 'teal';
            bars[j + 1].style.backgroundColor = 'teal';
        }
    }
}



generateArray();
