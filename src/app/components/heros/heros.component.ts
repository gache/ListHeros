import { Component, OnInit } from '@angular/core';
import { HerosService,  } from './../services/heros.service'; // Importation de mon service pour utiliser leur l’information.
import { HerosInterface } from './../../components/interface/interfaceHeros';  // Importation de mon interface.
import { Router } from '@angular/router'; // Importation du router



@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

// je crée une variable local de type HerosInterface pour pouvoir utiliser les propriété et le méthode de HerosInterface
  herosLocal: HerosInterface[] = [];

  // J’injecte  mon service au constructeur pour l'utiliser
  // J’injecte  mon Router au constructeur pour l'utiliser
  constructor(private herosService1: HerosService,
              private router: Router ) { }

  ngOnInit() {
  // Cette variable herosLocal: va être egal à mon service que j'ai injecté au constructeur herosService1  + à mon methode creer dans mon service  getHeros(). pour récuperer les heros
    this.herosLocal = this.herosService1.getHeros();
    console.log(this.herosLocal);
  }
  // je crée ma fonction voirhero() que j'utilise dans heros.component.html. cette funtion me permet naviger ver le composant heroSeul.  c'est la route de mon composant avec on index(['/heroSeul', index])
   voirHero(index: number) {
    this.router.navigate(['/heroSeul', index]);
   }

}
