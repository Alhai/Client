import { ArticleDialogComponent } from '../article-dialog/article-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

interface Article {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
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
    },
    {
      imgSrc: '../../../assets/articles/man-who-draws.jpg',
      imgAlt: 'Homme qui dessine un croquis',
      title: '5 techniques simples pour débuter en dessin',
      description: 'Cet article propose cinq techniques simples pour ceux qui souhaitent commencer à dessiner. Avec des conseils pratiques et des exercices faciles, les débutants apprendront à maîtriser les bases du dessin et à développer leur confiance en leurs capacités artistiques.'
    },
    {
      imgSrc: '../../../assets/articles/pexels.jpg',
      imgAlt: 'Photo of a Shiba Inu',
      title: 'Comment la peinture peut transformer votre vie quotidienne',
      description: 'Découvrez comment la peinture peut avoir un impact positif sur votre vie quotidienne en favorisant la relaxation et l\'expression personnelle. Cet article explore les bienfaits de la peinture et propose des conseils pour intégrer cette activité créative dans votre routine.'
    },
    {
      imgSrc: '../../../assets/articles/man-who-create-pottery.jpg',
      imgAlt: 'Photo of a Shiba Inu',
      title: 'Créer avec de l\'argile : guide pratique pour les débutants',
      description: 'Ce guide pratique offre des conseils et des techniques pour les débutants souhaitant travailler avec de l\'argile. Apprenez les bases du modelage, découvrez les outils nécessaires et trouvez l\'inspiration pour créer vos premières pièces en céramique.'
    },
    {
      imgSrc: '../../../assets/articles/finger-painting.jpeg',
      imgAlt: 'Peinture avec les doigts',
      title: 'Le pouvoir thérapeutique de l\'art : expériences et témoignages',
      description: 'Explorez le pouvoir thérapeutique de l\'art à travers des témoignages inspirants et des études de cas. Cet article met en lumière comment l\'expression artistique peut aider à surmonter des défis émotionnels et à améliorer le bien-être mental.'
    },
    // {
    //   imgSrc: '../../../assets/articles/aquarelle.jpg',
    //   imgAlt: 'Photos d\'aquarelle',
    //   title: 'Aquarelle : astuces et techniques pour maîtriser cet art délicat',
    //   description: 'Plongez dans le monde de l\'aquarelle avec des astuces et techniques pour maîtriser cet art délicat. Cet article offre des conseils pour choisir les bons matériaux, mélanger les couleurs et créer des effets spéciaux pour des œuvres réussies.'
    // },
    {
      imgSrc: '../../../assets/articles/manufacture-of-artisanal-lamp.jpeg',
      imgAlt: 'Création de socle de lampe artisanale',
      title: 'DIY : fabriquez vos propres décorations artistiques pour la maison',
      description: 'Cet article propose des projets DIY pour créer vos propres décorations artistiques. Avec des instructions pas à pas et des idées créatives, transformez votre intérieur avec des pièces uniques et personnalisées fabriquées par vous-même.'
    }
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(article: Article): void {
    this.dialog.open(ArticleDialogComponent, {
      width: '800px',
      data: article
    });
  }
}
