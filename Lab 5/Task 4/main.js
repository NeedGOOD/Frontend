let first_number = 0;
let second_number = 0;
let input_next_task = document.getElementById("next-task");
let input_checking_answer = document.getElementById("checking-answer");
let input_text = document.getElementById("answer");
let answer = document.getElementById("conclusion");
let span = document.querySelector("span");

input_checking_answer.disabled = true;

function seeDisplay(element) {
    if (getComputedStyle(element).display == "none") { element.style.display = "block"; }
}

function nextTask() {
    let see_block = document.querySelector(".none");

    seeDisplay(see_block);

    input_text.value = "";
    answer.textContent = "";
    first_number = Math.floor(Math.random() * 10) + 1;
    second_number = Math.floor(Math.random() * 10) + 1;

    let label = document.querySelector("label");

    label.textContent = `${first_number} * ${second_number} = `;

    if (input_checking_answer.disabled) {
        input_checking_answer.disabled = false;
        input_next_task.disabled = true;
    }
}

let interest = 0;
let answers = 0;
let counter = 0;

function checkingAsnwer() {
    ++counter;

    let third_number = first_number * second_number;

    if (third_number == input_text.value) {
        answer.textContent = "Відповідь правильна";
        interest += 10;
        ++answers;
        span.textContent = `${interest}% (${answers} правильних відповідей з 10)`;
    } else { answer.textContent = `Помилка, правильна відповідь \"${third_number}\"`; }

    if (counter == 10) {
        input_next_task.disabled = true;
        input_checking_answer.disabled = true;
        let div = document.createElement("div");
        div.textContent += "Тест завершено";
        document.body.appendChild(div);
    } else if (input_next_task.disabled) {
        input_next_task.disabled = false;
        input_checking_answer.disabled = true;
    }
}