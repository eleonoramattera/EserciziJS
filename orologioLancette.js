clock();

function clock() {
  let date = new Date();

  let ore = date.getHours() * 30;
  let minuti = date.getMinutes();
  let secondi = date.getSeconds();

  let ora = ore * 30;
  let minuto = minuti * 6;
  let secondo = secondi * 6;

  document.querySelector(".ore").style.transform = `rotate(${ora}deg) `;
  document.querySelector(".minuti").style.transform = ` rotate(${minuto}deg)`;
  document.querySelector(".secondi").style.transform = `rotate(${secondi}deg) `;
}
