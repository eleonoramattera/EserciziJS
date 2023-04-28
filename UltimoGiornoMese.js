/*ULTIMO GIORNO DEL MESE */
const now = new Date();
//salvo anno e mese
const year = now.getFullYear();
const month = now.getMonth();
console.log(year, month);

const UltimoGiornoDelMeseObj = new Date(year, month + 1, 0);
//anno corrente, month + 1 così va avanti di un mese (es. ora è aprile + 1 è maggio), 0 così da 1 maggio torna indietro di un giorno e mi esce ultimo giorno di aprile
console.log(typeof UltimoGiornoDelMeseObj); //così è un oggetto. Per avere numero
const UltimoGiornoDelMese = UltimoGiornoDelMeseObj.getDate(); //estraggo il giorno
console.log(typeof UltimoGiornoDelMese); // così è un numero

//POSSO CICLARE
for (let i = 0; i < UltimoGiornoDelMese; i++) {
  console.log("ciao"); // escono 30 ciao
}

//POSSO ANCHE SAPERE ULTIMO GIORNO DEL MESE IN ANNI PASSATI O FUTURI
const noww = new Date();
//salvo anno e mese
const yearr = noww.getFullYear();
const monthh = noww.getMonth();
console.log(yearr, monthh);

const UltimoGiornoMeseFebbraio2024Obj = new Date(yearr + 1, monthh - 1, 0);
console.log(typeof UltimoGiornoMeseFebbraio2024Obj); //object
const UltimoGiornoMeseFebbraio2024 = UltimoGiornoMeseFebbraio2024Obj.getDate();
console.log(typeof UltimoGiornoMeseFebbraio2024); //number
