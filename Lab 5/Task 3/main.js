let first_number = 0;
let second_number = 0;
let input_next_task = document.querySelector('input[type="button"]');

function getRandomNonRepeatingNumber(existing_numbers) {
    let random_number;
    do { random_number = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1); } while (existing_numbers.includes(random_number));
    return random_number;
}

let radio_buttons = document.querySelectorAll('input[type="radio"]');
let answer = document.getElementById("answer");
let interest = 0;
let answers = 0;
let counter = 0;
let span = document.querySelector("span");

radio_buttons.forEach((radio) => {
    radio.addEventListener('change', (event) => {
        ++counter;

        if (event.target.value == first_number * second_number) {
            answer.textContent = "Відповідь правильна";
            interest += 10;
            ++answers;
            span.textContent = `${interest}% (${answers} правильних відповідей з 10)`;
        } else { answer.textContent = `Помилка, правильна відповідь \"${first_number * second_number}\"`; }

        if (input_next_task.disabled) { input_next_task.disabled = false; }

        if (radio.checked) {
            radio_buttons.forEach((other_radio) => {
                if (other_radio !== radio) { other_radio.disabled = true; }
            });
        }

        if (counter == 10) {
            input_next_task.disabled = true;
            radio.disabled = true;
            let end_test = document.createElement("div");
            end_test.textContent += "Тест завершено";
            document.body.appendChild(end_test);
        }
    });
});

function seeDisplay(element) {
    if (getComputedStyle(element).display == "none") { element.style.display = "block"; }
}

function nextQuestions() {
    let see_block = document.querySelector(".none");

    seeDisplay(see_block);

    if (!input_next_task.disabled) { input_next_task.disabled = true; }

    radio_buttons.forEach((radio) => {
        radio.checked = false;
        radio.disabled = false;
    });

    first_number = Math.floor(Math.random() * 10) + 1;
    second_number = Math.floor(Math.random() * 10) + 1;

    let div = document.getElementById("task");

    div.textContent = `${first_number} * ${second_number} = `;

    let third_number = first_number * second_number;
    let existing_numbers = [];
    let massiv_label = document.querySelectorAll("label");

    for (let i = 0; i < massiv_label.length; ++i) {
        if (i == 0) { existing_numbers.push(third_number); }
        else {
            let random_number = getRandomNonRepeatingNumber(existing_numbers);
            existing_numbers.push(random_number);
        }
    }
    existing_numbers.sort(() => Math.random() - 0.5);

    for (let i = 0; i < existing_numbers.length; ++i) {
        massiv_label[i].textContent = existing_numbers[i];
        radio_buttons[i].value = existing_numbers[i];
    }
}