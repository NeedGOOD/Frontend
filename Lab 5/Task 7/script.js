const width = document.getElementById('width');
const height = document.getElementById('height');
const rotate = document.getElementById('rotate');
const bloc = document.querySelector('.bloc');

let width_value = document.getElementById('width-value');
let height_value = document.getElementById('height-value');
let rotate_value = document.getElementById('rotate-value');

width.addEventListener('input', () => {
    const width_range = width.value;
    bloc.style.width = width_range + 'px';
    width_value.textContent = width.value;
});

height.addEventListener('input', () => {
    const height_range = height.value;
    bloc.style.height = height_range + 'px';
    height_value.textContent = height.value;
});

rotate.addEventListener('input', () => {
    const rotate_range = rotate.value;
    bloc.style.transform = `rotate(${rotate_range}deg)`;
    rotate_value.textContent = rotate.value;
});