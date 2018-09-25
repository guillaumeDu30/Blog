import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {PostsService} from './services/posts.service';
import { PostSingleComponent } from './post-list/post-single/post-single.component';
import {PostFormComponent} from './post-list/post-form/post-form.component';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';

const approutes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'new', component: PostFormComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: '**', redirectTo: 'posts'},
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HeaderComponent,
    PostFormComponent,
    PostSingleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [
    PostsService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
