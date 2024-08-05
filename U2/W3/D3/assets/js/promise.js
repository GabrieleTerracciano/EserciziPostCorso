function showPage(page) {
    document.getElementById('pagina').innerHTML = page; // 9. Imposta il contenuto dell'elemento con id 'pagina' al valore di 'page'
}

const promise = new Promise(function (resolve, reject) { // 1. Crea una nuova promessa con una funzione che prende 'resolve' e 'reject' come parametri
    let request = new XMLHttpRequest(); // 2. Crea un nuovo oggetto XMLHttpRequest, la richiesta HTTP
    request.open('GET', 'include.html'); // 3. Configura la richiesta HTTP per utilizzare il metodo GET e per richiedere il file 'include.html'
    request.onload = function () { // 4. Definisce una funzione da eseguire quando la richiesta è completata (caricata)
        if (request.status == 200) { // 5. Controlla se lo status della risposta è 200 (OK)
            resolve(request.response); // 6. Risolve la promessa passando la risposta della richiesta
        } else {
            reject('<h3>FILE NON TROVATO!</h3>'); // 7. Rifiuta la promessa passando un messaggio di errore HTML
        }
    };
    request.send(); // 8. Invia la richiesta al server
});

promise.then(//Con then si gestiscono i casi
    function (value) { showPage(value); }, // 10. Se la promessa è risolta, chiama la funzione showPage con il valore risolto (il contenuto del file)
    function (error) { showPage(error); }  // 11. Se la promessa è rifiutata, chiama la funzione showPage con il valore rifiutato (il messaggio di errore)
);

document.getElementById('dimostrazione').innerText =
    'Questa riga dimostra il funzionamento di un metodo asincrono come una promise:\n' +
    'nonostante sia l\'ultima istruzione JavaScript,\n' +
    'viene eseguita indipendentemente dall\'esito della promise e durante l\'esecuzione della promise';
