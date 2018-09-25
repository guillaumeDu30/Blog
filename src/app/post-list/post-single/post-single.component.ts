import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {Post} from '../../models/Post.model';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss']
})
export class PostSingleComponent implements OnInit {

  post: Post;
  @Input() id: number;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.post = new Post('','','',0);
    this.postsService.getSinglePost(this.id).then(
      (post: Post) => {
        this.post = post;
      }
    );
  }

  onDeletePost(){
    this.postsService.removePost(this.post);
  }

  updateLoveIts(status: string){
    this.postsService.updateLovesIt(this.post, status);
  }

  getColor(){
   this.postsService.getPostColor(this.post);
  }

}
