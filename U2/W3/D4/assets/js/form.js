const nome = document.getElementById('nome'); // Ottiene l'elemento HTML con ID 'nome'
const cognome = document.getElementById('cognome'); // Ottiene l'elemento HTML con ID 'cognome'
const btnSubmit = document.getElementById('submit'); // Ottiene l'elemento HTML con ID 'submit'
const form = document.getElementById('form'); // Ottiene l'elemento HTML con ID 'form'
const errore = document.getElementById('errore'); // Ottiene l'elemento HTML con ID 'errore'
const vuoto = document.getElementById('vuoto'); // Ottiene l'elemento HTML con ID 'vuoto'
const elenco = document.getElementById('elenco'); // Ottiene l'elemento HTML con ID 'elenco'

// Definisce l'URL dell'API per ottenere i dati
const dataURL = 'http://localhost:3000/elenco/';
// Inizializza una variabile `lista` come array vuoto
let lista = [];

// Aggiunge un listener per l'evento 'load' della finestra, che chiama la funzione `init` quando la pagina è completamente caricata
window.addEventListener('load', init);

// Funzione di inizializzazione chiamata al caricamento della pagina
function init() {
    // Chiama la funzione `readList` per ottenere e visualizzare i dati
    readList();
}

// Funzione asincrona per leggere i dati dalla URL specificata
async function readList() {
    try {
        // Esegue una richiesta GET all'URL `dataURL`
        let read = await fetch(dataURL);
        // Converte la risposta della richiesta in formato JSON
        let response = await read.json();
        // Assegna i dati ottenuti alla variabile `lista`
        lista = response;
        // Verifica se `lista` contiene elementi
        if (lista.length > 0) {
            // Se ci sono elementi, chiama la funzione `printData` per visualizzarli
            printData();
        } else {
            // Se `lista` è vuota, mostra un messaggio di errore
            vuoto.innerText = 'Nessun elemento presente';
            return; // Esce dalla funzione
        }
    } catch (error) {
        // Gestisce eventuali errori durante la richiesta
        console.log(error); // Stampa l'errore nella console
        location.href = '404.html'; // Reindirizza alla pagina di errore 404
    }
}

// Funzione per stampare i dati nella lista
const printData = () => {
    // Pulisce eventuali messaggi di errore precedenti
    vuoto.innerText = '';
    elenco.innerHTML = ''; // Pulisce l'elenco prima di aggiungere nuovi elementi

    // Itera su ogni elemento della lista
    lista.forEach((element) => {
        // Crea un nuovo elemento di lista
        let li = document.createElement('li');
        // Crea un nuovo pulsante di eliminazione
        let btnElimina = document.createElement('button');
        // Aggiunge le classi 'btn', 'btn-danger', 'nero', e 'ms-3' al pulsante
        btnElimina.classList.add('btn', 'btn-danger', 'nero', 'ms-3');
        // Imposta il testo del pulsante a 'X'
        btnElimina.innerText = 'X';
        // Imposta un attributo 'onClick' sul pulsante che chiama `deleteItem` con l'ID dell'elemento (come stringa) quando cliccato
        btnElimina.setAttribute('onClick', `deleteItem('${element.id}')`);
        // Imposta il testo dell'elemento di lista con il nome e cognome dell'elemento
        li.innerText = `${element.nome} ${element.cognome}`;
        // Aggiunge il pulsante di eliminazione all'elemento di lista
        li.appendChild(btnElimina);
        // Aggiunge l'elemento di lista al contenitore `elenco`
        elenco.appendChild(li);
    });
}

// Aggiunge un listener per l'evento 'click' sul pulsante `btnSubmit`
btnSubmit.addEventListener('click', function (e) {
    e.preventDefault(); // Previene il comportamento predefinito del pulsante (invio del form)
    if (checkValidity()) { // Controlla la validità dei dati inseriti prima di procedere
        errore.innerText = ''; // Se i dati sono validi, pulisce eventuali messaggi di errore precedenti
        addItem(); // Aggiunge l'elemento alla lista chiamando `addItem`
    } else {
        return; // Se i dati non sono validi, interrompe l'esecuzione
    }
});

const checkValidity = () => {
    let validity = true; // Inizializza la variabile `validity` come `true`
    // Verifica se i campi di input sono vuoti
    //trim serve per togliere gli spazi prima e dopo il testo, questo assicura che spazi bianchi non siano considerati come valori validi.
    if (nome.value.trim() === '' || cognome.value.trim() === '') {
        errore.innerText = 'Riempire correttamente tutti i campi'; // Mostra un errore se i campi sono vuoti
        return false; // Restituisce `false` se i campi sono vuoti
    }
    // Verifica se esiste già un utente con lo stesso nome e cognome
    lista.forEach((item) => {
        if (item.nome === nome.value.trim() && item.cognome === cognome.value.trim()) {
            errore.innerText = 'Utente già presente'; // Mostra un errore se il duplicato è trovato
            validity = false; // Imposta `validity` su `false` se trova un duplicato
        }
    });
    return validity; // Restituisce `true` se i campi non sono vuoti e non ci sono duplicati
};

// Funzione per aggiungere un nuovo elemento alla lista tramite una richiesta POST
const addItem = async () => {
    // Crea un oggetto `item` con i valori del nome e cognome
    let item = {
        nome: nome.value,
        cognome: cognome.value
    }
    try {
        // Invia una richiesta POST al server per aggiungere il nuovo elemento
        let response = await fetch(dataURL, {
            method: 'POST', // Specifica il metodo POST per inviare dati
            body: JSON.stringify(item), // Converte l'oggetto `item` in una stringa JSON
            headers: {
                'Content-Type': 'application/json' // Imposta l'intestazione della richiesta per indicare il tipo di contenuto JSON
            }
        });
        readList(); // Ricarica la lista per aggiornare la visualizzazione con il nuovo elemento
    } catch (error) {
        // Gestisce eventuali errori durante la richiesta POST
        console.log(error); // Stampa l'errore nella console
    }
}

// Funzione per eliminare un elemento dalla lista tramite una richiesta DELETE
const deleteItem = async (id) => {
    try {
        // Invia una richiesta DELETE al server per eliminare l'elemento con l'ID specificato
        let response = await fetch(dataURL + id, {
            method: 'DELETE'
        });
        readList(); // Ricarica la lista per aggiornare la visualizzazione dopo l'eliminazione
    } catch (error) {
        console.log(error); // Stampa l'errore nella console
    }
}
