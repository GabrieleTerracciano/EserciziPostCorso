//Lo spread operator e il rest parameter si scrivono allo stesso modo
const persona = {
    nome: 'Mario',
    cognome: 'Bianchi',
    eta: 25
};

const persona2 = {
    ...persona//questo è lo spread operator e farà un clone di persona
}

persona2.nome = 'Aldo';//Questo cambierà la proprietà nome di persona2 da Mario a Aldo

console.log(persona);
console.log(persona2);



// Definisce una funzione chiamata "somma" che accetta un numero variabile di argomenti
function somma(...numeri) {
    // Utilizza il metodo reduce per sommare tutti gli elementi dell'array "numeri"
    // Il metodo reduce itera su ogni elemento dell'array, accumulando i valori
    // "accum" è l'accumulatore che mantiene il totale della somma fino a quel punto
    // "elem" è l'elemento corrente dell'array che viene aggiunto all'accumulatore
    // 0 è il valore iniziale dell'accumulatore
    return numeri.reduce((accum, elem) => accum + elem, 0);
    //Se tolgo lo 0 non somma ma concatena
}

// Chiama la funzione "somma" con gli argomenti 1, 2, 3, 4 e 5
// Il risultato dovrebbe essere 15
console.log(somma(1, 2, 3, 4, 5));

// Chiama la funzione "somma" con gli argomenti 24, 36 e 67
// Il risultato dovrebbe essere 127
console.log(somma(24, 36, 67));

console.log(somma('Mario ', 'Rossi ', 7));// Per concatenare questo bisogna togliere lo 0 nel metodo reduce


// Definizione dell'oggetto persona3 con le proprietà nome, cognome ed eta
const persona3 = {
    nome: 'Carlo',
    cognome: 'Bianchi',
    eta: 25
}

// Destrutturazione dell'oggetto persona3 per ottenere le variabili nome, cognome ed eta
const { nome, cognome, eta } = persona3;

// Impostazione del testo dell'elemento HTML con id 'spread' usando template literals
document.getElementById('spread').innerText = `${nome} ${cognome} ${eta}`;

// Impostazione del testo dell'elemento HTML con id 'spread2' concatenando le proprietà dell'oggetto persona3
document.getElementById('spread2').innerText = persona3.nome + ' ' + persona3.cognome + ' ' + persona3.eta;


// Con gli array non si usa molto ma con gli oggetti si
// Definizione dell'array mioArray contenente tre numeri di telefono
const mioArray = [34123442344, 42525252523, 3456454252];

// Destrutturazione dell'array mioArray per ottenere le variabili telefono1, telefono2 e telefono3
const [Mario, Aldo, Nicola] = mioArray;

// Impostazione del testo dell'elemento HTML con id 'spread3' utilizzando template literals
// per mostrare i tre numeri di telefono ottenuti dalla destrutturazione dell'array
document.getElementById('spread3').innerText = `Telefono Mario: ${Mario}, Telefono Aldo: ${Aldo}, Telefono Nicola: ${Nicola}`;

const lorem = `«Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
 quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,
  quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt,
   neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt,
    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
     nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate`
//Con il backtick si può andare da capo
document.getElementById('spread4').innerText = lorem;


//l'interpolazione di stringhe serve per lo più a inserire in un flusso di testo una variabile con ${} con il nome della variabile nelle graffe

//Metodi nuovi stringhe
//string.startsWith(), string.endsWith()
//Restituiscono un booleano
const stringa = 'Sto imparanto Javascript'

stringa.startsWith('Javascript'); //False

stringa.endsWith('Javascript');//True

//Il più usato è includes che anche lui restituisce un boolean

stringa.includes('Javascript');//True


// Definizione della variabile indirizzo con il valore 'Via Roma 20'
let indirizzo = 'Corso Roma 20';

