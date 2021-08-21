// /////// calculate-memory-cost//////
function getMemoryPrice(price){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = price;  
}

document.getElementById('8gb-memory').addEventListener('click', function(){
    getMemoryPrice(0);
})
document.getElementById('16gb-memory').addEventListener('click', function(){
    getMemoryPrice(180);
    calculateTotal();
})

/////////calculate-extra-storage-cost/////////
function getStorageCost(price){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = price;
   
}
document.getElementById('256gb-storage').addEventListener('click', function(){
    getStorageCost(0);
})
document.getElementById('512gb-storage').addEventListener('click', function(){
    getStorageCost(100);
    calculateTotal();
})
document.getElementById('1tb-storage').addEventListener('click', function(){
    getStorageCost(180);
    calculateTotal();
})

// /////calculate-delivery-cost//////////
function getDeliveryCost(charge){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = charge;
    
}
document.getElementById('free-delivery').addEventListener('click', function(){
    getDeliveryCost(0); 
})
document.getElementById('charge-delivery').addEventListener('click', function(){
    getDeliveryCost(20); 
    calculateTotal();
})

// /////////total-price////////////
function calculateTotal(){
    const memoryCostText = document.getElementById('memory-cost').innerText;
    const memoryCost = parseFloat(memoryCostText);
    
    const storageCostText = document.getElementById('storage-cost').innerText;
    const storageCost = parseFloat(storageCostText);
    
    const deliveryCostText = document.getElementById('delivery-cost').innerText;
    const deliveryCost = parseFloat(deliveryCostText); 

    const prevoiusTotalCost = document.getElementById('total-cost');
    const totalCostText = prevoiusTotalCost.innerText;
    const totalCost = parseFloat(totalCostText);

    const discountPrice = document.getElementById('discounted-price');
    
    const newTotalCost = totalCost + memoryCost + storageCost + deliveryCost;
    prevoiusTotalCost.innerText = newTotalCost;
    discountPrice.innerText = newTotalCost;
}


////////apply promo code & discount price
document.getElementById('promo-button').addEventListener('click', function(){
    const promoInput = document.getElementById('promo-input');
    const discountPrice = document.getElementById('discounted-price');

    const totalCostText = document.getElementById('total-cost').innerText;
    const totalCost = parseFloat(totalCostText);
    const promoTotalCost = totalCost - (totalCost / 5);
    if(promoInput.value == 'stevekaku'){
        discountPrice.innerText = promoTotalCost;
    }
    else{
        discountPrice.innerText = totalCost;
    }
    promoInput.value = '';
})
