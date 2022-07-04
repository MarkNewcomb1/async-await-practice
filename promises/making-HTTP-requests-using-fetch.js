fetch('https://www.omdbapi.com/s=batman&y=2018&apikey=ed4903dc')
    .then(response => response.json()) // .json returns a promise https://developer.mozilla.org/en-US/docs/Web/API/Response/json
    .then(data => console.log(data));


    // Promise {<pending>}

    // Response { type: "cors", url: "https://www.omdbapi.com"}