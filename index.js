

// Code your solution here
//reduce the array of products to a single value - the total number
//reduce method is used to aggregate a result - reduce a  list to a single value


// function getTotalAmountForProducts(products){
//     //step one declare a total variable and set value to 0
//     //2. Iterate through the products in basket and add on 
//     //3. When loop is done, return total price
//     let totalPrice = 0;
//     for (const product of products) {
//         totalPrice += product.price;
//     };
//     return totalPrice;
// }

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
//batches 
//1. Declare a variable
//2. Use the built in reduce method on the array
//3. total holdds the sum of all battery amounts in battery batches array
const totalBatteries = batteryBatches.reduce(function(total, batches){
    return batches + total
}) 

