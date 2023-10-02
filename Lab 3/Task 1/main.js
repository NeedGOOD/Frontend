let paragraphs = document.getElementById("paragraphs");

let textContent = paragraphs.innerText;

console.log(textContent.length);

let p = document.querySelectorAll("p");

for (let i = 0; i < p.length; ++i) {
    let textContentP = p[i].innerText;
    console.log(textContentP.length);
}
console.log("----------------------");

let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

let max = arr[0];
let min = arr[0];

let couples = 0;
let odd = 0;

for (let i = 0; i < arr.length; ++i) {
    if (max < arr[i]) { max = arr[i]; }
    if (min > arr[i]) { min = arr[i]; }

    if (arr[i] % 2 == 0) { ++couples; }
    else { ++odd; }
}

console.log("max =", max);
console.log("min =", min);

console.log("couples =", couples);
console.log("odd =", odd);

let plus = 0;
let minus = 0;

for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > 9) { console.log(arr[i]); }
    if (arr[i] > 0) { ++plus; }
    if (arr[i] < 0) { ++minus; }
}

console.log("plus =", plus);
console.log("minus =", minus);