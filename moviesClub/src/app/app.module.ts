import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './core/navbar/navbar.component';

import { AppComponent } from './app.component';
import { MovieModule } from './movie/movie.module';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    MovieModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
