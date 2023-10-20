let rows = prompt("Введіть розмір рядків: ");       // Рядки
let columns = prompt("Введіть розмір колонок: ");   // Колонки

let array = [];

for (let i = 0; i < rows; ++i) {
    array[i] = [];
    for (let j = 0; j < columns; ++j) { array[i][j] = Math.floor(Math.random() * 21) - 10; }
}
console.log(array);     // Масив

let plus_numbers = 0;

for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
        if (array[i][j] > 0) { ++plus_numbers; }
    }
}
console.log("plus numbers =", plus_numbers);     // Кількість додатних елементів

let not_have_null_in_rows = 0;

array.some(function (row) {
    if (!row.includes(0)) { ++not_have_null_in_rows; }
});
console.log("not have null in rows =", not_have_null_in_rows);  // Кількість рядків, які не містять жодного нульового елемента

let have_null_in_columns = 0;

for (let i = 0; i < columns; ++i) {
    if (array.some(row => row[i] === 0)) { ++have_null_in_columns; }
}
console.log("have null in columns =", have_null_in_columns);   // Кількість стовпців, які містять хоча б один нульовий елемент

let result_product = [];
let index_product = [];
let bool_product = false;

for (let i = 0; i < rows; ++i) {
    let product = 1;
    for (let j = 0; j < columns; ++j) {
        if (array[i][j] < 0) {
            product = -1;
            break;
        } else { product *= array[i][j]; }
    }
    if (product != -1) {
        result_product.push(product);
        index_product.push(i);
        bool_product = true;
    }
}

if (bool_product) {
    for (let i = 0; i < index_product.length; ++i) { console.log("result product[", index_product[i], "] =", result_product[i]); }
} else { console.log("result product = empty") }    // Добуток елементів в тих рядках, які не містять від’ємних елементів

let result_sum_without_null = [];
let index_sum = [];
let bool_sum = false;

for (let i = 0; i < columns; ++i) {
    let sum = 0
    if (array.some(row => row[i] < 0)) {
        sum = -1;
        continue;
    } else {
        for (let j = 0; j < rows; ++j) { sum += array[j][i]; }
    }
    if (sum != -1) {
        result_sum_without_null.push(sum);
        index_sum.push(i);
        bool_sum = true;
    }
}

if (bool_sum) {
    for (let i = 0; i < index_sum.length; ++i) { console.log("result sum[", index_sum[i], "] =", result_sum_without_null[i]); }
} else { console.log("result sum = empty") }    // Суму елементів в тих стовпцях, які не містять від’ємних елементів

let result_sum_has_minus_number = [];
let index_sum_minus = [];
let bool_sum_minus = false;

for (let i = 0; i < columns; ++i) {
    let sum = 0;
    if (array.some(row => row[i] < 0)) {
        for (let j = 0; j < rows; ++j) { sum += array[j][i]; }
    } else {
        sum = -1;
        continue;
    }
    if (sum != -1) {
        result_sum_has_minus_number.push(sum);
        index_sum_minus.push(i);
        bool_sum_minus = true;
    }
}

if (bool_sum_minus) {
    for (let i = 0; i < index_sum_minus.length; ++i) { console.log("result has minus number[", index_sum_minus[i], "] =", result_sum_has_minus_number[i]); }
} else { console.log("result has minus number = empty") }   // Суму елементів в тих стовпцях, які  містять хоча б один від’ємний елемент

let transposed_matrix = []

for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
        if (!transposed_matrix[j]) { transposed_matrix[j] = []; }
        transposed_matrix[j][i] = array[i][j];
    }
}
console.log("Транспонована матриця");
console.log(transposed_matrix);  // Транспоновану матрицю

const main_diagonals = [];

function getMainDiagonals(r, c) {
    const diagonal = [];
    while (r < rows && c < columns) {
        diagonal.push(array[r][c]);
        ++r;
        ++c;
    }
    return diagonal;
}

for (let i = 0; i < rows; ++i) { main_diagonals.push(getMainDiagonals(i, 0)); }
for (let i = 1; i < columns; ++i) { main_diagonals.push(getMainDiagonals(0, i)); }
console.log("Головні діагоналі матриці");
console.log(main_diagonals);     // Головні діагоналі

const sum_diagonals = [];

for (let i = 0; i < main_diagonals.length; ++i) {
    let sum = 0;
    for (let j = 0; j < main_diagonals[i].length; ++j) { sum += main_diagonals[i][j]; }
    sum_diagonals.push(sum);
}
console.log(sum_diagonals);

let max_number_diagonal = sum_diagonals[0];

for (let i = 0; i < sum_diagonals; ++i) {
    if (max_number_diagonal > sum_diagonals[i]) { max_number_diagonal = sum_diagonals[i]; }
}
console.log("max number diagonal =", max_number_diagonal);    // максимум серед сум елементів діагоналей, паралельних головній діагоналі матриці (завдання на додаткові бали, приймається із обов’язковим усним поясненням та додатковими запитаннями від викладача)

const side_diagonals = [];

function getSideDiagonals(r, c) {
    const diagonal = [];
    while (r < rows && c < columns) {
        if (c < 0) { break; }
        diagonal.push(array[r][c]);
        ++r;
        --c;
    }
    return diagonal;
}

for (let i = columns - 1; i >= 0; --i) { side_diagonals.push(getSideDiagonals(0, i)); }
for (let i = rows - 1; i >= 1; --i) { side_diagonals.push(getSideDiagonals(i, columns - 1)); }
console.log("Бічні діагоналі матриці");
console.log(side_diagonals);    // Бічна діагональ

for (let i = 0; i < side_diagonals.length; ++i) {
    let sum = 0;
    for (let j = 0; j < side_diagonals[i].length; ++j) { sum += side_diagonals[i][j]; }
    sum_diagonals.push(sum);
}