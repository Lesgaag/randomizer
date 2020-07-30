import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-possibilities-page',
  templateUrl: './possibilities-page.component.html',
  styleUrls: ['./possibilities-page.component.scss']
})
export class PossibilitiesPageComponent implements OnInit {
  selectedTypes: boolean;
  selectedLevels: boolean;
  selectedOrigins: boolean;

  constructor() {
    this.selectedTypes = false;
    this.selectedLevels = false;
    this.selectedOrigins = false;
   }

   // shows and hides clicked item
   toggleTypes() {
    !this.selectedTypes ? (this.selectedTypes = true) : (this.selectedTypes = false);

    this.selectedLevels = false;
    this.selectedOrigins = false;
   }

   toggleOrigins() {
    !this.selectedOrigins ? (this.selectedOrigins = true) : (this.selectedOrigins = false);

    this.selectedTypes = false;
    this.selectedLevels = false;
   }

   toggleLevels() {
    !this.selectedLevels ? (this.selectedLevels = true) : (this.selectedLevels = false);

    this.selectedOrigins = false;
    this.selectedTypes = false;
   }

  ngOnInit() {
    // adds collapsible functionality
    const coll = document.getElementsByClassName('collapsible');
    let i: number;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  }
}
