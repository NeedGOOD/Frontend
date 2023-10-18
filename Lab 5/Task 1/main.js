function zxc() {
    let input_checkbox = document.getElementsByClassName("language");
    let output = [];
    let language = ["Ukrainian", "English", "Spanish"];

    for (let i = 0; i < input_checkbox.length; ++i) {
        if (input_checkbox[i].checked) { output.push(language[i]); }
    }

    let p = document.querySelector("p");

    if (output.length) { p.textContent = output.join(", "); }
    else { p.textContent = "Немає обраних мов"; }
}