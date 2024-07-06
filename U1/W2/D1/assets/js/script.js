document.write('Testo scritto da javascript');//Operazione 8

document.getElementById('titolo').innerHTML = 'Hello World'//Operazione 2

//alert('Questo è un alert'); //Operazione 1

console.log('Verifica la variabile valore');//Operazione 3

let valore = 5;//Operazione 4
console.log(valore);//Operazione 5

valore = valore + 3;//Operazione 6
console.log(valore);//Operazione 7

let nome = 'Giulio';
let eta = 27;
let citta = 'Palermo';

document.getElementById('persona').innerHTML = nome + ', di anni ' + eta + ', abitante a ' + citta;

//let button = document.getElementById('Premi');

//button.addEventListener('click', function(){
//document.write('<h1>SCHERZETTO!!! :))</h1>');
//}); Questa cosa con write sovrascrive tutto il dom perché viene eseguita per ultima



//let nome = 'Gabriele';
//console.log(nome);


//nome = 'Franco'
//console.log(nome);

//let numero1 = 60;
//let numero2 = numero1;
//console.log(numero2 + numero1);


const numero = 46;//Una costante va per forza inizializzata
console.log(numero);
//const numero = 50; Questo darà un errore che impedisce il resto dello script

// BLOCCHI DI CODICE
//Si definiscono blocchi di codice tutto ciò che viene scritto tra parentesi graffe
// sono codici isolati dal resto dello script, se non richiamati
{
    let personaggio = 'Paolo';
    console.log(personaggio);
}
//console.log(personaggio);//Verrà generato un errore in console: la variabile utilizzata è una variabile di blocco


//Tipizzazione debole e dinamica
let cambio = 'Luca';
console.log(typeof (cambio));

cambio = 25
console.log(typeof (cambio));

cambio = false;
console.log(typeof (cambio));

//Comportamento sconsigliato perché in questo modo concatena
let numeroStrano = '45';
let numeroNormale = 60;
console.log(numeroNormale + numeroStrano);

//Questo darà null intenzionalmente, generalmente non si usa, si usa solo per intercettare gli errori

let infefinita = null;
console.log(infefinita);

//Operatori di assegnazione
//= è un operatore di assegnazione, non significa =
//+=, -=, *=, /= è un operatore che vuol dire l'operazione più uguale
let operatore1 = 6;
let operatore2 = 9;
console.log(operatore1);

operatore1 += operatore2;

console.log(operatore1);

//Per concatenare stringhe 
let stringa = "Ciao";
let stringa2 = " a tutti!";
stringa += " " + stringa;
console.log(stringa);
console.log(stringa + stringa2);
//Qui lo ripete 2 volte perché il valore di stringa è già diventato Ciao a tutti


//Operatori logici

//Questo vuol dire =.
//numero === numero2;
//Questo vuol dire <.
//numero < numero2;
//Questo vuol dire >.
//numero > numero2;
//Questo vuol dire and. Questo confronto viene true solo se tutte e due le condizioni sono true
//numero && numero2;
//Questo vuol dire or. Questo confronto viene true anche se solo una è verificata
//numero || numero2;
//Questo vuol dire not. Questo confronto viene true se la condizione non è verificata
//!(numero === numero2);
//console.log(!(operatore1 === operatore2));


//i due uguali == verificano l'uguaglianza di valore
//i tre uguali === verificano l'idenità, quindi sia il tipo sia il valore

let numeroNumero = 3;
let numeroStringa = '3';
console.log(numeroNumero == numeroStringa);
console.log(numeroNumero === numeroStringa);
//!== e !=== funzionano allo stesso modo

//Operatore ternario attraverso il quale si può attribuire ad una variabile un valore basato su una certa condizione

let anni = 15;

let risposta = (anni >= 18) ? "Si" : 'No';
document.getElementById('risposta').innerHTML = risposta;
//è la funzione se di excel, darà si o no in base a se è verificata o meno







