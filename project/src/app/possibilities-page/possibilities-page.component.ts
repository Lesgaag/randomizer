import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-possibilities-page',
  templateUrl: './possibilities-page.component.html',
  styleUrls: ['./possibilities-page.component.scss']
})
export class PossibilitiesPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

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
