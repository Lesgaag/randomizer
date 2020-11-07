import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss', '../app.component.scss']
})
export class NavigatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  // toggle hamburger view for mobile view
  toggleMenu() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

}
