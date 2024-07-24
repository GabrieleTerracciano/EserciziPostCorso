// Definizione della classe Operazione
class Operazione {
    // Costruttore della classe che accetta i parametri _num1 e _num2
    constructor(_num1, _num2) {
        this.num1 = _num1;
        this.num2 = _num2;
    }

    // Definizione di una proprietà statica valoreFisso
    static valoreFisso = 10;

    // Metodo calcolo che restituisce il risultato del calcolo (num1 + num2) * valoreFisso
    calcolo() {
        return (this.num1 + this.num2) * Operazione.valoreFisso;
    }
}

// Crea una nuova istanza di Operazione con i valori specificati
const nuovaOperazione = new Operazione(12, 15);
// Stampa l'oggetto nuovaOperazione
console.log(nuovaOperazione);
// Chiama il metodo calcolo dell'istanza nuovaOperazione e stampa il risultato del calcolo
console.log(nuovaOperazione.calcolo());
// Aggiorna il testo dell'elemento con id 'ClasseOperazione' con il risultato del calcolo
document.getElementById('ClasseOperazione').innerText = nuovaOperazione.calcolo();
