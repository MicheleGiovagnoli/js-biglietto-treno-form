//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//BIGLIETTO
const bigliettoTreno = document.getElementById('biglietto');
bigliettoTreno.classList.add('d-none');

//bottone GENERA
const domButton = document.getElementById('btn');                    //punto al bottone
domButton.addEventListener('click',                                  //creo una condizione di ascolto nella quale inserisco le mie funzioni 
    function(){
        //BIGLIETTO
        const bigliettoTrenoOn = document.getElementById('biglietto');
        bigliettoTrenoOn.classList.add('d-flex');

        //NOME E COGNOME
        const domDati = document.getElementById('dati');
        const domNomeCognome = domDati.value;
        document.getElementById('nome').innerHTML = `${domNomeCognome}`;
        console.log(domNomeCognome);

        //CHILOMETRI
        const domChilometri = document.getElementById('km');         //Punto all'imput nell'html
        const domKm = domChilometri.value;                           //con value ne estraggo il valore e lo metto in domKm
        console.log(domKm);

        //ETA
        const selezioneEta = document.getElementById('selezioneEta');//punto all'imput
        const eta = selezioneEta.value;                              // e avendo dato un valore numerico nell'html lo estraggo e lo metto in eta
        console.log(eta);

        //CARROZZA
        const numeroCasuale = Math.floor((Math.random() * 10));
        document.getElementById('carrozza').innerHTML = `${numeroCasuale}`;

        //CODICE CP
        const numeroCasualeGrande = Math.floor((Math.random() * 99999) );
        document.getElementById('codice').innerHTML = `${numeroCasualeGrande}`;

        //Calcolo il prezzo di base
        const prezzoBase = domKm * 0.21;

        //Calcolo i relattivi prezzi in base agli sconti del 20 per minori e del 40 per anziani
        let prezzoAnziani;
        let prezzoMinori;

        if( eta < 18 ) {
            prezzoMinori = ( ( prezzoBase * 20 ) / 100);
             prezzoMinori = prezzoBase - prezzoMinori;
              prezzoMinori = prezzoMinori.toFixed(2);
               const domOfferta = 'Biglietto Standard';
                document.getElementById('offerta').innerHTML = `Sconto del 20%`;
                document.getElementById('costo').innerHTML = `${prezzoMinori}€`;
                 console.log(prezzoMinori);
        
        } else if( eta > 65 ) {
            prezzoAnziani = ( ( prezzoBase * 40 ) / 100);
             prezzoAnziani = prezzoBase - prezzoAnziani;
              prezzoAnziani = prezzoAnziani.toFixed(2);
               const domOfferta = 'Biglietto Standard';
                document.getElementById('offerta').innerHTML = `Sconto del 40% `;
                document.getElementById('costo').innerHTML = `${prezzoAnziani}€`;
                 console.log(prezzoAnziani);
        }
        else if (eta > 18 || eta < 65) {
            const domOfferta = 'Biglietto Standard';
             document.getElementById('offerta').innerHTML = `Biglietto Standard`;
             document.getElementById('costo').innerHTML = `${prezzoBase}€`;
              console.log(prezzoBase);
        }

        else {
            console.log("Valore non accettato")
        } 
    }
);

//bottone di reset
const domButtonReset = document.getElementById('btn-annulla');

domButtonReset.addEventListener('click',
    function(){
        const bigliettoTreno = document.getElementById('biglietto');
        bigliettoTreno.classList.remove('d-flex');
    }
);



