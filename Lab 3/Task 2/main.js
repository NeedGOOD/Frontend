let div = document.querySelectorAll(".table");

div.forEach(table => {
    let tds = table.querySelectorAll("td");

    tds.forEach((td, index) => {
        if (index % 2 == 0) { td.classList.add("selected") }
    });
});

// for (let i = 0; i < div.length; ++i) {
//     let td = div[i].querySelectorAll("td");

//     for (let j = 0; j < td.length; ++j) {
//         if (j % 2 == 0) { td[j].classList.add("selected"); }
//     }
// }