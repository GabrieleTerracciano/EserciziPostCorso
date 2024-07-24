/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

stringa1 = 'Daje';
stringa2 = 'Roma';

const primiCaratteri1 = stringa1.slice(0, 2);
const primiCaratteri2 = stringa2.slice(1);

const unito = primiCaratteri1.concat(primiCaratteri2);

console.log(unito);

document.getElementById('primo').innerText = unito;


/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
let arrayNumeri = [];
function arrayNumeriRandom() {

  for (let i = 0; i < 10; i++) {
    let numeroRandom = Math.floor(Math.random() * 101);
    arrayNumeri.push(numeroRandom);
  }
  return arrayNumeri;
}
arrayNumeri = arrayNumeriRandom();
console.log(arrayNumeri);
document.getElementById('secondo').innerText = arrayNumeri;

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/


let arrayNumeri1 = [1, 12, 54, 132, 6542, 133, 129, 96, 64, 432, 79];

function arrayNumeriPari() {
  const numeriPari = arrayNumeri1.filter((element, index) => {
    return element % 2 === 0; // Filtra solo i numeri pari
  });
  return numeriPari;
}
let numeriPari = arrayNumeriPari();
console.log(numeriPari);
document.getElementById('terzo').innerText = arrayNumeri1;
document.getElementById('pari').innerText = numeriPari;


/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

let arrayNumeri2 = [5, 87, 42, 143, 657, 98];
let sommaNumeri = 0;

arrayNumeri2.forEach((element) => {
  sommaNumeri += element
  //Ad esempio, se arrayNumeri2 è [5, 87, 42, 143, 657, 98], durante la prima iterazione element sarà 5, durante la seconda iterazione element sarà 87, e così via.
  //Ogni valore di element viene aggiunto alla variabile sommaNumeri, che alla fine conterrà la somma di tutti gli elementi dell'array.
});
console.log(sommaNumeri);
document.getElementById('quarto').innerText = sommaNumeri;

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

let arrayNumeri3 = [5, 87, 42, 143, 657, 98];

// Utilizzo di reduce per calcolare la somma degli elementi dell'array
let sommaNumeri1 = arrayNumeri2.reduce((acc, element) => {
  return acc + element;
  // La funzione di callback (acc, element) => acc + element somma acc (l'accumulatore) e element (l'elemento corrente) ad ogni iterazione.
  //Il valore iniziale dell'accumulatore è specificato come secondo argomento di reduce, in questo caso 0 (quindi acc inizialmente è 0).
}, 0); // 0 è il valore iniziale dell'accumulatore

console.log(sommaNumeri1); // Stampa la somma dei numeri nell'array
document.getElementById('quinto').innerText = sommaNumeri1;

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const arrayNumeri4 = [1, 2, 3, 4, 5];
const n = 15;
const listaNumeri4 = document.getElementById('listaNumeri2')
arrayNumeri.map((element) => {
  let nuovoNumero = element + n;
});
const nuovoArrayNumeri4 = arrayNumeri4.map((element) => {
  return element + n;
})

document.getElementById('sesto').innerText = `Array originario: ${arrayNumeri4}`;
document.getElementById('nuovoArray').innerText = `Nuovo array generato da map: ${nuovoArrayNumeri4}`;

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

const arrayStringhe = ['Carla', 'è,', 'brava', 'a', 'ballare'];
let lunghezzeStringhe = arrayStringhe.map((stringa) => {
  return stringa.length;
});
console.log(lunghezzeStringhe);
document.getElementById('settimo').innerText = lunghezzeStringhe

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

// const numeriDispari = [];
// numeriDispari.forEach((element) => {
//   numero ===
//   if (numero % 2 !== 0) {
//     arrayDispari.push(numero);
//   }
// })
// console.log(numeriDispari);
// document.getElementById('ottavo').innerText = numeriDispari


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

let valoreAlto = 3000;

movies.forEach((element) => {
  if (element.Year < valoreAlto) {
    valoreAlto = element.Year;
  }
});
console.log(`Il film più vecchio è del: ${valoreAlto}`);
document.getElementById('nono').innerText = (`Il film più vecchio è del ${valoreAlto}`);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

const numeroFilm = movies.length;

console.log(`L'array contiene ${numeroFilm} film.`);
document.getElementById('decimo').innerText = (`L'array contiene ${numeroFilm} film`);

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

const listaFilm = movies.map((element) => {
  return element;
});

console.log(`L'array contiene ${listaFilm.length} film.`);
document.getElementById('decimo').innerText = (`L'array contiene ${listaFilm.length} film`);


/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
