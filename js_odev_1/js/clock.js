 let username = prompt("Adınızı Girin:");
insertName = document.querySelector("#myName");
console.log(insertName);
insertName.innerHTML= username;

function showTime(){

let datetime = new Date().toLocaleTimeString('tr-tr',{hour12:false}) //saat

const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]; // haftanın günleri
let day = weekday[new Date().getDay()]; // sayısal veriyi günler ile eşleme

document.querySelector("#myClock").innerHTML = `${datetime}  ${day}`

}

var intervalID = setInterval(showTime, 1000);