// Il metodo toLowerCase() viene utilizzato per convertire la stringa indirizzo in minuscolo
// Il metodo includes() verifica se la stringa contiene uno dei termini specificati
// Tuttavia, includes() accetta solo un argomento alla volta, quindi il codice corrente controllerà solo 'via'
let valido = indirizzo.toLowerCase().includes('via', 'piazza', 'corso', 'strada', 'traversa', 'vicolo');

console.log(valido);

// NOTA: Il metodo includes() accetta solo un argomento, quindi il codice sopra non funzionerà come previsto.
// Per verificare correttamente se la stringa contiene uno dei termini specificati, sarebbe necessario un approccio diverso.

// Definizione di un array contenente i termini da cercare nella stringa indirizzo
let termini = ['via', 'piazza', 'corso', 'strada', 'traversa', 'vicolo'];

// Utilizzo del metodo some() sull'array termini
// Il metodo some() verifica se almeno uno degli elementi dell'array soddisfa la condizione fornita dalla funzione callback
let validoCorretto = termini.some(termine => indirizzo.toLowerCase().includes(termine));
// La funzione callback passa attraverso ciascun termine nell'array
// e controlla se la stringa indirizzo (convertita in minuscolo) include il termine corrente
console.log(validoCorretto);

//Recap array prima dei metodi
//Gli indici degli array non fanno salti, se in un array si elimina un valore, tutti gli altri scaleranno di 1
//Il metodo sort() ordina alfabeticamente i valori degli array, reverse() in al contrario.
//Alcuni metodi degli array restituiscono i valori che manipolano tipo pop
//Metodo pop() elimina l'ultimo elemento ma l'elemento non è perso se lo scrivo in una variabile
//Il metodo shift() elimina il primo elemento

const arrayNomi = ['Mario', 'Aldo', 'Nicola', 'Anna', 'Maria'];

document.getElementById('array1').innerText = arrayNomi;

let eliminato = arrayNomi.pop();

document.getElementById('eliminato').innerText = `Elemento eliminato: ${eliminato}`;

document.getElementById('array2').innerText = `Nuovo array: ${arrayNomi}`;

//Il metodo push aggiunge elementi in coda all'array
//Il metodo unshift() aggiunge all'inizio

arrayNomi.push('Marco', 'Sabrina', 'Massimiliano');
document.getElementById('array3').innerText = `Nuovo array: ${arrayNomi}`;

/*Negli array se io inserisco un elemento nuovo ad esempio alla posizione 10
Riempirà le altre posizioni senza un valore
mioArray[10] = 'Francesco';



Il metodo splice ci fa modificare aggioungendo, rimuovendo o sostituendo
Accetta 1 o più parametri ma in un ordine preciso
Il primo paramentro rappresenta l'indice dal quale partire COMPRESO
Il secondo parametro rappresenta quanti valori eliminare
Dopo i parametri successivi che scriviamo sono quelli da aggiungere a partire dall'ultimo valore eliminato
Volendo restituisce i valori che elimina
nuovoArray = array.splice(2, 2); nuovoArray restituirà i valori eliminati
Se scrivo solo array.splice(2, 2); li elimina e basta, senza restituirli
Si può conservare ad esempio per un carrello, per tornare indietro e reinsere l'elemento
nuovoArray = array.splice(2, 2, 'Luca');
Questo aggiunge un elemento Luca dopo aver eliminato i due elementi
*/


// Utilizzo del metodo splice() sull'array arrayNomi per rimuovere 2 elementi a partire dall'indice 2
// Il metodo splice() restituisce un nuovo array contenente gli elementi rimossi
let nuovoArrayNomi = arrayNomi.splice(2, 2);

// Impostazione del testo dell'elemento HTML con id 'array4' per mostrare il contenuto dell'array arrayNomi dopo la rimozione degli elementi
document.getElementById('array4').innerText = `Nuovo array: ${arrayNomi}`;

