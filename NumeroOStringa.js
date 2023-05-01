let x = "caiao";
if (!isNaN(Number(x))) {
  console.log("é un numero");
} else {
  console.log("è una stringa");
}

//SPIEGAZIONE
//Number è un metodo dei numeri che converte una variabile in un numero
//isNaN sarebbe Is Not A Number quindi = non è un numero
//!isNaN = non è un numero ma con !é un numero
//quindi si traduce è un numero x

//Esempi isNaN
console.log(isNaN(20)); // false perchè è un numero
console.log(isNaN("ciao")); // true perchè è una stringa
