function getRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(value => console.log(value.message));
}

// rewritten using async/await

async function getRandomDogImage() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let value = await response.json();
    console.log(value.message);
}

// to handle errors using async/await, use try/catch

async function f() {
    const response = await fetch('https://some-host.com/wrong-url');
}

f();

// will throw an uncaught error: Uncaught (in promise) TypeError: failed to fetch


// we need try/catch

async function f() {
    try {
        const response = await fetch('https://some-host.com/wrong-url');
    } catch (e) {
        console.log('Some error: ' + e);
    }
}

// This will properly catch the error. You could also do

f().catch(e => alert('Custom error: ' + e));