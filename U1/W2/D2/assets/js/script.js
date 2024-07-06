const studente = {
    nome: 'Gabriele',
    cognome: 'Terracciano',
    eta: 27,
    classe: 'FS0124',
    webcam: false
}

//Un oggetto può essere anche definito inizialmente vuoto, anche se è deprecato
const nuovoOggetto = {};

console.log(studente);

document.getElementById('oggetto').innerHTML = studente;
//Bisogna uscire da const studente per stampare le proprietà interne, destrutturare
document.getElementById('nome').innerHTML = studente.nome;
document.getElementById('cognome').innerHTML = studente['cognome'];//secondo metodo, più scomodo
document.getElementById('eta').innerHTML = studente.eta;
document.getElementById('classe').innerHTML = studente.classe;
document.getElementById('webcam').innerHTML = studente.webcam;

//cambio la proprietà cognome e webcam
studente.cognome = 'Bianchi';
studente.webcam = true;
console.log(studente);
//nella console vedo la stampa con le proprietà originali, invece javascript dopo l'ha cambiato, infatti se stampo di nuovo

//Stampo di nuovo e cambia anche in stampa e vedrò una seconda tabella con il cognome modificato e webcam true
document.getElementById('oggetto').innerHTML = studente;

document.getElementById('nome2').innerHTML = studente.nome;
document.getElementById('cognome2').innerHTML = studente['cognome'];
document.getElementById('eta2').innerHTML = studente.eta;
document.getElementById('classe2').innerHTML = studente.classe;
document.getElementById('webcam2').innerHTML = studente.webcam;

console.log(studente);

//per aggiungere la proprietà e-mail(il nome è casuale)
studente.email = 'Franco@pippo.com';

console.log(studente);

//per eliminare la proprietà webcam
delete studente.webcam;

console.log(studente);

//ATTENZIONE nel caso seguente io non vado solo a copiare ma anche a sovrascrivere anche il nome di studente
//Javascript ha la reference alla stessa area di memoria quando si effettua una copia con l'assegnazione cioè (=)
//const studente2 = studente;

//studente2.nome = "Franco";

//console.log(studente.nome);
//console.log(studente2.nome);

//Per ovviare a questo problema e fare una copia di un oggetto
//Object assign o spread operator, si usa il secondo
//La differenza sta che l'object assign trasforma l'oggetto in un modulo
const studente3 = Object.assign(studente);
const studente4 ={...studente};

console.log(studente3);
console.log(studente4);
