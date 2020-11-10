import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})

export class CollapsibleComponent {

  openSection(section) {
    const panel = document.getElementById(section);
    if (panel.hasAttribute('hidden')) {
      panel.removeAttribute('hidden');
    } else {
      panel.setAttribute('hidden', '');
    }
  }
}
