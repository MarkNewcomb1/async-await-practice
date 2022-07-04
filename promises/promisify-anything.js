// regular function
function capitalize(text) {
    return text[0].toUpperCase() + text.substr(1);
}

// same function promisified
function capitalize(text) {
    return new Promise(function (resolve, reject) {
        if (typeof text !== 'string') {
            return reject(new Error('Argument must be a string'));
        }
        const result = text[0].toUpperCase() + text.substr(1);
        resolve(result);
    });
}

