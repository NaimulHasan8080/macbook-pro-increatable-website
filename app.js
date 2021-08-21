function updatePrice(inputId, cost) {
    const inputIdText = document.getElementById(inputId);
    inputIdText.innerText = cost;
    calculatePrice()
}

//calculate total price
function calculatePrice() {
    const bestPrice = 1299;
    //memory cost
    const extraMemory = document.getElementById('memory');
    const extraMemoryText = extraMemory.innerText;
    const extraMemoryAmount = parseInt(extraMemoryText);

    //storage cost
    const extraStorage = document.getElementById('storage');
    const extraStorageText = extraStorage.innerText;
    const extraStorageAmount = parseInt(extraStorageText)

    //delivery cost
    const delivery = document.getElementById('delivery');
    const deliveryText = delivery.innerText;
    const deliveryAmount = parseInt(deliveryText);

    //total price 
    document.getElementById('total-price').innerText = bestPrice +
        extraMemoryAmount + extraStorageAmount + deliveryAmount;
    //total amount    
    document.getElementById('total').innerText = bestPrice +
        extraMemoryAmount + extraStorageAmount + deliveryAmount;
}

//coupon code 
document.getElementById('apply-button').addEventListener('click', function () {
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const total = document.getElementById('total');
    const discount = (totalPriceText * 20) / 100;
    const couponCode = document.getElementById('coupon-code')
    const couponCodeValue = couponCode.value;
    if (couponCodeValue == 'stevekaku') {
        total.innerText = totalPriceText - discount
    }
})

//8gb memory button
document.getElementById('8gb-memory').addEventListener("click", function () {
    updatePrice('memory', 0)
})

//16gb memory button
document.getElementById('16gb-memory').addEventListener("click", function () {
    updatePrice('memory', 180)
})

//  256 gb ssd
document.getElementById('256gb-storage').addEventListener("click", function () {
    updatePrice('storage', 0)
})
//  512 gb ssd
document.getElementById('512gb-storage').addEventListener("click", function () {
    updatePrice('storage', 100)
})
//  1tb ssd
document.getElementById('1tb-storage').addEventListener("click", function () {
    updatePrice('storage', 180)
})
//  free delivery
document.getElementById('free-delivery').addEventListener("click", function () {
    updatePrice('delivery', 0)
})
//  pay delivery
document.getElementById('pay-delivery').addEventListener("click", function () {
    updatePrice('delivery', 20)
})
