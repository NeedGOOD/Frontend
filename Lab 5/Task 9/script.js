let step = [0, 0, 0, 0];
// let have_or_not = true;

// // function createHead() {
// // }

// function createObjects(ware, number) {
//     // if (have_or_not) {
//     let div = document.createElement("div");

//     let p_basket = document.createElement("p");
//     p_basket.textContent = "Кошик:";

//     let table = document.createElement("table");

//     let tr_null = document.createElement("tr");

//     let td_ware = document.createElement("td");
//     td_ware.textContent = "Товар";

//     let td_amount = document.createElement("td");
//     td_amount.textContent = "Кількість";

//     tr_null.append(td_ware, td_amount);

//     let tr_first = document.createElement("tr");

//     let td_pants = document.createElement("td");
//     td_pants.textContent = "Брюки";

//     let td_pants_amount = document.createElement("td");
//     td_pants_amount.textContent = "0";

//     tr_first.append(td_pants, td_pants_amount);

//     let tr_second = document.createElement("tr");

//     let td_shirt = document.createElement("td");
//     td_shirt.textContent = "Сорочка";

//     let td_shirt_amount = document.createElement("td");
//     td_shirt_amount.textContent = "0";

//     tr_second.append(td_shirt, td_shirt_amount);

//     let tr_third = document.createElement("tr");

//     let td_shorts = document.createElement("td");
//     td_shorts.textContent = "Шорти";

//     let td_shorts_amount = document.createElement("td");
//     td_shorts_amount.textContent = "0";

//     tr_third.append(td_shorts, td_shorts_amount);

//     let tr_fourth = document.createElement("tr");

//     let td_shoes = document.createElement("td");
//     td_shoes.textContent = "Туфлі";

//     let td_shoes_amount = document.createElement("td");
//     td_shoes_amount.textContent = "0";

//     tr_fourth.append(td_shoes, td_shoes_amount);

//     table.append(tr_null, tr_first, tr_second, tr_third, tr_fourth);
//     div.append(p_basket, table);
//     document.body.appendChild(div);
//     // }
// }

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