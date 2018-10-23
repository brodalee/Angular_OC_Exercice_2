import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';
import {Post} from '../models/post.model';

@Component({
    selector: 'app-add-post-form',
    templateUrl: './add-post-form.component.html',
    styleUrls: ['./add-post-form.component.css']
})
export class AddPostFormComponent implements OnInit {

    constructor(private postService: PostService, private routes: Router) {}

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        let title = form.value['title'];
        let content = form.value['content'];
        this.postService.addPost(new Post(title, content, new Date()));
        this.routes.navigate(['posts']);
    }

}
