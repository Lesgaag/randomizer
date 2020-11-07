import { Component, OnInit, NgModule } from '@angular/core';
import { RandomizerPageComponent } from '../randomizer-page/randomizer-page.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss', '../app.component.scss']
})

@NgModule({
  // Add component which should be available in main-page
  declarations: [RandomizerPageComponent]
})

export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
