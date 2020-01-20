import { Component, OnInit } from '@angular/core';
import { HerosService,  } from './../services/heros.service'; // Importation de mon service pour utiliser leur l’information. 
import {  HerosInterface } from './../../components/interface/interfaceHeros';  // Importation de mon interface.


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

// je crée une variable local de type HerosInterface pour pouvoir utiliser les propriété et le méthode de HerosInterface
  herosLocal: HerosInterface[] = [];

  // J’injecte  mon service au constructeur pour l'utiliser
  constructor(private herosService1: HerosService) { }

  ngOnInit() {
    // Cette variable local herosLocal: va être egal à la variable du service que j'ai injecté au constructeur herosService1  + à mon methode creer dans mon service  getHeros()
    this.herosLocal = this.herosService1.getHeros();
    console.log(this.herosLocal);
  }

}
