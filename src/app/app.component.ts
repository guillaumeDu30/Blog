import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'posts';

  postList = [
    {
      title: 'Mon premier post',
      content: 'qsdqsd qsdqsd  qsdqsdqsdqs qsdqsdq sd qd qsd qsd fg sgsdfgsd qsf sg qsfsdg qf s dfsdf sdfsdd',
      loveits: 1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'qsdqsd qsdqsd  qsdqsdqsdqs qsdqsdq sd qd qsd qsd fg sgsdfgsd qsf sg qsfsdg qf s dfsdf sdfsdd',
      loveits: -1,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'qsdqsd qsdqsd  qsdqsdqsdqs qsdqsdq sd qd qsd qsd fg sgsdfgsd qsf sg qsfsdg qf s dfsdf sdfsdd',
      loveits: 0,
      created_at: new Date()
    },
  ];


}
