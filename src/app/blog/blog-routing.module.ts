import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from './components/post-list/post-list.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';

export const postsRoutes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: ':id', component: PostDetailComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(postsRoutes)
    ],
    exports: [RouterModule]
})

export class BlogRoutingModule {}
