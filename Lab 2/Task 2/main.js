let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;

let new_word = text[12] + text[6] + text[18] + text[25];

console.log(new_word);
console.log(text.toLowerCase());

for (let i = 0; i < text.length; ++i) {
    if (text[i] == "i" && text[i + 1] == "n") { console.log(i); }
}

console.log(text.split(' '));
console.log(text.split('').reverse().join(''));

function ucFirst(txt) {
    let newTxt = txt[0].toUpperCase() + txt.slice(1);
    return newTxt;
}
console.log(ucFirst('some text'));