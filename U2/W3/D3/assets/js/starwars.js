const character = document.getElementById('character'); // Seleziona l'elemento con id 'character'
const wait = document.getElementById('wait'); // Seleziona l'elemento con id 'wait'
const show = document.getElementById('show'); // Seleziona l'elemento con id 'show'
let singleCharacter; // Dichiara una variabile per memorizzare il singolo personaggio
let list = []; // Dichiara un array vuoto per memorizzare la lista dei personaggi

window.addEventListener('load', init); // Aggiunge un listener per l'evento 'load' che chiama la funzione init

function init() {
    createList(); // Chiama la funzione createList per inizializzare la lista dei personaggi
}

async function createList() {
    await fetch('https://swapi.dev/api/people') // Effettua una richiesta HTTP GET asincrona all'URL specificato e attende la risposta
        .then(response => {
            return response.json(); // Estrae e restituisce il corpo della risposta come JSON
        })
        .then(data => {
            list = data; // Assegna i dati JSON alla variabile list
            selectAll(); // Chiama la funzione selectAll per popolare il menu a tendina con i personaggi
        })
        .catch(err => {
            console.log('Errore nel recupero dei dati: ', err); // Logga un messaggio di errore nella console
        });
}

function selectAll() {
    for (let i = 0; i < list.results.length; i++) { // Itera su ogni elemento nell'array list.results
        let option = document.createElement('option'); // Crea un nuovo elemento 'option'
        option.setAttribute('value', i); // Imposta l'attributo 'value' dell'elemento 'option'
        option.innerText = list.results[i].name; // Imposta il testo dell'elemento 'option' al nome del personaggio
        character.appendChild(option); // Aggiunge l'elemento 'option' al menu a tendina
    }
}

character.addEventListener('change', function () { // Aggiunge un listener per l'evento 'change' del menu a tendina
    let idCharacter = parseInt(character.value) + 1; // Calcola l'ID del personaggio selezionato

    return new Promise((resolve, reject) => { // Ritorna una nuova promessa
        wait.style.display = 'block'; // Mostra l'elemento 'wait'
        show.style.display = 'none'; // Nasconde l'elemento 'show'
        setTimeout(() => { // Imposta un timeout di 3 secondi
            caricaDettagli(idCharacter).then(() => { // Chiama la funzione caricaDettagli e attende la sua risoluzione
                if (singleCharacter && idCharacter) { // Verifica se singleCharacter e idCharacter sono definiti
                    resolve(stampa(singleCharacter)); // Risolve la promessa chiamando la funzione stampa con il personaggio
                } else {
                    wait.style.display = 'none'; // Nasconde l'elemento 'wait'
                    show.style.display = 'block'; // Mostra l'elemento 'show'
                    reject(
                        (show.innerHTML =
                            '<h3>Errore nel caricamento dei dati</h3>') // Rifiuta la promessa e mostra un messaggio di errore
                    );
                }
            });
        }, 3000);
    });
});

async function caricaDettagli(id) {
    let response = await fetch(`https://swapi.dev/api/people/${id}`).then(
        response => {
            return response.json(); // Estrae e restituisce il corpo della risposta come JSON
        }
    ).then(data => {
        singleCharacter = data; // Assegna i dati JSON alla variabile singleCharacter
        return singleCharacter; // Ritorna il personaggio singolo
    });
}

const stampa = character => {
    console.log(character); // Logga il personaggio nella console
    show.innerHTML = ''; // Pulisce il contenuto dell'elemento 'show'
    wait.style.display = 'none'; // Nasconde l'elemento 'wait'
    show.style.display = 'block'; // Mostra l'elemento 'show'
    let testo = document.createElement('h3'); // Crea un nuovo elemento 'h3'
    let nome = character.name; // Estrae il nome del personaggio
    testo.innerText = `Ecco il tuo personaggio: ${nome}`; // Imposta il testo dell'elemento 'h3' con il nome del personaggio
    show.appendChild(testo); // Aggiunge l'elemento 'h3' all'elemento 'show'
};
