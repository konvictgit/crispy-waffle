const cart = ["sci","phy","math"];

createOrder(cart,function (orderId) {
    proceedToPayment(orderId);
});


const promise = createOrder(cart); //promise is just a empty object.

//this create order API will return us a promise which is nothing just a empty obj and the program will just go on executing further and the object will be filled by data in some later point after whatever async time it will take.

promise.then(function (orderId) {
    proceedToPayment(orderId);
});



