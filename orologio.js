setInterval(() => {
  let clock = document.getElementById("clock");
  let giorno = document.getElementById("giorno");
  let mese = document.getElementById("mese");
  let anno = document.getElementById("anno");
  let giornoMese = document.getElementById("giornoMese");

  let now = new Date();
  let prendiOra = now.getHours();
  if (prendiOra < 12) {
    document.getElementById("ora").innerHTML = "AM";
  } else {
    document.getElementById("ora").innerHTML = "PM";
  }
  let prendiMinuti = now.getMinutes();
  if (prendiMinuti <= 9) {
    prendiMinuti = `0${prendiMinuti}`; //0 serve per 02 ,03,04.. o uscirebbe solo 2,3,4..
  }
  let prendiSecondi = now.getSeconds();
  if (prendiSecondi <= 9) {
    prendiSecondi = `0${prendiSecondi}`;
  }

  let prendiAnno = now.getFullYear();

  let prendiGiornoMese = now.getDate();
  giornoMese.innerHTML = prendiGiornoMese;

  let prendiMesi = now.getMonth(); //+1 perchè inizio a contare da 0 quindi es. aprile che è 4 uscirebbe 3
  let nomeMesi = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];
  mese.innerHTML = nomeMesi[prendiMesi];

  let prendiGiorno = now.getDay();
  let nomeGiorni = ["Dom", "Lun", "Mar", "Mer", "Giovedi", "Ven", "Sab", "Dom"];
  giorno.innerHTML = nomeGiorni[prendiGiorno];

  clock.innerHTML = `${prendiOra}:${prendiMinuti}:${prendiSecondi}`;

  anno.innerHTML = prendiAnno;
}, 1000);
