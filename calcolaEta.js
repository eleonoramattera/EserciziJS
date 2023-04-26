{
  /*Scrivi un programma che dato l’anno corrente e un anno di nascita determini
-l’età della persona
-quanti anni sono necessari per raggiungere i 100 */
}

let annoCorrente = new Date().getFullYear();
console.log(annoCorrente);

let annoNascita = 1998;

let eta = annoCorrente - annoNascita;
console.log(eta);

let anniPerRaggiungere100 = 100 - eta;
console.log(anniPerRaggiungere100);
