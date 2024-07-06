//Dichiarazione e definizione di un array
const studenti = ['Franco', 'Aldo', 'Giovanni', 'Giacomo', 'GianFranco'];

//Un array può essere anche definito inizialmente vuoto, metodologia frequente quando l'array sarà popolato da una base dati
const nuovoArray = [];

console.log(studenti);

//Differenza con gli oggetti: per stampare un intero array in console non è necessaria la destrutturazione perché sono solo valori e non coppie chiave-valore come negli oggetti
document.getElementById('array').innerHTML = studenti;

//Si può anche destrutturare un array, si destruttura per indici
document.getElementById('valore1').innerHTML = studenti[0];
document.getElementById('valore2').innerHTML = studenti[1];
document.getElementById('valore3').innerHTML = studenti[2];
document.getElementById('valore4').innerHTML = studenti[3];
document.getElementById('valore5').innerHTML = studenti[4];
//Questa cosa non si fa nel lavoro perché non so nell'array quanti elementi ci sono
//Se punto un indice che non esiste da undefined

//Modifica e stampa di un array
studenti[1] = 'Tommaso';
studenti[3] = 'Andrea';

document.getElementById('valore1a').innerHTML = studenti[0];
document.getElementById('valore2a').innerHTML = studenti[1];
document.getElementById('valore3a').innerHTML = studenti[2];
document.getElementById('valore4a').innerHTML = studenti[3];
document.getElementById('valore5a').innerHTML = studenti[4];

//Il metodo sort ordina alfabeticamente la lista degli elementi di un array
//Prima mette i numeri e poi le stringhe
//Questo metodo MODIFICA l'array originario!!!
studenti.sort();

//Questo è un ciclo for che vedremo più in la, ti basti sapere che le stampe degli array si fanno con i cicli, tipo questo
//Non dovendo fare una destrutturazione profonda come l'oggetto, faccio un ciclo e stamperà tanti elementi quanti ne trova
for (let i = 0; i < studenti.length; i++) {
    document.getElementById('elenco1').innerHTML += '<li>' + studenti[i] + '</li>';
}

console.log(studenti);

//Logica condizionale if e else
const anniUtente = 16;
//Se l'utente ha meno di 18 anni non può entrare
if (anniUtente < 18) {
    console.log('Non può entrare')
}
//Altrimenti Può entrare
else {
    console.log('Può entrare')
}

const numero = 30;
//Se il numero è minore di 10 è piccolo, se tra 11 e 100 è medio, altrimenti è grande
if (numero < 10) {
    console.log('Piccolo')
} else if (numero < 100) {
    console.log('Medio')
} else {
    console.log('Grande')
}


votoEsame = 19;
nome = 'Nicola';

if (
    (nome === 'Mario' && votoEsame < 18) ||
    (nome !== 'Mario' && votoEsame >= 18)
) {
    document.getElementById('permesso').innerHTML = 'Non può entrare';
} else {
    document.getElementById('permesso').innerHTML = 'Entra';
}



