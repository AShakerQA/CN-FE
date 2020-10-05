'use strict'; 
// flags to browser that the code should be ECMAScript compliant

console.log("Hello, world!");

function global() {
    x = 47;
}

global();

// var x = 47;

console.log('x = ', x);


function hoisting() {
    // var hoist = undefined;
    console.log(hoist);
    let hoist = "oops";
}