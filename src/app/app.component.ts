import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'posts';

 /* postList = [
    {
      title: 'Mon premier post',
      content: '« Texte » est issu du mot latin « textum », dérivé du verbe « texere » qui signifie « tisser ». Le mot s\'applique à l\'entrelacement des fibres utilisées dans le tissage, voir par exemple Ovide : « Quo super iniecit textum rude sedula Baucis = (un siège) sur lequel Baucis empressée avait jeté un tissu grossier »2 ou au tressage (exemple chez Martial « Vimineum textum = panier d\'osier tressé »). Le verbe a aussi le sens large de construire comme dans « basilicam texere = construire une basilique » chez Cicéron3. ',
      loveits: 1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Le sens figuré d\'éléments de langage organisés et enchaînés apparaît avant l\'Empire romain : il désigne un agencement particulier du discours. Exemple : « epistolas texere = composer des épîtres » - Cicéron (Ier siècle av. J.-C.)4 ou plus nettement chez Quintilien (Ier siècle apr. J.-C.) : « verba in textu jungantur = l\'agencement des mots dans la phrase »5. ',
      loveits: -1,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Les formes anciennes du Moyen Âge désignent au XIIe siècle le volume qui contient le texte sacré des Évangiles, puis au XIIIe siècle. le texte original d\'un livre saint ou des propos de quelqu\'un. Au XVIIe siècle le mot s’applique au passage d\'un ouvrage pris comme référence et au début du XIXe siècle le mot texte a son sens général d\'« écrit »6. ',
      loveits: 0,
      created_at: new Date()
    },
  ];*/


  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBH2Yf3iTCL0bWlw_vkPjZQs0I0kZAKfJo",
      authDomain: "posts-e7e3f.firebaseapp.com",
      databaseURL: "https://posts-e7e3f.firebaseio.com",
      projectId: "posts-e7e3f",
      storageBucket: "",
      messagingSenderId: "346366692408"
    };
    firebase.initializeApp(config);
  }




}
