// Declaring calculateSquare function
function calculateSquare(number, callback) {
    setTimeout(function() {
        if (typeof number !== 'number') {
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000);
}

// Invoking calculateSquare function for numbers from 1 to 6 sequentially (one after another)
// This is an example of a callback hell
calculateSquare(1, function (error, result) {
    console.log(result);
    calculateSquare(2, function (error, result) {
        console.log(result);
        calculateSquare(3, function (error, result) {
            console.log(result);
            calculateSquare(4, function (error, result) {
                console.log(result);
                calculateSquare(5, function (error, result) {
                    console.log(result);
                    calculateSquare(6, function (error, result) {
                            console.log(result);
                    });
                });
            });
        });
    });
});

/*
calculateSquare(1, function(error, result) {
    console.log(result);
});
calculateSquare(2, function(error, result) {
    console.log(result);
});
calculateSquare(3, function(error, result) {
    console.log(result);
});

^ This should print 1, 4, and 9 to the console, all one second after another, right?
Nope. It waits one second, then prints all three at once. Why? calculateSquare is
asynchronous, but we're calling it as if it's synchronous. JS engine doesn't wait for
an asynchronous function to finish executing before moving onto the next function. It simply makes a note
that the callback (that has setTimeout) should execute 1 second after the start of execution of the function - that's it. 
Same with the second and third invocations of the calcuateSquare method. 

If we want to wait for the second invocation of calculateSquare to wait until after the first invocation of calculateSquare is done,
we have to move the second invocation of calculateSquare INSIDE the callback of the first one. 

This isn't scalable - it's callback hell. This is why Promises were invented. 
*/