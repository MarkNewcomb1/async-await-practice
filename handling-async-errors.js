function calculateSquare(number, callback) {
    setTimeout( function () {
        if (typeof number !== 'number') {
            throw new Error('Argument of type number is expected');
        }
        const result = number * number;
        callback(result);
    }, 1000);
}

try {
    calculateSquare('bad argument', function (result) {
        console.log(result);
    });
} catch (error) {
    console.log('Caught error: ' + String(error));
}

/*
If you run this, you'll get an Uncaught Error: Argument of type number is expected instead of the
'Caught error' message. That's because by the time the callback has been called, the surrounding code, including the try/catch block, will have already executed. 
Remember, setTimout will put our callback inside the task queue, and the try/catch block resides inside the call stack. EVERYTHING from the call stack will be
executed before we even get to the first item from the task queue. That's why we can't use try/batch inside asynchrous callbacks. 

This is why error handling is usually done by having err as the first argument inside the callback - if there's no error, then err is null. 
It's called an "error first" callback, and is very common in JS. 

Fixed:
function calculateSquare(number, callback) {
    setTimeout( function () {
        if (typeof number !== 'number') {
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000);
}

invoking it:

calculateSquare('bad argument', function (error, result) {
    if (error !== null) {
        console.log('Caught error: ' + String(error));
        return;
    }
    console.log(result);
});

*/