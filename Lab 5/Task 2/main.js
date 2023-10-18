let input_checkboxes = document.getElementsByClassName("email");

function updatePage() {
    let input_checkbox = document.getElementsByClassName("email");
    let output = [];
    let email = ["mountain", "tree", "world", "cloud", "river", "wood", "field", "snow", "rain", "wind"];

    for (let i = 0; i < input_checkbox.length; ++i) {
        if (input_checkbox[i].checked) { output.push(email[i]); }
    }

    let p = document.querySelector("p");

    if (output.length) { p.textContent = output.join(", "); }
    else { p.textContent = "Немає обраної електронної пошти"; }
}

for (let i = 0; i < input_checkboxes.length; i++) { input_checkboxes[i].addEventListener("change", updatePage); }