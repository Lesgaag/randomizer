import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RandomizerPageComponent } from './randomizer-page/randomizer-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    MainPageComponent,
    RandomizerPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    FooterComponent,
    CarouselComponent,
    CollapsibleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
