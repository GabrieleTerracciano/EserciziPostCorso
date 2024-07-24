// Definizione della classe PersonaClasse
class PersonaClasse {
    // Costruttore della classe che accetta i parametri _firstName, _lastName e _age
    constructor(_firstName, _lastName, _age) {
        // Assegna il parametro _firstName alla proprietà firstName dell'istanza
        this.firstName = _firstName,
        // Assegna il parametro _lastName alla proprietà lastName dell'istanza
        this.lastName = _lastName,
        // Assegna il parametro _age alla proprietà age dell'istanza
        this.age = _age
    }

    // Metodo saluti che stampa un messaggio di saluto con i dati della persona
    saluti() {
        console.log(`${this.firstName} ${this.lastName} di anni ${this.age}`);    
    }
}

// Crea una nuova istanza di PersonaClasse con i valori specificati
const PersonaClasse1 = new PersonaClasse('Aldo', 'Baglio', 25);

// Chiama il metodo saluti dell'istanza PersonaClasse1, che stamperà "Aldo Baglio di anni 25"
PersonaClasse1.saluti();

// Aggiorna il testo dell'elemento con id 'Classe' con i dati della persona
document.getElementById('Classe').innerHTML = `${PersonaClasse1.firstName} ${PersonaClasse1.lastName} di anni ${PersonaClasse1.age}`;
