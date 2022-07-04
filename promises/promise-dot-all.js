// Executing Promises in Parallel


// Declare 3 functions which imitate the Dealer API
function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);
    });
}
function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(12000), 5000);
    });
}
function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
}

// Invoke these 3 functions in parallel
Promise.all([
    askFirstDealer(), 
    askSecondDealer(), 
    askThirdDealer()
])
// Promise.all returns a Promise itself, so we can use the .then method
.then(prices => {
    console.log(prices);
});
// returns an array of [8000, 12000, 10000];

