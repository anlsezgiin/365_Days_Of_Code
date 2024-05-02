import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import emojipedia from "./emojipedia";
// const root = ReactDOM.createRoot(document.getElementById);
// root.render(<StrictMode>
//     <App />
// </StrictMode>)

var numbers = [3, 56, 2, 48,70, 5]


//Map -Create a new array by doing something with each item in an array.
;
// function doubleNumbers(x)
// {
//     return x*2;
// }
// const a = numbers.map(doubleNumbers)
// console.log(a)



//Filter - Create a new array by keeping the items that return true.
// const a = numbers.filter(e=>
// {
//     return e>10;
// })
// console.log(a);



//Reduce - Accumulate a value by doing something to each item in an array.
// const a = numbers.reduce((acc,e)=>
// {
//     console.log(acc);
//     return acc + e;
// })
// console.log(a)




//Find - find the first item that matches from an array.
// const a = numbers.findIndex(e=>
// {
//     return e > 60;
// })
// console.log(a)
//FindIndex - find the index of the first item that matches.

// challange -> emojipediadaki diziden meaningleri toplayıp 100 karakterlik olarak yeni bir diziye aktarmamızı istiyor.

const a = emojipedia.map(e=>
{
    return e.meaning.substring(0,100);
});

console.log(a);

