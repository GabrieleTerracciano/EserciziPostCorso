class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }

    confrontoEta(altroUser) {
        if (this.age < altroUser.age) {
            return `${this.firstName} ${this.lastName} è più giovane di ${altroUser.firstName} ${altroUser.lastName}.`;
        } else if (this.age > altroUser.age) {
            return `${this.firstName} ${this.lastName} è più vecchio di ${altroUser.firstName} ${altroUser.lastName}.`;
        } else {
            return `${this.firstName} ${this.lastName} ha la stessa età di ${altroUser.firstName} ${altroUser.lastName}.`;
        }
    }
}

const user1 = new User('Aldo', 'Rossi', 15, 'Pisa');
const user2 = new User('Francesco', 'Franchi', 25, 'Asti');

// Ottieni il risultato del confronto delle età
const risultatoConfronto = user1.confrontoEta(user2);

// Stampa il risultato del confronto delle età nella console
console.log(risultatoConfronto);

// Imposta il testo dell'elemento con ID 'classe1' al risultato del confronto delle età
document.getElementById('classe1').innerText = risultatoConfronto;
