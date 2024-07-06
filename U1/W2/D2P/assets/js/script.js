/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const numero1 = 16;
const numero2 = 20;

if (numero1 > numero2) {
  document.getElementById('maggiore').innerHTML = numero1 + ' è maggiore di ' + numero2;
} else {
  document.getElementById('maggiore').innerHTML = numero1 + ' è minore di ' + numero2;
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const numero3 = 13

if (numero3 !== 5) {
  console.log('notEqual');
  document.getElementById('notEqual').innerHTML = "not equal";
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
//L'operatore modulo in JavaScript è rappresentato dal simbolo % e viene utilizzato per calcolare il resto della divisione tra due numeri

const numeroDivisibile = 42;

if (numeroDivisibile % 5 === 0) {
  console.log('divisibile');
  document.getElementById('divisibile').innerHTML = "divisibile";
} else {
  console.log('non è divisibile');
  document.getElementById('divisibile').innerHTML = " non è divisibile";
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const numero4 = 18
const numero5 = 10

if ((numero4 === 8 || numero5 === 8) || (numero4 + numero5 === 8) || (numero4 - numero5 === 8)) {
  console.log('Valore Accettato');
  document.getElementById('valore').innerHTML = "Valore Accettato";
} else {
  console.log('Valore Non Accettato');
  document.getElementById('valore').innerHTML = "Valore Non Accettato";
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCard = 64;

/*if (totalShoppingCard >= 50) {
  console.log('Spedizione gratuita');
  document.getElementById('carrello').innerHTML = totalShoppingCard;
} else {
  console.log('10 euro di spedizione');
  document.getElementById('carrello').innerHTML = totalShoppingCard + 10;
}*/


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

if (totalShoppingCard * 0.80 >= 50) {
  console.log('Spedizione gratuita');
  document.getElementById('carrello').innerHTML = totalShoppingCard + " Con Spedizione gratuita";
} else {
  console.log('10 euro di spedizione');
  document.getElementById('carrello').innerHTML = totalShoppingCard + 10;
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const numero6 = 93;
const numero7 = 26;
const numero8 = 123;

let numeri = [numero6, numero7, numero8];



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const valore1 = 7;
const valore2 = 'valoreNumerico';
const valore3 = '7';

console.log(typeof valore1);
console.log(typeof valore2);
console.log(typeof valore3);

document.getElementById('valoreNumerico1').innerHTML = typeof valore1;
document.getElementById('valoreNumerico2').innerHTML = typeof valore2;
document.getElementById('valoreNumerico3').innerHTML = typeof valore3;


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const numero9 = 12;
const numero10 = 7;

console.log(numero9 % 2 === 0);
console.log(numero10 % 2 === 0);

document.getElementById('pariDispari').innerHTML = (numero9 % 2 === 0) + ' Quindi pari';
document.getElementById('pariDispari2').innerHTML = (numero10 % 2 === 0) + ' Quindi dispari';

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 4
if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Meno di 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let nuovoArray = [];

nuovoArray[0] = 1;
nuovoArray[1] = 2;
nuovoArray[2] = 3;
nuovoArray[3] = 4;
nuovoArray[4] = 5;
nuovoArray[5] = 6;
nuovoArray[6] = 7;
nuovoArray[7] = 8;
nuovoArray[8] = 9;
nuovoArray[9] = 10;

console.log(nuovoArray);

//Altrimenti nuovoArray.push(1,2,3,4,5,6,7,8,9,10) e liu metterà da solo in ordine se è vuoto

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

nuovoArray.splice(9, 1, 100);
console.log(nuovoArray);
//Altrimenti nuovoArray[9] = 100; più semplicemente
