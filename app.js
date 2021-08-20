// function getInputMemory(memory, add) {
//     const inputMemory = document.getElementById(memory);
//     const inputMemoryText = inputMemory.innerText;

//     if (add == true) {
//         inputMemory.innerText = 000;
//     }
//     else if (add == false) {
//         inputMemory.innerText == 000;
//         console.log(inputMemory)
//     }
// }



document.getElementById('8gb-memory').addEventListener('click', function () {
    const memory16Gb = document.getElementById('memory');
    memory16Gb.innerText = 00;
    // getInputMemory('memory', true)
})
document.getElementById('16gb-memory').addEventListener('click', function () {
    const memory16Gb = document.getElementById('memory');
    const memory16GbText = memory16Gb.innerText
    memory16Gb.innerText = 180;
    const totalPrice = document.getElementById('total-price');

    const totalPriceText = totalPrice.innerText
    // totalPrice.innerText = parseInt(totalPriceText) + 180;
    totalPrice.innerText = 1299 + 180;

    // getInputMemory('memory', false)
})