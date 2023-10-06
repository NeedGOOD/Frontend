let rows = prompt("Введіть розмір рядків: ");       // Рядки
let columns = prompt("Введіть розмір колонок: ");   // Колонки

function createTable(m, n) {
    let array = [];     // Масив
    let table = document.createElement("table");    // Створення table

    for (let i = 0; i < m; ++i) {
        array[i] = [];      // Двухвимірний масив
        let tr = document.createElement("tr");      // Створення tr
        for (let j = 0; j < n; ++j) {
            array[i][j] = i;
            let td = document.createElement("td");  // Створення td
            td.textContent = array[i][j];           // Задаю числа в td
            tr.appendChild(td);                     // Додання комірки td в tr
        }
        table.appendChild(tr);  // Додання комірки tr в table
    }
    document.body.appendChild(table);   // Додавання створеної таблиці до body
}
createTable(rows, columns);