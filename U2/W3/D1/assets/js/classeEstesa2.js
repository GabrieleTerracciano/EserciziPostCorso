// Definizione della classe Docente che estende la classe PersonaClasse
class Docente extends PersonaClasse {
    // Costruttore della classe Docente che accetta i parametri _firstName, _lastName, _age e _materia
    constructor(_firstName, _lastName, _age, _materia) {
        // Chiamata al costruttore della classe padre (PersonaClasse) con i parametri necessari
        super(_firstName, _lastName, _age);
        // Assegna il parametro _materia alla proprietà materia dell'istanza
        this.materia = _materia;
    }

    // Metodo saluti che stampa un messaggio di saluto con i dati del docente
    saluti() {
        console.log(`${this.firstName} ${this.lastName} di anni ${this.age} insegna la materia: ${this.materia}`);
    }
}

// Crea una nuova istanza di Docente con i valori specificati
const Docente1 = new Docente('Maria', 'Cervi', 54, 'Javascript');

// Chiama il metodo saluti dell'istanza Docente1, che stamperà "Maria Cervi di anni 54 insegna la materia: Javascript"
Docente1.saluti();

// Aggiorna il testo dell'elemento con id 'ClasseEstesa2' con i dati del docente
document.getElementById('ClasseEstesa2').innerText = `${Docente1.firstName} ${Docente1.lastName} di anni ${Docente1.age} insegna la materia: ${Docente1.materia}`;
