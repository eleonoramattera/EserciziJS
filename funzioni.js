const button = document.querySelector("button");
const h2 = document.querySelector("h2");
const nome = document.querySelector("input");

function saluta(nome = "marco") {
  h2.innerHTML = `ciao ${nome} `;
}

button.addEventListener("click", () => {
  saluta(nome.value);
});

//CON RETURN
const button2 = document.getElementById("btn");
const h22 = document.getElementById("h2");
const numero = document.getElementById("numero");

function cubo(num) {
  let result = num * num * num;
  return result;
}

button2.addEventListener("click", () => {
  h22.innerHTML = cubo(numero.value);
});
