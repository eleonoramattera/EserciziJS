//MOSTRA LA DATA DI OGGI IN DIVERSI FORMATI
let now1 = new Date().toLocaleString();
console.log(now1);
const data1 = document.getElementById("data1");
data1.innerHTML = now1;

let now2 = new Date().toLocaleDateString();
console.log(now2);
const data2 = document.getElementById("data2");
data2.innerHTML = now2;

//lungo
const options = { weekday: "long", year: "2-digit", month: "long", day: "2-digit" };
let now3 = new Date().toLocaleDateString("it-IT", options);
console.log(now3);
const data3 = document.getElementById("data3");
data3.innerHTML = now3;

//abbreviato
const option = { weekday: "short", year: "2-digit", month: "short", day: "2-digit" };
let now4 = new Date().toLocaleDateString("it-IT", option);
console.log(now4);
const data4 = document.getElementById("data4");
data4.innerHTML = now4;

//corto
const opt = { weekday: "narrow", year: "2-digit", month: "narrow", day: "2-digit" };
let now5 = new Date().toLocaleDateString("it-IT", opt);
console.log(now5);
const data5 = document.getElementById("data5");
data5.innerHTML = now5;

let now6 = new Date().toDateString();
console.log(now6);
const data6 = document.getElementById("data6");
data6.innerHTML = now6;

let now7 = new Date().toTimeString();
console.log(now7);
const data7 = document.getElementById("data7");
data7.innerHTML = now7;
