function calcuateSquare(number) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number !== 'number') {
                return reject(new Error('Argument of type number is expected'));
            }
            const result = number * number;
            resolve(result);
        }, 1000);
    });
    return promise;
}

calcuateSquare(1)
    .then(value => {
        console.log(value);
        return calcuateSquare(2);
    }).then(value => {
        console.log(value);
        return calcuateSquare(3);
    }).then(value => {
        console.log(value);
        return calcuateSquare(4);
    }).then(value => {
        console.log(value);
        return calcuateSquare(5);
    }).then(value => {
        console.log(value);
        return calcuateSquare(6);
    }).then(value => {
        console.log(value);
    })

    /*
    To handle errors, the .catch method is the same as calling
    .then with undefined as the first argument, like 
    myPromise.then(undefined, onRejected)
    */

calcuateSquare(1)
    .then(value => {
        console.log(value);
        return calcuateSquare(2);
    })
    .then(value => {
        throw new Error('Something went wrong');
        console.log(value);
    })
    .catch(reason => {
        console.log('error happened: ' + reason);
    });