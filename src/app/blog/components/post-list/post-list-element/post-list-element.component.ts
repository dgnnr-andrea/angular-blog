import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../../models/post.model';

@Component({
    selector: 'app-blog-post-list-element',
    templateUrl: 'post-list-element.component.html',
    styleUrls: ['./post-list-element.component.css']
})

export class PostListElementComponent implements OnInit {

    @Input() post: PostModel;

    ngOnInit() {
        console.log(this.post);
    }
}
