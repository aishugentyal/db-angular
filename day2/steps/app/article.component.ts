import { Component } from "@angular/core";

@Component({
    selector : "app-article",
    template : `
    <div>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quo, totam debitis aperiam vel architecto, cupiditate nemo reiciendis iure vero, esse obcaecati quas commodi velit voluptatibus non officiis veniam culpa!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum animi nihil ab eius? Asperiores praesentium alias corrupti veniam excepturi distinctio perspiciatis quia architecto error, recusandae porro quis ratione molestiae!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis eligendi quia itaque earum voluptas at? Sunt, veniam! Eum asperiores debitis nam eaque dicta quam quae, totam tempora quis ex nulla?
    </div>
    `,
    styles : [`
    div{
        background-color : goldenrod;
        padding : 10px;
        margin : 10px;
        text-align : justify;
        font-family : sans-serif;
    }
    `]
})
export class ArticleComp {

}