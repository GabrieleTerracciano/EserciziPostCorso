// Funzione per aggiornare il contatore
function aggiornaContatore() {
    // Recupera il tempo iniziale dal sessionStorage
    let startTime = sessionStorage.getItem('startTime');
    if (!startTime) {
        // Se non esiste, salva l'orario attuale come tempo iniziale
        startTime = new Date().getTime();
        sessionStorage.setItem('startTime', startTime);
    }

    // Calcola il tempo trascorso
    let currentTime = new Date().getTime();
    let elapsedTime = Math.floor((currentTime - startTime) / 1000); // Tempo trascorso in secondi

    // Aggiorna il contatore nel DOM
    document.getElementById('contatore').innerText = elapsedTime + ' secondi di sessione aperta';
}

// Esegui la funzione aggiornaContatore ogni secondo
setInterval(aggiornaContatore, 1000);

// Esegui subito la funzione aggiornaContatore all'avvio
aggiornaContatore();



//QUESTO è UN MODO DIVERSO PER FARLO, COL TERNARIO
//Attenzione, questo contatore riparte al caricamento della pagina, quindi se spammo  F5 rimane allo stesso numero, nell'esempio di prima no.
// Recupera il tempo trascorso dalla sessionStorage, se esiste, altrimenti inizia da 0
let timePassed = sessionStorage.getItem('count') ? parseInt(sessionStorage.getItem('count')) : 0;

// Funzione per aggiornare il contatore
const conta = () => {
    // Incrementa il tempo trascorso di 1 secondo
    timePassed++;
    // Aggiorna il contenuto dell'elemento con id 'timer' per mostrare il tempo trascorso
    document.getElementById('timer').innerText = timePassed + ' secondi di sessione aperta';
    // Salva il tempo trascorso nel sessionStorage
    sessionStorage.setItem('count', timePassed);
}

// Esegui la funzione conta ogni secondo
setInterval(conta, 1000);
