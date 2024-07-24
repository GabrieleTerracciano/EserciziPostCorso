// Definizione del costruttore Persona
const Persona = function (_firstName, _lastName) {
    // Assegnazione del valore _firstName alla proprietà firstName dell'oggetto
    this.firstName = _firstName,
    // Assegnazione del valore _lastName alla proprietà lastName dell'oggetto
    this.lastName = _lastName,
    // Definizione del metodo saluti che stampa il nome completo nella console
    this.saluti = function (durata) {
        console.log(`${this.firstName} ${this.lastName} frequenta un corso della durata di ${durata} settimane`);
    };
};

// Creazione di un nuovo oggetto Persona con nome Mario Rossi
const Persona1 = new Persona('Mario', 'Rossi');

// Definizione di una funzione che calcola la durata del corso
const durata = () => {
    return 3 * 6; // Calcola la durata come 3 settimane per 6 volte, quindi 18 settimane
};

// Impostazione del testo interno dell'elemento con id 'Costruttore' al nome completo della persona e la durata del corso
document.getElementById('Costruttore').innerText = `${Persona1.firstName} ${Persona1.lastName} frequenta un corso della durata di ${durata()} settimane`;

// Chiamata del metodo saluti per stampare il nome completo e la durata del corso nella console
Persona1.saluti(durata()); // Passa il risultato della funzione durata() come argomento

// Creazione di un nuovo oggetto Persona con nome Aldo Bianchi
const Persona2 = new Persona('Aldo', 'Bianchi');

// Chiamata del metodo saluti per stampare il nome completo e la durata del corso nella console
//In questo caso gli passiamo 15 come parametro
Persona2.saluti(15);


// Definizione del costruttore Persona3
const Persona3 = function(_firstName, _lastName, _age = 0) {
    // Assegna il parametro _firstName alla proprietà firstName dell'oggetto
    this.firstName = _firstName,
    // Assegna il parametro _lastName alla proprietà lastName dell'oggetto
    this.lastName = _lastName,
    // Assegna il parametro _age alla proprietà age dell'oggetto, con un valore predefinito di 0
    this.age = _age,
    // Definizione del metodo saluto che stampa un messaggio di saluto con i dati della persona
    this.saluto = function() {
        console.log (`${this.firstName} ${this.lastName} di anni ${this.age}`)
    }
}

// Crea un nuovo oggetto Persona4 utilizzando il costruttore Persona3 con i valori specificati
const Persona4 = new Persona3('Franco', 'Svizzero', 25);

// Chiama il metodo saluto dell'oggetto Persona4, che stamperà "Franco Svizzero di anni 25"
Persona4.saluto();

// Stampa l'età dell'oggetto Persona4, che sarà 25
console.log(Persona4.age);

// Aggiorna il testo dell'elemento con id 'Costruttore1' con i dati della persona
document.getElementById('Costruttore1').innerText = `${Persona4.firstName} ${Persona4.lastName} di anni ${Persona4.age}`

