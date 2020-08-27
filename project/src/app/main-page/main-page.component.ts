import { Component, OnInit, NgModule } from '@angular/core';
import { RandomizerPageComponent } from '../randomizer-page/randomizer-page.component';
import { PossibilitiesPageComponent } from '../possibilities-page/possibilities-page.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

@NgModule({
  // Add component which should be available in main-page
  declarations: [RandomizerPageComponent, PossibilitiesPageComponent]
})

export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
