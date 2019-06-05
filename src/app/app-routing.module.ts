import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {postsRoutes} from './blog/blog-routing.module';

const appRoutes: Routes = [
  { path: '', children: postsRoutes },
  { path: '**', redirectTo: '/contact'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
