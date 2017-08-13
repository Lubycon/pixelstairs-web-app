import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title:string = 'Pixelstairs';

    constructor() {

    }

    getTitle() {
        return this.title;
    }
}
