function read() {
    //Parte per prima, chiamata a riga 12
    console.log('Pronta la funzione read()!'); //1 - Viene eseguito immediatamente quando la funzione `read()` viene chiamata.
    let esempio = fetch('https://jsonplaceholder.typicode.com/users').then(
        response => {
            console.log("Codice eseguito all'interno del then()"); //6 - Questo viene eseguito solo quando la risposta dalla fetch è stata ricevuta.
            return response.json(); // Elabora la risposta e restituisce un oggetto JSON.
        }
    ).then((data) => {
        let elenco = data;
        console.log('Risultato della fetch con il then chaining: ', elenco); //7 - Stampa i dati elaborati ricevuti dalla fetch.
    });
    console.log('Quando verrà stampato questo titolo? Dopo la fetch? NO'); //2 - Viene eseguito subito dopo la chiamata fetch, non aspetta la risposta della fetch.
}

read();
console.log('Quando verrà stampato questo testo? Dopo tutta la funzione read? NO'); //3 - Questo viene eseguito immediatamente dopo la chiamata a `read()`, non aspetta il completamento della funzione `read()`.


async function otherRead() { // Parte per seconda, chiamata a riga 22
    try {
        console.log('Pronto1!'); //4 - Viene eseguito immediatamente quando la funzione `otherRead()` viene chiamata.
        let esempio = await fetch('https://jsonplaceholder.typicode.com/users'); // Attende la risposta dalla fetch.
        let risposta = await esempio.json(); // Attende l'elaborazione della risposta in formato JSON.
        console.log('Risposta della fetch async/await: ', risposta); //8 - Stampa i dati elaborati dopo che sono stati ricevuti e convertiti in JSON.
        console.log("Codice eseguito all'interno di async, stampato per ultimo"); //9 - Questo viene eseguito dopo che tutti gli `await` precedenti sono stati completati.  
    } catch (error) {
        console.log('Errore: ', error); //10 - Se si verifica un errore durante la fetch o durante l'elaborazione JSON, questo messaggio verrà stampato.
        location.href = '404.html';
    }
}

otherRead();
console.log("Codice eseguito all'esterno di async, stampato per primo"); //5 - Viene eseguito immediatamente dopo la chiamata a `otherRead()`, non aspetta il completamento di `otherRead()`.
