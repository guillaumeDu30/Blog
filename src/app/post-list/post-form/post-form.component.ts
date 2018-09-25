import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostsService} from '../../services/posts.service';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {Post} from '../../models/Post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private postService: PostsService,
              private router: Router,
              private datePipe: DatePipe) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const createdAt = this.datePipe.transform(new Date(), 'MM/dd/yyyy, hh:mm a');
    const lovesIts = 0;

    const newPost = new Post(title, content, createdAt, lovesIts);

    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);

  }

}
