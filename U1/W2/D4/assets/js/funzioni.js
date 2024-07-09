let num1 = 8;
let num2 = 9;

function somma(num1, num2) {
    if (num1 < num2) {  //Se num1 è maggiore di num2 dentro l'if non ci entra e passa oltre
        document.getElementById('esempio1').innerHTML = 'La funzione restituisce un numero negativo'
        return;  //Se il numero è negativo si ferma qui
    }
    document.getElementById('esempio1').innerHTML = 'Il risultato della funzione è ' + (num1 - num2);
};
somma(num1, num2);//restituisce 'La funzione restituisce un numero negativo' se è negativo e 'Il risultato della funzione è ' + (num1 - num2); se è positivo


// let numero3 = 10;
// let numero4 = 7;

// function somma(num3, num4) {//funzione che prende come parametro i due numeri e li somma
//     return num3 + num4;//questo  ferma la funzione sull'addizione di num3 e num4
// }

// function aggiungi(num3) {//aggiungi è il numero 12 scritto sotto
//     document.getElementById('esempio2').innerText = num3 + somma(numero3, numero4);//qui stampa nell'id html num3 e poi si ferma e chiama la funzione somma la somma di numero3, numero4
// }
// aggiungi(12);// Il risultato sarà 29 perché 12 + la somma dei 2 sarà che è 17

let num3 = 10;
let num4 = 7;

function somma(num3, num4) {
    return num3 + num4;
}

function aggiungi(num3) {
    document.getElementById('esempio2').innerText = num3 + somma(num3, num4);
}

aggiungi(12);

// document.addEventListener('load', init());  load carica il documente, la funzione init poi decide l'ordine di esecuzione
// function init(){
//     aggiungi(12);
// }
//Questo serve per l'hoisting e quindi il sollevamento delle funzioni o delle variabili se dichiarate con var
//Serve per  chiamare una funzione o una variabile prima che venga scritta

let nome = 'Carlo'

function scrivi() {
    console.log(nome);
    let altroNome = 'Roberto';
}
scrivi();
//console.log(altroNome); Questo console log dice undefined perché la variabile altronome è locale nella funzione scrivi, se chiamo altro nome prima della funzione scrivi si blocca


//Global scope è una variabile globare, let e const
//Local scope è locale all'interno della funzione, let e const
//Let e const hanno anche il Block scope quindi le variabili dichiarate dentro a un blocco sono riferite solo a quel blocco

let numero5 = 10;

if (numero5 > 5) {//Il numero è maggiore di 5 quindi entra nel blocco if
    let nome1 = 'Gerardo';
    console.log(nome1)//Stampa il nome Gerardo
}
//console.log(nome);//Questo non stampa nulla perché il nome è all'interno nel blocco
//Con var il pericolo è proprio quello, ha il Function scope quindi cambierebbe il nome globalmen se dichiarato nuovamente all'interno di un blocco

//Funzione freccia =>

let numero6 = 5
let numero7 = 7
moltiplicazione = (numero6, numero7) => {
    document.getElementById('esempio3').innerHTML = numero6 * numero7;
}
moltiplicazione(numero6, numero7);

//indexOf si usa poco e ci permette di trovare la prima posizione di una stringa 
//lastIndexOf si usa poco e ci permette di trovare l'ultima posizione di una stringa 

const saluto = 'Ciao studenti, saluto tuti gli studenti';
const posizione = saluto.indexOf('studenti');
const posizione1 = saluto.lastIndexOf('studenti');
console.log(posizione);//Tornerà la posizione 5
console.log(posizione1);//Tornerà la posizione 31

//Se metto un secondo paramentro indica la posizione di partenza ad esempio dal quale deve cercare
const posizione3 = saluto.indexOf('studenti', 10);//in questo caso troverà solo la prima lettera del secondo studenti
const posizione4 = saluto.lastIndexOf('studenti', 10);//in questo caso troverà solo la l'ultima lettera del secondo studenti

//Il metodo .search accetta solo un paramentro ma accetta le ricerche con espressioni regolari quindi ha una capicità di ricerca più dettagliata.
// Il metodo .slice accetta due parametri, quello di inizio e quello di fine e il metodo .substring allo stesso modo ma solo per le stringhe e non accetta numeri negativi
const slice = saluto.slice(7, 12);
const slice1 = saluto.slice(-7, 15);//così inizierà a cercare dalla fine a ritroso
//Lo slice si usa anche nei metodi degli Array


//Esempio codice fiscale con indexof e substring


// Definizione delle variabili con i dati da controllare
let codFis = 'DLGDRA67R20F839V';  // Codice fiscale da controllare
let mioGiorno = '20';             // Giorno di nascita da confrontare
let annoForm = '1967';            // Anno di nascita formattato
let mioAnno = annoForm.slice(2);  // Estrapola gli ultimi due caratteri dell'anno
let genere = 'M';                 // Genere (M = maschio, F = femmina)

// Trova la posizione del giorno di nascita nel codice fiscale, inizia la ricerca dalla posizione 7
const posGiorno = codFis.indexOf(mioGiorno, 7);

// Trova la posizione dell'anno di nascita nel codice fiscale
const posAnno = codFis.indexOf(mioAnno);

// Estrapola il giorno dal codice fiscale, prendendo i due caratteri successivi alla posizione trovata
const giorno = codFis.slice(posGiorno, posGiorno + 2);

// Se il genere è femmina ('F'), sottrae 40 al giorno (codifica per i giorni delle donne)
if (genere === 'F') {
    giorno = giorno - 40;
}//Se il genere è femmina ('F'), sottrae 40 al valore del giorno estratto.
//Questo è un meccanismo di codifica nel codice fiscale italiano per rappresentare i giorni di nascita delle donne.

// Estrapola l'anno dal codice fiscale, prendendo i due caratteri successivi alla posizione trovata
const anno = codFis.slice(posAnno, posAnno + 2);

// Stampa il giorno e confronta giorno e anno con i valori forniti
console.log(giorno);
if (giorno === mioGiorno && anno === mioAnno) {
    console.log('Codice fiscale corretto');
} else {
    console.log('Codice fiscale non corretto');
}
