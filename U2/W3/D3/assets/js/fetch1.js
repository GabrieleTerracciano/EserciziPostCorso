let elenco = []; // 1. Inizializza un array vuoto chiamato elenco

const readData = async () => { // 2. Definisce una funzione asincrona chiamata readData utilizzando la sintassi delle funzioni freccia
    const response = await fetch('https://jsonplaceholder.typicode.com/users') // 3. Effettua una richiesta HTTP GET asincrona all'URL specificato e attende la risposta
        .then((response) => { // 4. Quando la richiesta è completata, esegue questa funzione con la risposta come parametro
            return response.json(); // 5. Estrae e restituisce il corpo della risposta come JSON
        })
        .then((data) => { // 6. Quando il JSON è stato estratto, esegue questa funzione con i dati JSON come parametro
            elenco = data; // 7. Assegna i dati JSON a una variabile chiamata elenco
            console.log(elenco); // 8. Logga il contenuto di elenco (i dati JSON) nella console
            stampa(); // 9. Chiama la funzione stampa per aggiornare il DOM con i dati estratti
        }).catch((err) => { // 10. Se c'è un errore in uno dei passaggi precedenti (fetch o manipolazione dei dati), esegue questa funzione con l'errore come parametro
            console.log('Errore nel recupero dei dati: ', err); // 11. Logga il messaggio di errore nella console insieme all'errore catturato
        });
};

function stampa() { // 12. Definisce una funzione chiamata stampa
    for (let i = 0; i < elenco.length; i++) { // 13. Itera su ogni elemento nell'array elenco
        let li = document.createElement('li'); // 14. Crea un nuovo elemento 'li' (list item)
        li.innerText = elenco[i].name; // 15. Imposta il testo dell'elemento 'li' al nome dell'utente corrente
        lista.appendChild(li); // 16. Aggiunge l'elemento 'li' alla lista nel DOM (assume che esista un elemento con id 'lista')
    }
}

readData(); // 17. Chiama la funzione readData per eseguire il codice definito al suo interno
