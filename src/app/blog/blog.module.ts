import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostListComponent} from './components/post-list/post-list.component';
import {BlogRoutingModule} from './blog-routing.module';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {PostService} from './servicies/post.service';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {PostsFakerService} from './servicies/posts-faker.service';
import {PostListElementComponent} from './components/post-list/post-list-element/post-list-element.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';

@NgModule({
    declarations: [
        PostListComponent,
        PostListElementComponent,
        PostDetailComponent,
        AboutComponent,
        ContactComponent
    ],
    providers: [
        PostService,
        PostsFakerService
    ],
    imports: [
        CommonModule,
        SharedModule,
        BlogRoutingModule,
        HttpClientModule
    ]
})

export class BlogModule {}
