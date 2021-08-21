//this function for memory
function getInputMemory(memory, isIncrease) {
    const inputMemory = document.getElementById('memory');
    inputMemory.innerText = memory;
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText
    if (isIncrease == true) {
        totalPrice.innerText = 1299;
    }
    else if (isIncrease == false) {
        totalPrice.innerText = 1479;
    }
}
//8gb memory button
document.getElementById('8gb-memory').addEventListener('click', function () {
    getInputMemory(0, true)
})
//16gb memory button
document.getElementById('16gb-memory').addEventListener('click', function () {
    getInputMemory(180, false)

})

//this function for storage 
function getInputStorage(storage, price, isIncrease) {
    const inputStorage = document.getElementById(storage);
    inputStorage.innerText = price;
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText
    if (isIncrease == true && price == 0) {
        totalPrice.innerText = 1299;
    }
    else if (isIncrease == false && price == 100) {
        totalPrice.innerText = 1399;
    }
    else if (isIncrease == false && price == 180) {
        totalPrice.innerText = 1479;
    }

}

//256gb ssd card
document.getElementById('256gb-storage').addEventListener('click', function () {
    getInputStorage('storage', 0, true)
})
//512gb ssd card
document.getElementById('512gb-storage').addEventListener('click', function () {
    getInputStorage('storage', 100, false)
})
//1tb ssd card
document.getElementById('1tb-storage').addEventListener('click', function () {
    getInputStorage('storage', 180, false)
})

//this function for delivery charge
function getInputDelivery(charge, isIncrease) {
    const inputMemory = document.getElementById('delivery');
    inputMemory.innerText = charge;
    const totalPrice = document.getElementById('total-price');
    // const totalPriceText = totalPrice.innerText
    if (isIncrease == true) {
        totalPrice.innerText = 1299;
    }
    else if (isIncrease == false) {
        totalPrice.innerText = 1319;
    }
}

//free delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    getInputDelivery(0, true)
})
//pay delivery
document.getElementById('pay-delivery').addEventListener('click', function () {
    getInputDelivery(20, false)

})

//coupon code 
document.getElementById('apply-button').addEventListener('click', function () {
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    // const totalPriceAmount = parseInt(totalPriceText)
    const total = document.getElementById('total');
    const discount = (totalPriceText * 20) / 100;
    const couponCode = document.getElementById('coupon-code')
    const couponCodeValue = couponCode.value;
    if (couponCodeValue == 'stevekaku') {
        total.innerText = totalPriceText - discount
    }
})