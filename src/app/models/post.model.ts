export class Post{
    loveIts: number =0;
    id: number;
    constructor(
        public title: string,
        public content: string,
        public date: Date
    ){}
}
