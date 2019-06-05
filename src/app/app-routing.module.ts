import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {postsRoutes} from './blog/blog-routing.module';

const appRoutes: Routes = [
  { path: '', children: postsRoutes }
]

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})

export class AppRoutingModule { }
