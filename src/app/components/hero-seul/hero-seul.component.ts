
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importation pour récupérer l'id qui viens de l'URL
import { HerosService,  } from './../services/heros.service'; // Importation de mon service pour utiliser leur l’information.


@Component({
  selector: 'app-hero-seul',
  templateUrl: './hero-seul.component.html',
  styleUrls: ['./hero-seul.component.css']
})
export class HeroSeulComponent {
  // je défine la variable que je vais utiliser dans le template
  heroS: any  = {};

  // je l'injecte ActivatedRoute et HerosService dans le constructeur pour l'utiliser
  constructor(private activatedRoute1: ActivatedRoute,
              private heroService1: HerosService ) {

// utilisation ActivatedRoute. Avec la propriété params est attentif aux changements qui viens de ce paramètre. Mais pour qu’il fonctionne il        faut faire un suscription
    this.activatedRoute1.params.subscribe( params => {

    // Cette variable heroSeul: va être egal à mon service que j'ai injecté au constructeur herosService1  + à mon methode creer dans mon service  getHeroSeul() avec propriété params. celle-ci va être attentif au chagment  avec son index definie dans mo méthode.
    this.heroS = this.heroService1.getHeroSeul(params['id'])
    //  this.heroSeul = this.heroService1.getHeroSeul( params[' index ']);
      console.log(params['id'] ); // je mets Id car dans le fichier app.route.ts on l'a définit comme ça
    });

   }


}
