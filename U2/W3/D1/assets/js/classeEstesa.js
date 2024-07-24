// Definizione della classe Studente che estende la classe PersonaClasse
class Studente extends PersonaClasse {
    // Costruttore della classe Studente che accetta i parametri _firstName, _lastName, _age e _corso
    constructor(_firstName, _lastName, _age, _corso) {
        // Chiamata al costruttore della classe padre (PersonaClasse) con i parametri necessari
        super(_firstName, _lastName, _age);
        // Assegna il parametro _corso alla proprietà corso dell'istanza
        this.corso = _corso;
    }

    // Override del metodo saluti per includere anche il corso
    saluti() {
        console.log(`${this.firstName} ${this.lastName} di anni ${this.age} frequenta il corso : ${this.corso}`);
    }
}

// Crea una nuova istanza di Studente con i valori specificati
const Studente1 = new Studente('Giacomo', 'Poretti', 23, 'FS0124');

// Chiama il metodo saluti dell'istanza Studente1, che stamperà "Giacomo Poretti di anni 23 frequenta il corso : FS0124"
Studente1.saluti();

// Aggiorna il testo dell'elemento con id 'ClasseEstesa' con i dati dello studente
document.getElementById('ClasseEstesa').innerText = `${Studente1.firstName} ${Studente1.lastName} di anni ${Studente1.age} frequenta il corso : ${Studente1.corso}`;
