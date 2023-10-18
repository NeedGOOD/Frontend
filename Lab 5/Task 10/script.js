let imgs = document.querySelectorAll("img");
let photo = ["first", "second", "third",
    "fourth", "fifth", "sixth",
    "seventh", "eighth", "nineth",
    "tenth", "eleventh", "twelfth"];
let current_photo_index = 0;

function zxc(index) {
    for (let i = 0; i < imgs.length; i++) {
        if (i == index) { imgs[i].style.transform = 'translateX(0)'; }
        else { imgs[i].style.transform = 'translateX(100%)'; }
    }
}

function left() {
    current_photo_index--;
    if (current_photo_index < 0) { current_photo_index = current_photo_index.length - 1; }
    zxc(current_photo_index);
}

function right() {
    current_photo_index++;
    if (current_photo_index >= photo.length) { current_photo_index = 0; }
    zxc(current_photo_index);
}