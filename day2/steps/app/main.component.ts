import { Component } from "@angular/core";

@Component({
    selector : 'app-main',
    template : `
    <section>
        <app-article></app-article>
        <app-article></app-article>
    </section>
    `,
    styles : [`
    section{
        background-color : yellow;
        padding : 10px;
    }
    `]
})
export class MainComp{
}