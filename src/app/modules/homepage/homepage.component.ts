import { Component } from '@angular/core';

interface Article {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  articles: Article[] = [
    {
      imgSrc: '../../../assets/articles/painting-blog.jpg',
      imgAlt: 'Plan de travail de peintre',
      title: 'Peindre avec passion : Les secrets pour libérer votre créativité sur la toile',
      description: 'Plongez dans le processus de création artistique avec passion, découvrez des conseils pour surmonter les blocages créatifs et trouvez votre propre style distinctif dans la peinture, en cultivant une connexion profonde avec votre sujet et en exprimant votre vision unique à travers la toile.'
    },
    {
      imgSrc: '../../../assets/articles/pottery.jpg',
      imgAlt: 'Photo de poteries',
      title: 'Les 7 loisirs artistiques accessibles à tous, peu importe votre niveau de talent',
      description: 'Découvrez sept activités artistiques accessibles à tous, accompagnées de conseils pratiques pour vous aider à vous lancer et à explorer votre créativité. Peu importe votre niveau de compétence, il y a une activité artistique pour vous.'
    },
    {
      imgSrc: '../../../assets/articles/exterior-painting.jpg',
      imgAlt: 'Peinture en extérieur',
      title: 'Exploration artistique : Comment trouver l\'inspiration dans le monde qui nous entoure',
      description: 'Découvrez comment observer attentivement le monde qui nous entoure peut nourrir votre créativité artistique, avec des conseils pratiques pour stimuler votre imagination et redécouvrir la beauté dans les petites choses de la vie.'
    },]
  videoUrl = 'https://hx7cqa3okvatltnn.public.blob.vercel-storage.com/Montage-VFinale-y7AjeBvuZEzZ1VEbrSkFx8RbUprTHb.mp4';

}
