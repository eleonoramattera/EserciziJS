/*// Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

function contaNumero() {
  let num = Math.floor(Math.random() * 999);
  console.log(num);
  if (num < 10) {
    console.log("ha una cifra");
  } else if (num >= 10 && num < 100) {
    console.log("ha 2 cifre");
  } else {
    console.log("ha 3 cifre");
  }
}
contaNumero();

// Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
function numeriPrimi() {
  let num = Math.floor(Math.random() * 999);
  console.log(num);
  if (num > 1 % 1 === 0 || num > 1 % num === 0) {
    console.log("true. è primo");
  } else {
    console.log("false. non è primo");
  }
}

numeriPrimi();
*/
/*
Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.
La seconda funzione:
- nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
  considerando la seguente corrispondenza:
      1 = Lunedì
      ...
      7 = Domenica
- nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'
*/
function numero(n) {
  let num = Math.floor(Math.random() * 10);
  console.log("numero randomico", num);
  if (num >= 1 && num <= 7) {
    console.log("true è compreso tra 1 e 7");
  } else {
    console.log("false non è compreso tra 1 e 7");
  }
  return num;
}

function giorno(n) {
  let num = numero();
  switch (num) {
    case 1:
      console.log("lunedi");
      break;
    case 2:
      console.log("martedi");
      break;
    case 3:
      console.log("mercoledi");
      break;
    case 4:
      console.log("giovedi");
      break;
    case 5:
      console.log("venerdi");
      break;
    case 6:
      console.log("sabato");
      break;
    case 7:
      console.log("domenica");
      break;
    default:
      console.log("peccato non possiamo indovinare il giorno");
  }
}

numero();
giorno();

/*
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.
  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE
*/

function palindromo() {
  let stringa = "i topi non avevano nipoti";
  let stringaAlContrario = stringa.split("").reverse().join("");
  let stringaAlContrario2 = stringaAlContrario.replace(/ /g, ""); // per rimuovere spazi
  if (stringa === stringaAlContrario) {
    console.log("true");
  } else {
    console.log("false");
  }
}

palindromo();

// esempio 2
/* 
1)let parola = 'Osso';
2) let  parolaDivisa = parola.split('');
console.log(parolaDivisa); // 0:"o" 1:"s" 2:"s" 3:"o"
3)let  parolaDivisa2 = parolaDivisa.reverse();
console.log(parolaDivisa2);// stesso risultato di su perchè parola è polindrama 0:"o" 1:"s" 2:"s" 3:"o"
4) let parolaInvertita = parolaDivisa2.join('');
console.log(parolaInvertita); // per riunire le lettere
5) //comparare le parole
if(parola == parolaInvertita){
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
} 
così è senza funzione. con la funzione 
 */
let parola = "osso";
let parolaInversa = invertiParola(parola);

if (parola == parolaInversa) {
  console.log("la parola è palindroma");
} else {
  console.log("la parola non è palindroma");
}

function invertiParola(str) {
  let strInversa = str.split("").reverse().join("");
  return strInversa;
}

//Scrivi due funzioni che prendano in input un array di numeri,
//una funzione deve restituire il valore maggiore contenuto nell'array,
//l'altra il valore minore.

let array = [2, 364, 67, 53, 879, 24, 67];
array.sort(function (a, b) {
  return a - b;
});
console.log(array);

function min(arr) {
  console.log(array[0]);
  return array[0];
}

min();

function mag(arr) {
  console.log(array.pop());
  return array.pop();
}

mag();

//Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.
function timer() {
  for (let i = 4; i >= 0; i--) {
    const element = i;
    console.log(element);
  }
}
timer();
