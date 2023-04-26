//CREARE 2 INPUT DI TIPO DATAPICKER E CALCOLARE LA DIFERENZA TRA DATA1 E DATA2 (DATA2 > DATA1 es.10 ottobre /20 ottobre)
const data1 = document.getElementById("data1");
const data2 = document.getElementById("data2");

function calcola() {
  //1) console.log(data1.value); //la data che esce qui è semplicemente una stringa che deriva da type="date". per far leggere al browser che è una data metto newDate()
  //console.log(new Date(data1.value));

  //2) per comparare 2 date devo convertirle in millisecondi. Uso getTime()
  //console.log(new Date(data1.value).getTime());
  //console.log(new Date(data2.value).getTime());

  //3) scrivo meglio
  const data1Mill = new Date(data1.value).getTime();
  const data2Mill = new Date(data2.value).getTime();

  console.log(data1Mill);
  console.log(data2Mill);

  console.log(data2Mill - data1Mill);

  //4) devo verificare che data2 è > data1
  if (data2Mill > data1Mill) {
    const differenza = data2Mill - data1Mill; // così differenza è in millisecondi. Io la voglio in giorni
    //divido differenza per i secondi in un giorno. Però adesso ho i millisecondi. Quindi faccio
    // /1000 per togliere i millisecondi e avere i secondi. Devo trovare un giorno in millisecondi quindi
    // 1000 * 60 secondi * 60 minuti * 24 ore (giorno è fatto da 60 secondi in un minuto, 60 minuti in un ora e 24 ore)
    // 60 * 60 * 24 --> secondi che devo moltiplicare per 1000 per avere i millisecondi
    console.log(differenza / (1000 * 60 * 60 * 24));
  }
}

//in un giorno
//60 s x 60 m x 24 h = 86400

//secondi in un minuto = 60
//secondi in un ora = 3600
//secondi in un giorno = 86400
//secondi in una settimana = 604800

//minuti in un ora = 60
//minuti in un giorno = 1440
//minuti in una settimana= 10080

//ore in un giorno = 24
//ore in una settimana= 168
//ore in un mese= 730 circa

//giorno in una settimana= 7
//giorno in un mese =30/31
//giorno in un anno = 365

//settimana in un mese= 4
//settimana in un anno=  52 circa

//mese in un anno =12
