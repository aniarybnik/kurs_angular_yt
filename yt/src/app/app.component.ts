import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  zadanie: string;
  listaZadan: Array<string> = [];  // Tablica będzie przyjmowała same stringi
  listaZadanWykonanych: Array<string> = [];
  licznik = 0;

  // kiedyDodac = false;

  dodaj() {
    // this.kiedyDodac = true;
    this.listaZadan.push(this.zadanie); // Dodawanie do Tablicy kolejnych zadań
    this.zadanie = '';
  }

  usun(i: string) {
    this.listaZadan = this.listaZadan.filter( e => e !== i);
  }

  dodajZrobione(i: string) {
    this.listaZadan = this.listaZadan.filter( e => e !== i);
    this.listaZadanWykonanych.push(i);
    this.licznik = this.listaZadanWykonanych.length;
  }
}

