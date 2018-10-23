import {Post} from '../models/post.model';
import {Subject} from 'rxjs/Rx';

export class PostService {

    private posts: Post[] = [
        {
            id: 0,
            title: 'Test',
            content: 'Lorem ipsum fre igr  gzr g zr',
            date: new Date(),
            loveIts: 0
        },
        {
            id: 1,
            title: 'Afefaz',
            content: 'Lorem ipsum fre igr  gzr g zr',
            date: new Date(),
            loveIts: 0
        }
    ];
    
    postSubscription = new Subject<Post[]>();
    
    constructor() {

    }
    
    public emitPosts(){
        this.postSubscription.next(this.posts.slice());
    }
    
    public loveIts(index: number){
        let post = this.posts.find(post => post.id === index);
        post.loveIts+=1;
        this.emitPosts();
    }
    
    public dontLoveIts(index: number){
        let post = this.posts.find(post => post.id === index);
        post.loveIts-=1;
        this.emitPosts();
    }
    
    public color(index: number){
        let post = this.posts.find(post => post.id === index);
        if (post.loveIts > 0){
            return '#ccffcc';
        } else if (post.loveIts < 0){
            return '#ff6666';
        }else{
            return '';
        }     
    }
    
    public suppress(index: number){
        let test = this.posts.findIndex(post => post.id === index);
        this.posts.splice(test, 1);
        this.emitPosts();
    }
    
    public addPost(post: Post){
        this.posts.push({
            title: post.title,
            content: post.content,
            loveIts: 0,
            date: post.date,
            id: this.posts.length+1
        });
        this.emitPosts();
    }
    
}