// Impostazione del testo dell'elemento HTML con id 'arraySplice1' per mostrare il nuovo array generato dal metodo splice
document.getElementById('arraySplice1').innerText = `Array generato da splice: ${nuovoArrayNomi}`;

// Utilizzo del metodo splice() sull'array arrayNomi per rimuovere 1 elemento a partire dall'indice 2 e aggiungere due nuovi elementi 'Matteo' e 'Lucian'
// Il metodo splice() restituisce un nuovo array contenente l'elemento rimosso
let nuovoArrayNomi2 = arrayNomi.splice(2, 1, 'Matteo', 'Lucian');

// Impostazione del testo dell'elemento HTML con id 'array5' per mostrare il contenuto dell'array arrayNomi dopo la rimozione e l'aggiunta degli elementi
document.getElementById('array5').innerText = `Nuovo array: ${arrayNomi}`;

// Impostazione del testo dell'elemento HTML con id 'arraySplice2' per mostrare il nuovo array generato dal metodo splice
document.getElementById('arraySplice2').innerText = `Array generato da splice: ${nuovoArrayNomi2}`;

// Utilizzo del metodo splice() sull'array arrayNomi per rimuovere 2 elementi a partire dall'indice 4
// In questo caso, non vengono aggiunti nuovi elementi
arrayNomi.splice(4, 2);
//Qui non generiamo nessun nuovo array quindi perdiamo quei dati

// Impostazione del testo dell'elemento HTML con id 'array6' per mostrare il contenuto dell'array arrayNomi dopo l'ultima rimozione degli elementi
document.getElementById('array6').innerText = `Nuovo array: ${arrayNomi}`;

//concat() concatetena due array, questo metodo non modifica nulla e non restituisce nulla
//const unito = array1.concat(array2)
//const unito = array1.concat(array2,array3) ecc

//Lo slice non modifica l'array originario
//Lo slice accetta almeno un parametro, se solo uno estrae da quel punto fino alla fine
// Utilizzo del metodo slice() sull'array arrayNomi per ottenere una porzione dell'array originale
// La porzione inizia dall'indice 2 e termina ESCLUSO all'indice 5
// Il metodo slice() restituisce un nuovo array contenente gli elementi dall'indice 2 all'indice 4
let fettaArray = arrayNomi.slice(2, 5);

// Impostazione del testo dell'elemento HTML con id 'array9' per mostrare il contenuto dell'array arrayNomi originale
document.getElementById('array7').innerText = `Array originario: ${arrayNomi}`;

// Impostazione del testo dell'elemento HTML con id 'arraySlice' per mostrare il nuovo array generato dal metodo slice
document.getElementById('arraySlice').innerText = `Array generato da slice: ${fettaArray}`;

//Metodi di iterazione degli array

//IMPORTANTE le funzioni forEach e map possono avere 3 parametri
//element, l'elemento corrente
//index, l'indice dell'elemento corrente
//array

//Le iterazioni sui cicli si fanno con forEach e map
//foEeach esegue un gruppo di istruzioni per ogni elemento degli array e quindi modifica l'array, di solito si usa con funzioni operative
//cioè quelle che stampano qualcosa
//map crea un nuovo array a partire da quello che faccio all'interno del metodo, di solito si usa per delle funzioni funzionali
//cioè quelle che eseguono e restituiscono qualcosa

//forEach
const arrayNumeri = [1, 2, 3, 4, 5];
const listaNumeri = document.getElementById('listaNumeri')
const nuovoArrayNumeri = arrayNumeri.forEach((element) => {//Il nuovo array non verrà generato perché forEach esegue istruzioni ma non genera un nuovo Array.In questo caso darà undefinded
    // arrayNumeri.forEach((element) => {   Questa è la sintassi corretta
    nuovoNumero = element + 10;
    let newLi = document.createElement('li');
    newLi.innerText = nuovoNumero;
    listaNumeri.appendChild(newLi);
});

