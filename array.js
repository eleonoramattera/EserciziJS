/*Create un array con un numero casuale di numeri interi e
 per ognuno di essi mandate a schermo se si tratta di un numero pari o dispari.
Il numero casuale degli elementi deve essere generato dal programma e non messo manualmente. */

let arr = [];

//METTERE NUMERI CASUALI IN ARRAY
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 150)); //metto numero che voglio
}
console.log(arr);

//FOR EACH
arr.forEach((numero) => {
  const tipo = numero % 2 == 0 ? "pari" : "dispari";
  console.log(`${numero} è ${tipo}`);
});

//oppure FOR OF
for (const elem of arr) {
  const pariODispari = elem % 2 === 0 ? "pari" : "dispari";
  console.log(pariODispari, elem);
}
