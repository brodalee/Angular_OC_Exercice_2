import {Component, OnInit, OnDestroy} from '@angular/core';
import {Post} from '../models/post.model';
import {Subscription} from 'rxjs/Rx';
import {PostService} from '../services/post.service';

@Component({
    selector: 'app-post-view',
    templateUrl: './post-view.component.html',
    styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit, OnDestroy {

    posts: Post[];
    postSubscription: Subscription;

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.postSubscription = this.postService.postSubscription.subscribe(
            (posts: Post[]) => {
                this.posts = posts;
            }
        )
        this.postService.emitPosts();
    }
    
    ngOnDestroy() {
        this.postSubscription.unsubscribe();
    }

}
