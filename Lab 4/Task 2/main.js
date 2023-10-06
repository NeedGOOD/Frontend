function zxc(mainElement) {
    if (mainElement.nextElementSibling.style.display == "block") {
        mainElement.nextElementSibling.style.display = "none";
        mainElement.classList.toggle('button');
    } else {
        mainElement.nextElementSibling.style.display = "block";
        mainElement.classList.toggle('button');
    }
}