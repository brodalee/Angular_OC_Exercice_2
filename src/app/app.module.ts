import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router/';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostViewComponent } from './post-view/post-view.component';
import { AddPostFormComponent } from './add-post-form/add-post-form.component';
import {PostService} from './services/post.service';
import { PostComponent } from './post/post.component';


const appRoute: Routes = [
    {path: '', component: PostViewComponent},
    {path: 'addpost', component: AddPostFormComponent},
    {path: 'posts', component: PostViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostViewComponent,
    AddPostFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
      PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
