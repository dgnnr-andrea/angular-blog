import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './aside/search/search.component';
import {CategoriesComponent} from './aside/categories/categories.component';
import {PupularComponent} from './aside/popular/pupular.component';
import {TagsComponent} from './aside/tags/tags.component';
import {AsideComponent} from './aside/aside.component';
import {RouterModule} from '@angular/router';
import {LoadingSpinnerComponent} from './loading spinner/loading-spinner.components';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SearchComponent,
        CategoriesComponent,
        PupularComponent,
        TagsComponent,
        AsideComponent,
        LoadingSpinnerComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SearchComponent,
        AsideComponent,
        LoadingSpinnerComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class SharedModule {}
