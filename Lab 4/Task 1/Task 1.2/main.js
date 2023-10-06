function form() {
    let divMain = document.createElement("div");    // Спільний блок
    divMain.className = "div-main";

    let divLogin = document.createElement("div");   // Блок для логіна
    divLogin.className = "div-daughterly";

    let labelLogin = document.createElement("label");
    labelLogin.setAttribute("for", "login");
    labelLogin.textContent = "Логін: ";

    let inputLogin = document.createElement("input");
    inputLogin.setAttribute("type", "text");
    inputLogin.setAttribute("id", "login");

    divLogin.append(labelLogin, inputLogin);
    divMain.appendChild(divLogin);

    let divPassword = document.createElement("div");    // Блок для пароля
    divPassword.className = "div-daughterly";

    let labelPassword = document.createElement("label");
    labelPassword.setAttribute("for", "password");
    labelPassword.textContent = "Пароль: ";

    let inputPassword = document.createElement("input");
    inputPassword.setAttribute("type", "password");
    inputPassword.setAttribute("id", "password");

    divPassword.append(labelPassword, inputPassword);
    divMain.appendChild(divPassword);

    let divRepeatPassword = document.createElement("div");  // Блок для повторення пароля
    divRepeatPassword.className = "div-daughterly";

    let labelRepeatPassword = document.createElement("label");
    labelRepeatPassword.setAttribute("for", "repeat password");
    labelRepeatPassword.textContent = "Повторіть пароль: ";

    let inputRepeatPassword = document.createElement("input");
    inputRepeatPassword.setAttribute("type", "password");
    inputRepeatPassword.setAttribute("id", "repeat password");

    divRepeatPassword.append(labelRepeatPassword, inputRepeatPassword);
    divMain.appendChild(divRepeatPassword);

    let divSex = document.createElement("div");     // Блок для статі
    divSex.className = "div-daughterly";

    let labelSex = document.createElement("label");
    labelSex.textContent = "Стать: ";

    let inputSexMale = document.createElement("input");
    inputSexMale.setAttribute("type", "radio");
    inputSexMale.setAttribute("name", "sex");
    inputSexMale.setAttribute("id", "male");

    let labelSexMale = document.createElement("label");
    labelSexMale.setAttribute("for", "male");
    labelSexMale.textContent = "чоловік";

    let inputSexFemale = document.createElement("input");
    inputSexFemale.setAttribute("type", "radio");
    inputSexFemale.setAttribute("name", "sex");
    inputSexFemale.setAttribute("id", "female");

    let labelSexFemale = document.createElement("label");
    labelSexFemale.setAttribute("for", "female");
    labelSexFemale.textContent = "жінка";

    labelSex.append(inputSexMale, labelSexMale, inputSexFemale, labelSexFemale);
    divSex.appendChild(labelSex);
    divMain.appendChild(divSex);

    let divCity = document.createElement("div");    // Блок для міста
    divCity.className = "div-daughterly";

    let labelCity = document.createElement("label");
    labelCity.setAttribute("for", "city");
    labelCity.textContent = "Вкажіть місто: ";

    let selectCity = document.createElement("select");
    selectCity.setAttribute("size", "4");
    selectCity.setAttribute("id", "city");

    let optionZhytomyr = document.createElement("option");
    optionZhytomyr.setAttribute("value", "Житомир");
    optionZhytomyr.textContent = "Житомир";

    let optionKyiv = document.createElement("option");
    optionKyiv.setAttribute("value", "Київ");
    optionKyiv.textContent = "Київ";

    let optionLviv = document.createElement("option");
    optionLviv.setAttribute("value", "Львів");
    optionLviv.textContent = "Львів";

    selectCity.append(optionZhytomyr, optionKyiv, optionLviv);
    divCity.append(labelCity, selectCity);
    divMain.appendChild(divCity);

    let divHobby = document.createElement("div");   // Блок для хобі
    divHobby.className = "div-daughterly";

    let labelHobby = document.createElement("label");
    // labelHobby.setAttribute("for", "hobby");
    labelHobby.textContent = "Інтереси: ";

    let inputFootball = document.createElement("input");
    inputFootball.setAttribute("type", "checkbox");
    inputFootball.setAttribute("name", "hobby");
    inputFootball.setAttribute("id", "football");

    let labelFootball = document.createElement("label");
    labelFootball.setAttribute("for", "football");
    labelFootball.textContent = "футбол";

    let inputChess = document.createElement("input");
    inputChess.setAttribute("type", "checkbox");
    inputChess.setAttribute("name", "hobby");
    inputChess.setAttribute("id", "chess");

    let labelChess = document.createElement("label");
    labelChess.setAttribute("for", "chess");
    labelChess.textContent = "шахи";

    let inputPainting = document.createElement("input");
    inputPainting.setAttribute("type", "checkbox");
    inputPainting.setAttribute("name", "hobby");
    inputPainting.setAttribute("id", "painting");

    let labelPainting = document.createElement("label");
    labelPainting.setAttribute("for", "painting");
    labelPainting.textContent = "малювання";

    let inputMusic = document.createElement("input");
    inputMusic.setAttribute("type", "checkbox");
    inputMusic.setAttribute("name", "hobby");
    inputMusic.setAttribute("id", "music");

    let labelMusic = document.createElement("label");
    labelMusic.setAttribute("for", "music");
    labelMusic.textContent = "музика";

    labelHobby.append(inputFootball, labelFootball, inputChess, labelChess, inputPainting, labelPainting, inputMusic, labelMusic);
    divHobby.appendChild(labelHobby);
    divMain.appendChild(divHobby);

    let divButtons = document.createElement("div");   // Блок для кнопок
    divButtons.className = "div-daughterly";

    let inputClear = document.createElement("input");
    inputClear.setAttribute("type", "reset");
    inputClear.setAttribute("name", "button");
    inputClear.setAttribute("value", "Очистити");
    
    
    let inputSend = document.createElement("input");
    inputSend.setAttribute("type", "button");
    inputSend.setAttribute("name", "button");
    inputSend.setAttribute("value", "Відправити");

    divButtons.append(inputClear, inputSend);
    divMain.appendChild(divButtons);

    document.body.appendChild(divMain);     // Виводжу всі дані на HTML сторінку
}
form();