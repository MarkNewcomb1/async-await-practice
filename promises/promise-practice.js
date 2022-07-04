const myPromise = new Promise(function (resolve, reject){
    resolve('Hello world');
});
// console.log(myPromise);

/*
Once either resolve or reject is invoked, the Promise exits. You cannot change the state of the Promise after that. 
Treat it as a return statement. After the return, any other code in the method is unreachable. 
*/

// .then method takes 2 arguments: onFulfilled, and onRejected

myPromise.then(value => {
    console.log('This is inside the onFulfilled function');
});
console.log('This is written after myPromise.then');

// All .then methods will called after all other code in the call stack gets executed. 