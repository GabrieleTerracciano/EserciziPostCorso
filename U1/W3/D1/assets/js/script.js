let test = document.getElementById('test'); // Traversing
// let test = document.querySelector('#test'); // Di fatto è la stessa istruzione di riga 1
let corpoPagina = document.querySelectorAll('body')[0];
test.innerHTML = '<h1>DOM Traversing & DOM Manipulation</h1>'; // Manipulation, inserisce un h1 nel id test sull'html

const link = document.createElement('a');
link.setAttribute('href', 'https://www.google.it/');
link.setAttribute('target', '_blank');
link.innerText = 'Link a Google';
test.appendChild(link);
//Apparte getElementByid seleziona solo un id, invece gli altri sono Elements
//Per selezionare solo uno bisogna mettere [0] ad esempio per selezionare il primo
//let contenitori = document.getElementsByTagName('div')[0];
// Seleziona tutti gli elementi <div> nella pagina e li memorizza in una HTMLCollection
let contenitori = document.getElementsByTagName('div');
console.log(contenitori);

// Aggiunge la classe 'box' all'elemento con id 'secondo'
document.getElementById('secondo').className = 'box';

// Seleziona l'elemento <h4> all'interno dell'elemento con id 'secondo' e imposta il colore del testo a nero
document.querySelector('#secondo h4').setAttribute('style', 'color: black;');

// Seleziona tutti gli elementi con classe 'box' e li memorizza in una NodeList
let boxes = document.querySelectorAll('.box');
console.log(boxes);

// Seleziona l'elemento <p> all'interno dell'elemento con id 'terzo' e imposta lo stile del carattere a grassetto
document.querySelector('#terzo p').style.fontWeight = 'bold';

// Crea un nuovo elemento <div>
const newDiv = document.createElement('div');
// Imposta il testo interno del nuovo <div>
newDiv.innerText = "Sono un nuovo div creato da Javascript";
// Imposta il colore di sfondo del nuovo <div> a rosso
newDiv.style.backgroundColor = 'red';
// Imposta lo spessore del carattere del nuovo <div> a grassetto
newDiv.style.fontWeight = 'bold';
// Imposta il colore del testo del nuovo <div> a bianco
newDiv.style.color = 'white';
// Aggiunge il nuovo <div> alla fine del corpo della pagina
corpoPagina.appendChild(newDiv);