import {Component, OnInit, Input} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    @Input() title: string;
    @Input() content: string;
    @Input() date: Date;
    @Input() id: number;

    constructor(private postService: PostService) {}

    ngOnInit() {
    }

    onLoveIts() {
        this.postService.loveIts(this.id);
    }

    onDontLoveIts() {
        this.postService.dontLoveIts(this.id);
    }
    
    getColor(){
        return this.postService.color(this.id);
    }
    
    onSupress(){
        this.postService.suppress(this.id);
    }

}
