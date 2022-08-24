
//   формула генереії випадкового числа
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


let colors = ['is-info', 'is-success', 'is-warning', 'is-danger', 'is-link'];
//кольори фреймворка bulma або bootstrap, в які мы можемо фарбувати наші кнопки
//при кожеій генерації ми будемо назначати кожному символу свій колір, щоб користувач при набору не плутавсь
let str_arr = [ 'f', 'k', 'd', 'j', ' '];

let begin = document.querySelector(".begin"); // запрошення користувача нажати enter для початку гри. Потім вона повинна зникнути
let progress = document.getElementById("prog"); //  прогресс помилок користувача
let buttons = document.querySelector('.buttons'); // элемент в який записуються букви


function drawBoard() {
    for (let index = 0; index < 14; index++) { 
        let rand = getRandomInt(colors.length); // масив букв і цифр - однаковий, тому можна примінити кольори в подальшому
        buttons.insertAdjacentHTML("afterbegin",
        `<button class='game-button button is-large ${colors[rand]}' id='${str_arr[rand]}'>${str_arr[rand]}</button>`);
    }
}

document.addEventListener('keydown', StartGame, {
    once: true
    //завдяки 'once' у нас відрисовка викликажться лише один раз
});

function StartGame(e) {
    if (e.key == "Enter") {
        drawBoard();
        begin.style.display = "none"; // скриваємо кнопку запрошення до гри
        mainGame(); // гра почалась
    }
}

function mainGame() {
    document.addEventListener('keyup', press); // функція дає змогу зупинити гру
}


var count_right = 0;

var errors_count = 0;

function press(e) {

    let elements_arr = document.querySelectorAll(".game-button");  //  всі згенеровані кнопки

    if (e.key == elements_arr[0].id) { 
        elements_arr[0].remove();
        count_right++; //  правильні відповіді
    } else {
        errors_count++; // помилки
        progress.value = errors_count;
        if (errors_count > 14) { // якщо помилок більше - гра зупиняється 
            let fail = confirm("Game over! Хочете ще пограти ?"); 
            if (fail) {
                document.location.reload(); // перезавантаження якщо користувач, ще захоче грати
            } else {
                // тут могла бути ваша релама :D
                document.addEventListener('keydown', press);
            }
        }
    }
    if (count_right == 14) {
        alert("Вы выйграли!");
        let win = confirm("Хотите поиграть еще?");
        if(win){
            // document.location.reload(); // тоже самое что и при проигрыше. В дальнейшем планируется исправить
            drawBoard();
            begin.style.display = "none"; // скриваємо кнопку запрошення
            mainGame(); // гра почалась
        }
    }
}



