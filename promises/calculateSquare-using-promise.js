function calcuateSquare(number) {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof number !== 'number') {
                reject(new Error('Argument of type number was expected'));
            }
            const result = number * number;
            resolve(result);
        }, 1000)
    });
    return promise;
}

calcuateSquare(2)
.then(value => {
    console.log('Success: ' + value);
}, reason => {
    console.log('Error: ' + reason);
});

calcuateSquare('string')
.then(value => {
    console.log('Success: ' + value);
}, reason => {
    console.log('Error: ' + reason);
});