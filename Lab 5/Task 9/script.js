let step = [0, 0, 0, 0];

function zxc(element) {
    let ware = document.getElementsByClassName("ware");

    for (let i = 0; i < ware.length; ++i) {
        if (element == "Брюки" && ware[i].textContent == "Брюки") {
            step[i] += 1;
            ware[i].nextElementSibling.textContent = step[i];
        } else if (element == "Сорочка" && ware[i].textContent == "Сорочка") {
            step[i] += 1;
            ware[i].nextElementSibling.textContent = step[i];
        } else if (element == "Шорти" && ware[i].textContent == "Шорти") {
            step[i] += 1;
            ware[i].nextElementSibling.textContent = step[i];
        } else if (element == "Туфлі" && ware[i].textContent == "Туфлі") {
            step[i] += 1;
            ware[i].nextElementSibling.textContent = step[i];
        }
    }
}