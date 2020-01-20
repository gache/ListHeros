// Création d’un service de manière manuelle avec les Snnippet est ag-service
// pour utiliser le service il faut faire l’importation du service dans le dossier app.module.ts

import { Injectable } from '@angular/core';
import { HerosInterface } from './../../components/interface/interfaceHeros' // Importation de mon interfece

@Injectable()
export class HerosService {


// Je crée une propriété privée s’appelle heros1. Cette propriété ne peut pas y accéder en dehors de la class ou du service. En plus cette variable heros1 je lui dis que c’est type HerosInterface pour qu'il respecte bien les caractéristique de l'interface.

  private heros1: HerosInterface[] = [
    {
      nom: 'Aquaman',
      bio: "Aquaman possède une large palette de pouvoirs qui font de lui un des meilleurs super héros de DC Comics. En effet, il possède une force, une résistance et une agilité surhumaines, est capable de faire des sauts de plusieurs centaines de mètres, il peut vivre sous l'eau et se déplacer à très grande vitesse dans celle-ci, il commande et communique par télépathie aux animaux marins, il est capable grâce à ses sens surhumains de voir dans les profondeurs des abysses comme en plein jour. A tous ces pouvoirs s'ajoute son trident magique, offert par Poséidon, qui lui permet de maîtriser les éléments comme la glace, la foudre ou encore le vent et de se téléporter.",
      img: "assets/img/aquaman.png",
      apparition: "1941-11-01",
      editeur:"DC"
    },
    {
      nom: 'Batman',
      bio: "Pour combattre les criminels, Bruce Wayne crée une nouvelle identité. Ainsi naît le Bat-Man qui, la nuit, chasse les malfaiteurs et les saisit d'effroi. Constamment sur le qui-vive, il exerce un contrôle total sur ses sentiments et est prêt à tout pour atteindre son but. Sa force réside dans ses capacités de détective, son intelligence, ses capacités physiques et l'accès à une technologie de pointe. Son entraînement, ses ressources, sa rigueur compensent ainsi largement l'absence d'un pouvoir spécifique. C'est un maître dans de nombreuses disciplines martiales (tout spécialement à mains nues) qui selon les époques ont varié. Dans les premiers temps, Batman pratique le judo et le jiujitsu puis le karaté et le kung-fu qu'il utilise des années 1950 aux années 1970. Depuis les années 1980, sa technique de combat est un mélange de différents arts martiaux et ses capacités physiques sont dignes d'un niveau olympique.",
      img: "assets/img/batman.png",
      apparition: "1939-05-01",
      editeur:"DC"
    },
    {
      nom: 'Daredevil',
      bio: "Matt Murdock a (ironiquement) obtenu ses pouvoirs en perdant la vue à l'âge de 9 ans, sauvant (dans la bande dessinée) un passant aveugle qui traversait une rue d'un camion venant en sens inverse. Le jeune Matt, poussant l'homme et le mettant hors de danger, voit le camion faire une embardée et, lors du choc, un isotope radioactif s'échappe de la cargaison du camion, le frappant en plein visage et le rendant aveugle. Pendant sa convalescence à l'hôpital, il découvre que son ouïe, son odorat, son goût et son sens du toucher ont été amplifiés à un degré surhumain. Il nomme cette capacité « hypersens ». Il découvre aussi qu'il a développé un « sens radar », similaire à l'écholocalisation des chauves-souris, qui lui permet de former une image mentale de son environnement à une trentaine de mètres, en lui donnant des capacités bien au-delà des limites d'une personne voyante ; grâce à ce pouvoir, très peu de gens savent que Daredevil est aveugle. Selon Stan Lee, les organes sensoriels de Murdock ont reçu un niveau surhumain de développement, son oreille interne (qui contrôle l'équilibre et les mouvements du corps) étant aussi très développée, ce qui l'aide dans ses acrobaties qui dépassent même celles des athlètes valides de niveau olympique.",
      img: "assets/img/daredevil.png",
      apparition: "1964-01-01",
      editeur: "Marvel"
    },
    {
      nom: 'Hulk',
      bio: "Le docteur Bruce Banner est considéré comme l'un des plus grands esprits scientifiques de la Terre, possédant « un esprit tellement brillant qu'il ne peut être mesuré par aucun test d’intelligence connu ». Il détient une expertise dans divers domaines, notamment en biologie, chimie, ingénierie, physiologie et principalement en physique nucléaire. Grâce à cette connaissance, Banner a créé une technologie avancée baptisée « Bannertech » qui est comparable au développement technologique de Tony Stark, du Docteur Fatalis ou de Red Richards. On peut citer notamment un champ de force qui peut le protéger contre les attaques d'entités du même niveau de puissance que Hulk, et un téléporteur. Cependant, sa capacité émotionnelle (intelligence émotionnelle) est sensiblement réduite, ce qui l’amène à être en permanence renfermé sur lui-même. Durant ses errances à travers le monde, Banner a appris à devenir un fugitif doué, capable de dissimuler avec aisance sa véritable identité. Sur Sakaar, Hulk a été entraîné au maniement de nombreuses armes de duel..",
      img: "assets/img/hulk.png",
      apparition: "1962-05-01",
      editeur:"Marvel"
    },
    {
      nom: 'Green Lantern',
      bio: "L'anneau des Green Lantern confèrent les mêmes pouvoirs à chacun de ses hôtes. Ces pouvoirs dépendent largement de la volonté du porteur : La capacité de voler et de respirer dans l'espace sans limites ; La capacité de comprendre et traduire toutes les langues sans effort ; La capacité de matérialiser par la seule force de sa volonté une pléthore d'objets, armes ou animaux constitués de lumière matérialisée, appelés constructions. Ce pouvoir dépend de la volonté du Green Lantern et peut aussi bien grandir quand il fait preuve de courage que se tarir en cas de faiblesse.",
      img: "assets/img/linterna-verde.png",
      apparition: "1940-06-01",
      editeur: "DC"
    },
    {
      nom: 'Spider-Man',
      bio: "La morsure d'une araignée radioactive déclencha dans le corps de Peter Parker des mutations, lui conférant des super-pouvoirs. Dans les histoires originales de Stan Lee et Steve Ditko, Spider-Man a la capacité de s'accrocher aux murs, une force surhumaine, un sixième sens (« sens d'araignée ») qui l'alerte au danger, un équilibre parfait, ainsi qu'une vitesse et une agilité surhumaine16. Le personnage a été initialement conçu par Stan Lee et Steve Ditko comme intellectuellement doué, mais les auteurs postérieurs ont représenté son intellect au niveau du génie. En complément de ses pouvoirs, Peter Parker est un individu académiquement brillant qui possède une expertise dans le domaine des sciences appliquées en chimie, physique, biologie, ingénierie, mathématiques et mécanique. Avec ses talents, il conçoit lui-même ses costumes de Spider-Man, lui permettant de dissimuler son identité, et a fabriqué de nombreux dispositifs qui complètent ses pouvoirs, notamment ses lances-toiles mécaniques. Spider-Man peut s'accrocher à n'importe quelle surface par les mains et les pieds, puis, plus tard, par le reste de son corps, lui permettant d'escalader murs, plafonds et autres parois sans aucun effort, à la façon d'une araignée. Il est conscient de ce pouvoir et le maîtrise avec une grande facilité, pouvant l'activer et le désactiver à volonté. Plusieurs hypothèses ont été développées pour expliquer cette capacité : parfois décrite comme une capacité à altérer son attraction terrestre, elle a plus tardivement dans les films été expliquée par la présence de poils-crochets microscopiques sur les mains, permettant de s'accrocher sur les murs à la manière d'un gecko, hypothèse cependant réfutée en comics par le fait que n'importe quelle partie de son corps puisse adhérer, et ce, même au travers de son costume ou sur des surfaces glissantes ou mouillées.",
      img: "assets/img/spiderman.png",
      apparition: "1962-08-01",
      editeur: "Marvel"
    },
    {
      nom:'Wolverine',
      bio: "Le principal talent de Wolverine est son « facteur guérisseur » (ou « pouvoir auto-guérisseur »), en fait une régénération tissulaire incroyablement rapide qui lui permet de guérir très rapidement de ses blessures. Au fil de ses aventures, cette capacité s'est développée jusqu'à lui permettre, dans les épisodes parus aux alentours des années 2000, de reconstituer l'intégralité de son corps : lors de la saga Civil War, Wolverine se fait entièrement carboniser par l'explosion que provoque Nitro, l'homme qu'il considère comme étant responsable de la guerre civile entre les super héros. Il en résulte alors un Wolverine à l'état de squelette capable de se régénérer à partir de son cerveau. Toutefois, dans le numéro 61 de la série Wolverine paru aux États-Unis en mars 2008, son pouvoir de guérison — dont l'origine était en partie mystique — a été fortement réduit à la suite d'un combat contre Azrael, l'ange de la mort, avec qui il passe un contrat afin de récupérer la partie manquante de son âme. En échange, son pouvoir auto-guérisseur est affaibli dans des proportions non définies. D'autres conséquences heureuses découlent de cette capacité de régénération : une immunité aux maladies et à la plupart des substances toxiques (à des doses non létales, il est immunisé dès la seconde fois) ; une résistance physique exceptionnelle qui lui permet de soutenir un effort pendant plusieurs jours sans ressentir de fatigue ; un processus de vieillissement très ralenti ; enfin, une agilité et des réflexes extrêmement développés.",
      img: "assets/img/wolverine.png",
      apparition: "1974-11-01",
      editeur: "Marvel"
    }
  ];

  constructor() {
    // on teste si notre service fonctionne 
    console.log('Service prêt');

   }
   // Je crée une méthode publique pour obtenir les heros et  pour y accéder à l’information de mon service en dehors de celle-ci.
   getHeros(){
      return this.heros1 // il fait reference à ma propriété privée heros1
   }

}
