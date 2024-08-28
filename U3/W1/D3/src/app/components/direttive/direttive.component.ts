import { Component } from '@angular/core';

@Component({
  selector: 'app-direttive',
  templateUrl: './direttive.component.html',
  styleUrls: ['./direttive.component.scss'],
})
export class DirettiveComponent {
  mostrare: number = 1;
  items = [
    {
      nome: 'Mario',
      cognome: 'Rossi',
      eta: '25',
    },
    {
      nome: 'Giacomo',
      cognome: 'Poretti',
      eta: '35',
    },
    {
      nome: 'Aldo',
      cognome: 'Baglio',
      eta: '27',
    },
  ];

  products = [
    {
      nomeProd: 'Pasta',
      categoria: 'Alimentari',
      prezzo: 2,
    },
    {
      nomeProd: 'Detersivo',
      categoria: 'Casalinghi',
      prezzo: 5,
    },
    {
      nomeProd: 'Giacca',
      categoria: 'Abbigliamento',
      prezzo: 100,
    },
  ];
}
