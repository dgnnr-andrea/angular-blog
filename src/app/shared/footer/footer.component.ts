import {Component} from '@angular/core';

@Component({
    selector: 'app-shared-footer',
    templateUrl: './footer.header.html',
    styleUrls: ['./footer.header.css']
})

export class FooterComponent {
    year = (new Date()).getFullYear();
}
