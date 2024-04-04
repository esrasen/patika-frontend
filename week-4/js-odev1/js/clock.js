
//--name--
let myNameDom= document.querySelector('#myName');
let name = prompt("Adınız nedir? ");
myNameDom.innerHTML = name;

//--time--
function showTime() {
    let date = new Date();

    let hour = date.getHours(); // Saati al
    let min = date.getMinutes(); // Dakikayı al
    let sec = date.getSeconds(); // Saniyeyi al

    // Önünde sıfır eklemek için
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let day = date.getDay(); // Günü al
    let currentDay = getDayName(day);

    document.getElementById("myClock").innerHTML =
        ` ${hour}:${min}:${sec}  ${currentDay}`;

    // Saati 1 saniye sonra güncelleyecek
    setTimeout(showTime, 1000);
}
function getDayName(day) {
    switch (day) {
        case 0:
            return "Pazar";
        case 1:
            return "Pazartesi";
        case 2:
            return "Salı";
        case 3:
            return "Çarşamba";
        case 4:
            return "Perşembe";
        case 5:
            return "Cuma";
        case 6:
            return "Cumartesi";
        default:
            return "";
    }
}
showTime();
