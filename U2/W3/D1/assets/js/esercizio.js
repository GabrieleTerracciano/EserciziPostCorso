// Definizione della classe Ordini
class Ordini {
    // Costruttore della classe Ordini che accetta i parametri _categoria, _articolo e _prezzo
    constructor(_categoria, _articolo, _prezzo) {
        this.categoria = _categoria;  // Assegna il valore di _categoria alla proprietà categoria
        this.articolo = _articolo;    // Assegna il valore di _articolo alla proprietà articolo
        this.prezzo = _prezzo;        // Assegna il valore di _prezzo alla proprietà prezzo
    }
}

// Definizione della classe Mouse che estende la classe Ordini
class Mouse extends Ordini {
    // Costruttore della classe Mouse che accetta il parametro _sconto e i parametri della classe Ordini
    constructor(_sconto, ...Ordini) {
        super(...Ordini);  // Chiamata al costruttore della classe Ordini con i parametri passati
        this.sconto = _sconto;  // Assegna il valore di _sconto alla proprietà sconto
    }

    // Metodo calcolaPrezzo che calcola il prezzo scontato e aggiunge un costo fisso di 2
    calcolaPrezzo() {
        return this.prezzo - this.prezzo * (this.sconto / 100) + 2;
    }
}

// Definizione della classe Tastiera che estende la classe Ordini
class Tastiera extends Ordini {
    // Costruttore della classe Tastiera che accetta il parametro _sconto e i parametri della classe Ordini
    constructor(_sconto, ...Ordini) {
        super(...Ordini);  // Chiamata al costruttore della classe Ordini con i parametri passati
        this.sconto = _sconto;  // Assegna il valore di _sconto alla proprietà sconto
    }

    // Metodo calcolaPrezzo che calcola il prezzo scontato e aggiunge un costo fisso di 5
    calcolaPrezzo() {
        return this.prezzo - this.prezzo * (this.sconto / 100) + 5;
    }
}

// Definizione della classe Monitor che estende la classe Ordini
class Monitor extends Ordini {
    // Costruttore della classe Monitor che accetta il parametro _sconto e i parametri della classe Ordini
    constructor(_sconto, ...Ordini) {
        super(...Ordini);  // Chiamata al costruttore della classe Ordini con i parametri passati
        this.sconto = _sconto;  // Assegna il valore di _sconto alla proprietà sconto
    }

    // Metodo calcolaPrezzo che calcola il prezzo scontato e aggiunge un costo fisso di 15
    calcolaPrezzo() {
        return this.prezzo - this.prezzo * (this.sconto / 100) + 15;
    }
}

// Seleziona il bottone con id 'aggiungi'
const btnAggiungi = document.getElementById('aggiungi');
// Array per memorizzare gli ordini
const ordini = [];
let mioOrdine;  // Variabile per memorizzare l'ordine corrente

// Aggiunge un event listener al bottone per l'evento 'click'
btnAggiungi.addEventListener('click', e => {
    e.preventDefault();  // Previene il comportamento predefinito del bottone

    // Ottiene i valori dai campi del form
    let categoria = document.getElementById('categoria').value;
    let articolo = document.getElementById('articolo').value;
    let przUni = document.getElementById('prezzoUni').value;
    let sconto = document.getElementById('sconto').value;

    // Switch case per creare un nuovo ordine in base alla categoria selezionata
    switch (categoria) {
        case 'mouse':
            mioOrdine = new Mouse(sconto, categoria, articolo, przUni);  // Crea un nuovo oggetto Mouse
            mioOrdine.przFinale = mioOrdine.calcolaPrezzo();  // Calcola il prezzo finale e lo assegna alla proprietà przFinale
            ordini.push(mioOrdine);  // Aggiunge l'ordine all'array ordini
            break;

        case 'tastiere':
            mioOrdine = new Tastiera(sconto, categoria, articolo, przUni);  // Crea un nuovo oggetto Tastiera
            mioOrdine.przFinale = mioOrdine.calcolaPrezzo();  // Calcola il prezzo finale e lo assegna alla proprietà przFinale
            ordini.push(mioOrdine);  // Aggiunge l'ordine all'array ordini
            break;

        case 'monitor':
            mioOrdine = new Monitor(sconto, categoria, articolo, przUni);  // Crea un nuovo oggetto Monitor
            mioOrdine.przFinale = mioOrdine.calcolaPrezzo();  // Calcola il prezzo finale e lo assegna alla proprietà przFinale
            ordini.push(mioOrdine);  // Aggiunge l'ordine all'array ordini
            break;
    }

    // Log degli ordini per il debug
    console.log(ordini);

    // Chiama la funzione per stampare gli ordini
    stampaOrdini();
});

// Funzione per stampare gli ordini nella tabella
const stampaOrdini = () => {
    let ordine = document.getElementById('ordine');  // Seleziona il corpo della tabella con id 'ordine'
    ordine.innerHTML = '';  // Svuota il contenuto della tabella
    // Itera su ogni ordine nell'array ordini
    ordini.forEach(dettaglio => {
        // Crea le colonne della tabella
        let colonna1 = document.createElement('td');
        colonna1.innerText = `${dettaglio.categoria}`;
        let colonna2 = document.createElement('td');
        colonna2.innerText = `${dettaglio.articolo}`;
        let colonna3 = document.createElement('td');
        colonna3.innerText = `${dettaglio.prezzo}`;
        let colonna4 = document.createElement('td');
        colonna4.innerText = `${dettaglio.sconto}`;
        let colonna5 = document.createElement('td');
        colonna5.innerText = `${dettaglio.przFinale}`;
        // Crea una riga e aggiunge le colonne create
        let riga = document.createElement('tr');
        riga.append(colonna1, colonna2, colonna3, colonna4, colonna5);
        ordine.appendChild(riga);  // Aggiunge la riga alla tabella
    });
};
