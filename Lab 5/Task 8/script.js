let img = document.querySelector("img");
let input_button = document.querySelector("input");
let check = true;

width = img.naturalWidth;
height = img.naturalHeight;

function zxc() {
    if (check) {
        width *= 2;
        height *= 2;
        img.width = width;
        img.height = height;
        input_button.value = "Приходити у вихідний стан";
        check = false;
    } else {
        width /= 2;
        height /= 2;
        img.width = width;
        img.height = height;
        input_button.value = "Збільшити фото в 2 рази";
        check = true;
    }
}