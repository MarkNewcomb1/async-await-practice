function f(callback) {
    setTimeout(() => callback(), 0);
}

f(() => console.log('This is a callback'));

console.log('Hello world!');

/*
This outputs the following:

Hello world!
This is a callback

...so what's going on here? setTimeout has put our callback function to the task queue.
Methods from the task queue start executing once the call stack is empty. That's why 'Hello world' gets printed first. 

However, if we remove setTimeout from the function f:

function f(callback) {
    callback();
}

f(() => console.log('This is a callback'));

console.log('Hello world!');


^ That will output the following:

This is a callback
Hello world!

But why? Because there's no setTimout, the callback is added to the call stack instead of the task queue. There's no asynchronous function happening here. 
*/