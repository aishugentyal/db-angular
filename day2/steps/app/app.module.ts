import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComp } from './article.component';
import { FooterComp } from './footer.component';
import { HeaderComp } from './header.component';
import { MainComp } from './main.component';

@NgModule({
  /* a list of components pipes directives that will be used in your application */
  declarations: [ AppComponent, HeaderComp, FooterComp, MainComp, ArticleComp ],

  /* import default and custom modules */
  imports: [ BrowserModule ],
  /* a list of commonly used logic or data */
  providers: [],
  /* the main component that shows your application */
  bootstrap: [ AppComponent ]
})
export class AppModule { }
