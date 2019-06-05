import {Component, OnInit} from '@angular/core';
import {PostModel} from '../../models/post.model';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-blog-post-detail',
    templateUrl: 'post-detail.component.html',
    styleUrls: ['./post-detail.component.css']
})

export class PostDetailComponent implements OnInit {

    fetching = false;
    private post: PostModel;

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.fetching = true;
        setTimeout(() => {
            this.fetching = false;
        }, 333);
    }
}
