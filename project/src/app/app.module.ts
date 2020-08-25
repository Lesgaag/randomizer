import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RandomizerPageComponent } from './randomizer-page/randomizer-page.component';
import { PossibilitiesPageComponent } from './possibilities-page/possibilities-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PossibilityTypesComponent } from './possibilities-page/possibility-types/possibility-types.component';
import { PossibilityLevelsComponent } from './possibilities-page/possibility-levels/possibility-levels.component';
import { PossibilityOriginsComponent } from './possibilities-page/possibility-origins/possibility-origins.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    MainPageComponent,
    RandomizerPageComponent,
    PossibilitiesPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    PossibilityTypesComponent,
    PossibilityLevelsComponent,
    PossibilityOriginsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
