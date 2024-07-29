document.addEventListener('DOMContentLoaded', function () {
    // Recupera il valore associato alla chiave 'userName' dal local storage
    let name = localStorage.getItem('userName');
    // Controlla se esiste un nome salvato nel local storage
    if (name) {
        // Se esiste, aggiorna il contenuto dell'elemento con id 'risultato' con il nome salvato
        document.getElementById('risultato').innerText = 'Nome salvato: ' + name;
    }
});

document.getElementById('salva').addEventListener('click', function () {
    // Recupera il valore dell'input di testo con id 'name'
    let name = document.getElementById('name').value;
    // Controlla se l'input non è vuoto
    if (name) {
        // Se non è vuoto, salva il valore nel local storage con la chiave 'userName'
        localStorage.setItem('userName', name);
        // Aggiorna il contenuto dell'elemento con id 'risultato' con il nome appena salvato
        document.getElementById('risultato').innerText = 'Nome salvato: ' + name;
    }
});

document.getElementById('cancella').addEventListener('click', function () {
    // Rimuove il valore associato alla chiave 'userName' dal local storage
    localStorage.removeItem('userName');
    // Pulisce il contenuto dell'elemento con id 'risultato'
    document.getElementById('risultato').innerText = '';
});
