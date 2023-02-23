//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.





const domChilometri = document.getElementById('km');
const domContenutoKm = domChilometri.value;
console.log(domContenutoKm);

const domEta = document.getElementById('eta').value;




//Chideo all'utente i chilometri che vuole percorrere
let chilometri = prompt('inserisci i chilometri che vuoi percorrere');
//Chiedo all'utente la sua eta
let eta = prompt('inserisci i tuo anni');
//Calcolo il prezzo di base
let prezzoBase = chilometri * 0.21;
//Calcolo i relattivi prezzi in base agli sconti del 20 per minori e del 40 per anziani

let prezzoAnziani;
let prezzoMinori;
if( eta < 18 ) {
   prezzoMinori = ( ( prezzoBase * 20 ) / 100);
   prezzoMinori = prezzoBase - prezzoMinori;
   prezzoMinori = prezzoMinori.toFixed(2);
   console.log(prezzoMinori);
   
} else if( eta > 65 ) {
   prezzoAnziani = ( ( prezzoBase * 40 ) / 100);
   prezzoAnziani = prezzoBase - prezzoAnziani;
   prezzoAnziani = prezzoAnziani.toFixed(2);
   console.log(prezzoAnziani);
}
 else if (eta > 18 || eta < 65) {
   console.log(prezzoBase);
}

else {
    console.log("Valore non accettato")
}

