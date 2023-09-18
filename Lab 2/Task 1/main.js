var body = document.querySelector("body");

body.style.cssText = "font-family: Arial;";

var p = document.querySelectorAll("p");

p[0].style.cssText = "color: orange; background-color: yellow; font-size: 16px; padding: 5px; text-align: center;";
p[1].style.cssText = "color: blue; background-color: lightblue; font-size: 14px; padding: 5px; text-align: right;";
p[2].style.cssText = "color: red; background-color: lightcoral; font-size: 12px; padding: 5px; text-align: left;";

var td = document.querySelectorAll("td");

for (let i = 0; i < td.length; ++i) {
    if (i % 2 == 0) { td[i].classList.add("selected"); }
}