import {Subject} from 'rxjs';
import {Post} from '../models/Post.model';
import * as firebase from 'firebase';

export class PostsService {
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();


  constructor() {
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      });
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postE1) => {
        if (postE1 === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  updateLovesIt(post: Post, status: string){
    if(status === 'add'){
      post.loveIts++;
    }else if(status === 'remove'){
      post.loveIts--;
    }
    this.updatePost(post);
  }

  getPostColor(post: Post){
    if( post.loveIts > 0){
      return 'green';
    }else if( post.loveIts < 0){
      return 'red'
    }else {
      return 'black';
    }
  }

  updatePost(post: Post){
    const postIndexToUpdate =  this.posts.findIndex(
      (postE1) => {
        if(postE1.createdAt === post.createdAt){
          return true;
        }
      }
    );

    this.posts[postIndexToUpdate] = post;
    this.savePosts();
    this.emitPosts();
  }


  getSinglePost(id: number){
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/'+id).once('value').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

}
