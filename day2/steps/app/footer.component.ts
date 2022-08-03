import { Component } from "@angular/core";

@Component({
    selector : 'app-footer',
    template : `
    <h3>{{ message }}</h3>
    `,
    styles : [`
    h3{
        background-color : yellow;
        padding : 10px;
    }`]
})
export class FooterComp{
    message = "Copyrights reserved by DB India"
}