//for (let i = 0; i < arrayNumeri.length; i++) {
//    nuovoNumero = element + 10;
//    let newLi = document.createElement('li');
//    newLi.innerText = nuovoNumero;
//    listaNumeri.appendChild(newLi);
// }



// Recupera l'elemento HTML con l'id 'array8' e imposta il suo testo al valore dell'array originale 'arrayNumeri'
document.getElementById('array8').innerText = `Array originario: ${nuovoArrayNumeri}`;


//
const arrayNumeri2 = [1, 2, 3, 4, 5];
const listaNumeri2 = document.getElementById('listaNumeri2')
arrayNumeri.map((element) => {
    nuovoNumero = element + 10;
    let newLi = document.createElement('li');
    newLi.innerText = nuovoNumero;
    listaNumeri2.appendChild(newLi);
});

const nuovoArrayNumeri2 = arrayNumeri2.map((element) => {// Il nuovo array verrà generato perché map genera un nuovo array
    return element = element + 10;
})


document.getElementById('array9').innerText = `Array originario: ${arrayNumeri2}`;
document.getElementById('array10').innerText = `Nuovo array generato da map: ${nuovoArrayNumeri2}`;

//Il metodo filter() crea un nuovo array filtrando gli elementi dell'array di partenza secondo un determinato criterio.

const arrayPrezzi = [12, 25, 57, 42, 31, 68];
const arrayIndici = [];

const speseSpedizione = arrayPrezzi.filter((element, index) => {
    if (element < 40) {
        arrayIndici.push(index);
    }
    return element < 40;
});

const carrello = arrayPrezzi.map((element, index) => {
    for (let i = 0; i < arrayIndici.length; i++) {
        if (index === arrayIndici[i]) {
            element = speseSpedizione[i] + 10;
        }
    }
    return element;
})

console.log(speseSpedizione);
console.log(arrayIndici);
console.log(carrello);


// Definisce un array di prezzi chiamato 'arrayPrezzi' con i valori [12, 25, 57, 42, 31, 68]
const arrayPrezzi1 = [12, 25, 57, 42, 31, 68];
// Definisce un array vuoto chiamato 'arrayIndici'
const arrayIndici1 = [];
// Filtra gli elementi di 'arrayPrezzi' che sono inferiori a 40 e li assegna a 'speseSpedizione'
// Durante il filtraggio, memorizza gli indici degli elementi filtrati in 'arrayIndici'
const speseSpedizione1 = arrayPrezzi1.filter((element, index) => {
    // Se l'elemento è inferiore a 40, aggiunge il suo indice a 'arrayIndici'
    if (element < 40) {
        arrayIndici1.push(index);
    }
    // Restituisce true se l'elemento è inferiore a 40 (incluso nel nuovo array 'speseSpedizione')
    return element < 40;
});
// Crea un nuovo array 'carrello' mappando ogni elemento di 'arrayPrezzi'
const carrello1 = arrayPrezzi1.map((element, index) => {
    // Itera attraverso gli indici memorizzati in 'arrayIndici'
    for (let i = 0; i < arrayIndici1.length; i++) {
        // Se l'indice corrente corrisponde a uno degli indici in 'arrayIndici'
        if (index === arrayIndici1[i]) {
            // Aggiunge 10 all'elemento corrispondente in 'speseSpedizione'
            element = speseSpedizione1[i] + 10;
        }
    }
    // Restituisce l'elemento (modificato o meno) per l'inclusione nel nuovo array 'carrello'
    return element;
})

console.log(speseSpedizione1);
console.log(arrayIndici1);
console.log(carrello1);

document.getElementById('array11').innerText = `Prezzi netti: ${arrayPrezzi1}`
document.getElementById('array12').innerText = `Prezzi da maggiorare: ${speseSpedizione1}`
document.getElementById('array13').innerText = `Carrello finale: ${carrello1}`
