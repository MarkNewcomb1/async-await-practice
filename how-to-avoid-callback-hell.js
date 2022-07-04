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
    })