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



