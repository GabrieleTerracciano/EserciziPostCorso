import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-obsevable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  count: number = 0;

  //Simulazione di un observable
  ngOnInit(): void {
    // Crea un nuovo Observable
    const intervallo = new Observable((observer) => {
      let increment = 0; // Inizializza una variabile per contare gli incrementi
      setInterval(() => { // Esegue una funzione ogni secondo
        observer.next(increment);  // Emette il valore corrente di 'increment' tramite observer.next()
        if (increment === 5) {  // Se 'increment' arriva a 5
          observer.complete();  // Completa l'Observable, interrompendo ulteriori emissioni
          console.log('Observer completato');  // Logga che l'Observer è stato completato
        }
        if (increment > 3) {  // Se 'increment' supera 3
          observer.error(new Error('Increment è troppo grande'));  // Lancia un errore tramite observer.error()
        }
        increment++;  // Incrementa la variabile 'increment'
      }, 1000);  // Intervallo di esecuzione di 1000 ms (1 secondo)
    });
  
    // Sottoscrive l'Observable e trasforma i dati con la pipe e l'operatore map
    this.sub = intervallo
      .pipe(
        map((conta) => {  // Usa l'operatore map per trasformare i dati emessi
          this.count = Number(conta);  // Aggiorna la proprietà 'count' del componente con il valore corrente
          return `Siamo al numero ${conta}`;  // Restituisce una stringa che include il numero corrente
        })
      )
      .subscribe(
        (numero) => {  // Gestisce l'emissione di ogni nuovo valore dall'Observable
          console.log(numero);  // Logga la stringa ritornata dal map
        },
        (error) => {  // Gestisce gli errori che possono essere emessi dall'Observable
          console.log(error);  // Logga l'errore
        },
        () => {  // Gestisce il completamento dell'Observable
          console.log('Observable completato');  // Logga che l'Observable è stato completato
        }
      );
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();  // Annulla la sottoscrizione per evitare memory leak
    console.log('Observable scaricato');  // Logga che la sottoscrizione è stata interrotta
  }
}