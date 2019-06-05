import {Component, OnInit} from '@angular/core';
import {PostService} from '../../servicies/post.service';
import {PostsFakerService} from '../../servicies/posts-faker.service';
import set = Reflect.set;

@Component({
    selector: 'app-blog-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

    fetching = false;
    lastFetch = null;
    posts = [];

    constructor(
        private postService: PostService,
        private postsFakerService: PostsFakerService
    ) {}

    ngOnInit() {
        this.lastFetch = localStorage.getItem('blog_last_fetch');

        this.posts = this.postsFakerService.fetchPosts();

        this.fetching = true;
        setTimeout(() => {
            this.fetching = false;
        }, 333);
    }
}
