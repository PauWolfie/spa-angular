import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BdyHomeComponent } from './bdy-home/bdy-home.component';
import { BdyCbbsComponent } from './bdy-cbbs/bdy-cbbs.component';
import { BdyQuickComponent } from './bdy-quick/bdy-quick.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BdyHomeComponent,
    BdyCbbsComponent,
    BdyQuickComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
