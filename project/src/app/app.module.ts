import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RandomizerPageComponent } from './randomizer-page/randomizer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    MainPageComponent,
    RandomizerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
