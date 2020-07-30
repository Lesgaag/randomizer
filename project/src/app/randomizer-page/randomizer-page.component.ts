import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomizer-page',
  templateUrl: './randomizer-page.component.html',
  styleUrls: ['./randomizer-page.component.scss']
})
export class RandomizerPageComponent implements OnInit {

  constructor() { }

  adjustButton() {
    // TODO: change color of button
    document.getElementById('create-character-button').innerHTML = 'Create NEW character';
  }

  randomElementType() {
    // generates array with 1000 numbers
    const typeNumberArray = Array.from(Array(1000), (x, index) => index + 1);

    // selects one random number from the array
    const selectedNumber = typeNumberArray[Math.floor(Math.random() * typeNumberArray.length)];

    // TODO: verwijderen als de functie juist werkt:
    document.getElementById('gekozen-nummer').innerHTML = selectedNumber.toString();

    // picks types based on random number
    let chosenType = '';
    let rarity = '';
    switch (selectedNumber) {
      case 1: case 2: case 3:
        chosenType = '';
        rarity = 'extremely rare';
        break;
      case 4: case 5: case 6:
        chosenType = '';
        rarity = '';
        break;
      case 7: case 8: case 9:
        chosenType = '';
        rarity = '';
        break;
      case 7: case 8: case 9:
        chosenType = '';
        rarity = '';
        break;
      default:
        chosenType = 'Normal';
        rarity = 'not rare';
    }

    // shows card with selected element type
    document.getElementById('result-card-character').removeAttribute('hidden');
    document.getElementById('result-type').innerHTML = chosenType;
    document.getElementById('result-rarity').innerHTML = rarity;
  }

  ngOnInit() {}

}
