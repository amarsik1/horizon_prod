const comments = {
    "0": {
        "name": "Настя и Макс <br> 27.09.2019",
        "text": "Ребята 💗 Вы мои самые любимые вот правда ✨😘 " +
            "Чьи работы не смотрела, ваши ни с кем не сравняться!!!" +
            "Каждое видео смотрю и реву 😭 И хоть 100 раз посмотрю все равно реву!" +
            "Ну это ж как надо снимать 🙈 Вообщем готова вам признаваться в любви ещё 1000 раз!!!💗"
    },
    "1": {
        "name": "Настя  и Влад <br> 07.06.2019",
        "text": "Я вам дуже дякую за весільне відео воно круте😵" +
            "Ви неперевершена команда, професіонали своєї справи) Нам було дуже комфортно," +
            "весело та легко працювати з вами! Обов‘язково будемо рекомендувати вас своїм знайомим!!😁"
    },
    "2": {
        "name": "Вика и Дима <br> 11.08.2018",
        "text": "@horizon.prod дякуєм за таке круте відео💕 кожного разу, коли переглядаю, мурашки по шкірі😍 "
    },
    "3": {
        "name": "Карина и Дима <br> 12.07.2019",
        "text": "Спасибо большое вашей команде! Вы просто космос!!!💗Видео ну настолько крутое, что слезы еле остановить😭😅" +
            "Мы ни капельки не пожалели о своём выборе, а только счастливы вас рекомендовать всему миру💕 Мы вас всех обнимаем и теперь на любое торжество только вы💗️"
    },
    "4": {
        "name": "Женя и Саша <br> 26.07.2019",
        "text": "Огромное спасибо за видео!  Мы в восторге, все очень круто))  Вы большие молодцы"
    },
    "5": {
        "name": "Света и Стас <br> 10.08.2019",
        "text": "Привіт)) Ми дивились відео уже 3 рази! Я не уявляла як наше весілля можна вмістить в 40 хвилин))" +
            "але ви зробили це! І дуже круто))) дивились відео просто на одному диханні...хотілось ще і ще)))) дуже вам дякуємо))) ви великі молодці)))) " +
            "Мені здається що я буду кожен день переглядать його)))"
    },
};
comments.length = Object.keys(comments).length;
let nameUser = document.getElementById('nameUser');
let text = document.getElementById('message');
let i = 0;

function update() {
    let comment = comments[i];
    if (i + 1 > comments.length)
        i = 0;
    else {
        nameUser.innerHTML = comment.name;
        text.innerText = comment.text;
        i++;
    }
}
update();
setInterval(update, 10000);
