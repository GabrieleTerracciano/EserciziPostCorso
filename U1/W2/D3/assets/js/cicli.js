//While Cicla un certo numero di valori(di solito numerici) fino a trovarlo e interrompere il ciclo.
//++ incrementa il valore di 1 ogni volta fino a trovare 10 e a fermarsi in questo caso

let contaWhile = 1;

while (contaWhile <= 10) {
    document.getElementById('while').innerHTML += '<li>Iterazione nr.' + contaWhile + '</li>';
    contaWhile++;
}

//Azzera di nuovo la variabile
contaWhile = 35;

//Do-While, si usa per le cose non pesanti e con basso rischio di blocco loop del ciclo e il blocco del browser
//Questo verifica la condizione almeno una volta, quindi un risultato predefinito lo ha (simile al default dello switch)
//Se la condizione non è verificata da subito il while non comincia il ciclo
do {
    document.getElementById('doWhile').innerHTML += '<li>Iterazione nr.' + contaWhile + '</li>';
    contaWhile++;
} while (contaWhile <= 10);

//Ciclo For
//let i è il nome della variabile(per convenzione si scrive i che si imposta di base = a 0)
//Poi si dice che la variabile in questo caso è minore o uguale a 10 e i++ è il valore di incremento che abbiamo già visto nel While

for (let i = 0; i <= 10; i++) {
    document.getElementById('for').innerHTML += '<li>Iterazione nr.' + i + '</li>';
};

const studenti = ['Fabio', 'Gennario', 'Claudia', 'Francesca', 'Luca', 'Giovanni', 'Gabriele'];

//Se io richiamo la funzione qui lo legge la prima volta
leggiArray();
function leggiArray() {
    document.getElementById('elenco').innerHTML = '';//Qui svuoto l'elenco altrimenti non aggiunge Francesco, vedi sotto
    for (let i = 0; i < studenti.length; i++) {
        document.getElementById('elenco').innerHTML += '<li>' + studenti[i] + '</li>';
    }
};
//Questo for cicla l'array studenti per la lua lunghezza (studenti.length)
//Poi stampo studenti[i], cioè il nome della sua variabile per convenzione i
studenti.push('Francesco');
/*for (let i = 0; i < studenti.length; i++) {
        document.getElementById('elenco').innerHTML += '<li>' + studenti[i] + '</li>';
    }*/
// Se faccio solo il ciclo come scritto sopra dopo non posso fare push tipo studenti.push('Francesco') perché è fuori dal ciclo, ma posso modificarlo a mio piacimento (tipo base dati)
leggiArray();//Se invece lo metto dentro una funzione e richiamo la funzione qui lo legge la seconda volta inserendo Francesco
//Il problema è che la stampa due volte, la prima senza Francesco e la seconda con.
//Bisogna svuotare l'elenco con document.getElementById('elenco').innerHTML = ''; prima di entrare nel ciclo for

//Unc altro caso, costruisco un array di oggetti e dopo faccio un for
const utenti = [
    {
        nome: 'Mario',
        cognome: 'Rossi',
        eta: 28,
        email: 'mario@rossi.it'
    },
    {
        nome: 'Fabio',
        cognome: 'Giordano',
        eta: 35,
        email: 'fabio@giordano.com'
    },
    {
        nome: 'Giovanni',
        cognome: 'Baglio',
        eta: 56,
        email: 'giovanni@baglio.it'
    },
    {
        nome: 'Sabrina',
        cognome: 'Crisafulli',
        eta: 25,
        email: 'sabrina@crisafulli.com'
    },
    {
        nome: 'Giancarlo',
        cognome: 'Pepe',
        eta: 78,
        email: 'giancarlo@pepe.com'
    }
];

//Questo è un ciclo che mi permette destrutturare gli oggetti dentro l'array per manipolarlo
//Ci saranno modi più veloci per farlo
for (let i = 0; i < utenti.length; i++) {
    document.getElementById('elencoOggetti').innerHTML += '<li>' + utenti[i].nome + ' ' + utenti[i].cognome + ', di anni '
        + utenti[i].eta + ', email: ' + utenti[i].email;
};

//Creazione di somma di elementi numerici

const numeri = [1, 8, 65, 23, 54, 12];

//Qui dichiaro la vaariabile di partenza a 0
let somma = 0;

/*for (let i = 0; i < numeri.length; i++) {
    somma += numeri[i];
};
Per un array con un numero elevato di elementi, il metodo più efficiente in termini di prestazioni è aggiornare l'elemento HTML fuori dal forEach.
document.getElementById('somma').innerText = somma;
innerText vuol dire contenuto testuale quindi dipenderà da dove è inserito nell'html

Questo è il forEach che vedremo più in la, la versione pro del for
numero è il nome che voglio dare ad ogni argomento del forEach
numeri.forEach(numero => {
    somma += numero;
});
document.getElementById('somma').innerHTML = somma;


Si può anche interrompere un ciclo
Facendo un if dentro gli diciamo, se la somma è superiore a 50 esci dall'if e break il ciclo for
e resituisci 'La somma dei numeri contenuti nell\'array è ' + somma; se la somma è minore di 50
altrimenti  'Il valore ' + somma + ' è superiore a 50';
*/

for (let i = 0; i < numeri.length; i++) {
	somma += numeri[i]; // somma = somma + numeri[i]
	document.getElementById('somma').innerText = 'La somma dei numeri contenuti nell\'array è ' + somma;
	if (somma >= 50) {
		document.getElementById('somma').innerText = 'Il valore ' + somma + ' è superiore a 50';
		break;
	}
};


