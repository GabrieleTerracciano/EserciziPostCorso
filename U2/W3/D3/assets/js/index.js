// 1. Carica lo script specificato e gestisce il risultato con una Promise
let promise = loadScript('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js');

// 6. Definisce cosa fare quando la Promise viene risolta o rifiutata
promise.then(
    script => console.log(`Lo script ${script.src} è stato trovato`), // 7. Messaggio di successo
    error => console.log(`Errore: ${error.message}`) // 8. Messaggio di errore
);

// 2. Funzione per caricare dinamicamente uno script
function loadScript(src) {
    // 3. Restituisce una nuova Promise che rappresenta il processo di caricamento dello script
    return new Promise((resolve, reject) => {
        // 4. Crea un elemento <script>
        let script = document.createElement('script');
        script.src = src; // Imposta l'URL dello script

        // 5. Definisce cosa fare quando lo script viene caricato con successo
        script.onload = () => resolve(script);
        // Definisce cosa fare quando c'è un errore nel caricamento dello script
        script.onerror = () => reject(new Error(`Errore di caricamento dello script ${src}`));

        // Aggiunge l'elemento <script> all'interno del <head> del documento
        document.head.append(script);
    });
}
