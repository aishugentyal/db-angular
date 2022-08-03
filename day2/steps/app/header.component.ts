import { Component } from "@angular/core";

@Component({
    selector : 'app-header',
    template : `
    <h1>{{ title }}</h1>
    `,
     styles : [`
     h1{
         background-color : yellow;
         padding : 10px;
         height : 100px;
         text-align : center;
         line-height : 100px
     }`]
})
export class HeaderComp{
    title = "Welcome to DB Training"
}