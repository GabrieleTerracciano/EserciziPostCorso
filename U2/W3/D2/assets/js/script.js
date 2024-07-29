/*setItem salva un dato nel local storage
localStorage.setItem("petName", "Fido")
getItem ritorna un dato salvato
let myPet = localStorage.getItem("petName")
removeItem rimuove un dato salvato
localStorage.removeItem("petName")
clear rimuove ogni dato salvato sul dominio corrente
localStorage.clear()
Ma è diverso dal cancellare la cache del browser
Quando cancelli la cache del browser,
i file statici vengono rimossi. La prossima volta che visiti una pagina,
il browser dovrà scaricare nuovamente tutti questi file dal server,
il che potrebbe rallentare temporaneamente i tempi di caricamento delle pagine.
*/

class Persona {
    constructor(_nome, _cognome, _dataNascita, _skills) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.dataNascita = {
            giorno: _dataNascita[0],
            mese: _dataNascita[1],
            anno: _dataNascita[2]
        }
        this.skills = _skills;
    }
}

let nuovo = new Persona('Franco', 'Neri', [12, 6, 1991], ['HTML', 'Javascript']);

console.log(nuovo);
//stringify trasforma il JSON in una stringa perché il browser non può leggere un JSON
localStorage.setItem('persona', JSON.stringify(nuovo));
//parse ritrasforma la stringa in un JSON
let recupera = JSON.parse(localStorage.getItem('persona'));

console.log(recupera);

/*Le richieste HTTP possono essere di tipo:
URL: https://www.google.com/apis/test
Method: GET,POST,PUT,PATCH,DELETE
Headers: Autetication, cookies, Content-Type
Payload: data o empty


Le richieste HTTP sono uno dei fondamenti della comunicazione tra client e server sul web.

Ecco una panoramica dei componenti di una richiesta HTTP:

URL: https://www.google.com/apis/test
Protocollo: https:// - Indica che la comunicazione utilizzerà HTTPS, un protocollo sicuro che cripta i dati trasmessi, e viene decriptato dal browser.
Dominio: www.google.com - Indica il server a cui viene fatta la richiesta.
Percorso: /apis/test - Specifica la risorsa richiesta sul server.

Method
I metodi HTTP definiscono l'azione che il client desidera compiere sulla risorsa specificata. Ecco una panoramica dei metodi menzionati:

GET: Richiede una rappresentazione della risorsa specificata. Viene utilizzato per recuperare dati dal server.
Esempio: Richiedere informazioni su un utente.
Payload: Vuoto. I dati sono solitamente passati come parametri URL.

POST: Invia dati al server per creare una nuova risorsa. Viene utilizzato per inviare dati di modulo, caricare file, ecc.
Esempio: Creare un nuovo utente.
Payload: Contiene i dati da inviare (es. dati del modulo).

PUT: Invia dati al server per aggiornare una risorsa esistente. L'intera risorsa viene aggiornata con i dati forniti.
Esempio: Aggiornare le informazioni di un utente.
Payload: Contiene i dati aggiornati della risorsa.

PATCH: Simile a PUT, ma viene utilizzato per aggiornamenti parziali di una risorsa.
Esempio: Aggiornare solo l'indirizzo email di un utente.
Payload: Contiene i dati parziali da aggiornare.

DELETE: Richiede la cancellazione della risorsa specificata.
Esempio: Eliminare un utente.
Payload: Solitamente vuoto, ma in alcuni casi può contenere dati per la cancellazione condizionale.

Headers
Gli header HTTP forniscono informazioni aggiuntive sulla richiesta o sulla risposta. Ecco una panoramica di alcuni header comuni:

Authentication: Utilizzato per inviare credenziali di autenticazione al server.
Esempio: Authorization: Bearer <token> - Invio di un token JWT per l'autenticazione.

Authentication è il processo di verifica dell'identità. Utilizza l'header Authorization per inviare le credenziali.
Authorization è il processo di verifica dei permessi dopo che l'identità è stata autenticata.

Accept: in una richiesta HTTP è utilizzato dal client per indicare al server quali tipi di contenuti è in grado di elaborare.
Questo header permette al client di specificare quale tipo di risposta preferisce ricevere,
facilitando la negoziazione del contenuto tra client e server.
Ecco alcuni dettagli e esempi sull'uso di Accept:

Header Accept
Indica i tipi di contenuti che il client è disposto a ricevere dalla risposta del server.
Esempi Comuni di Accept

JSON:
Descrizione: Il client preferisce ricevere una risposta in formato JSON.
Accept: application/json

HTML:
Descrizione: Il client preferisce ricevere una risposta in formato HTML.
Accept: text/html

XML:
Descrizione: Il client preferisce ricevere una risposta in formato XML.
Accept: application/xml

Cookies: Contiene i cookie associati al dominio. I cookie possono memorizzare informazioni di sessione e altre preferenze dell'utente.
Esempio: Cookie: sessionId=abc123; theme=light

Content-Type: Indica il tipo di contenuto del corpo della richiesta (per i metodi che inviano dati).
Esempio: Content-Type: application/json - Il payload è in formato JSON.

Payload
Il payload, o corpo della richiesta, contiene i dati che vengono inviati al server. Il contenuto e il formato del payload dipendono dal metodo HTTP utilizzato:

GET: Solitamente non ha un payload. I dati sono passati come parametri URL.
POST: Contiene i dati da inviare al server, come JSON, XML, form-data, ecc.
Esempio: { "name": "John Doe", "email": "john@example.com" }

PUT/PATCH: Contiene i dati per aggiornare la risorsa esistente.
Esempio: { "email": "newemail@example.com" }

DELETE: Generalmente non ha un payload, ma può averlo in alcuni casi per cancellazioni condizionali.

Le richieste HTTP sono essenziali per l'interazione tra client e server.
Comprendere i metodi, gli header e il payload è fondamentale per sviluppare e mantenere applicazioni web.
Le richieste ben formate assicurano una comunicazione efficace e sicura, migliorando l'esperienza utente e la funzionalità dell'applicazione.
*/
//Postman ti permette di testare le API e MockApi ti permette di crearle appoggiandosi sui suoi server













