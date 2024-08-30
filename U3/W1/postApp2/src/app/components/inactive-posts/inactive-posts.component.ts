import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent {
  posts!: Post[]; // Dichiarazione della proprietà `posts`, un array di oggetti di tipo `Post`. Il punto esclamativo `!` indica che la variabile sarà assegnata successivamente.

  constructor() {
    // Il costruttore viene eseguito al momento della creazione dell'istanza del componente.
    this.getPosts().then((posts) => {
      // Chiama il metodo `getPosts` e, quando la Promise è risolta, esegue il codice nel blocco `then`.
      this.posts = posts; // Assegna i dati dei post ricevuti alla proprietà `posts` del componente.
    });
  }

  async getPosts() {
    // Metodo asincrono per recuperare i dati dei post da un file JSON.
    let response = await fetch('https://jsonplaceholder.typicode.com/todos'); // Effettua una richiesta HTTP GET al file 'assets/db.json' utilizzando `fetch`.
    let data = await response.json(); // Converte la risposta in formato JSON in un oggetto JavaScript.
    return data; // Restituisce i dati JSON ottenuti dalla richiesta.
  }
}
