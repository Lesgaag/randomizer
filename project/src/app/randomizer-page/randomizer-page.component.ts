import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomizer-page',
  templateUrl: './randomizer-page.component.html',
  styleUrls: ['./randomizer-page.component.scss'],
})
export class RandomizerPageComponent implements OnInit {
  resultCardHidden = true;
  primaryButtonHidden = false;

  constructor() { }

  createResultDiv() {
    this.randomElementType('result-type', 'result-rarity');
    this.randomElementType('result-suptype', 'result-suprarity');

    this.resultCardHidden = false;
    this.primaryButtonHidden = true;
    document.getElementById('create-character-button').style.display = 'none';
  }

  onCloseClick() {
    this.resultCardHidden = true;
    document.getElementById('create-character-button').removeAttribute('hidden');
    document.getElementById('create-character-button').style.display = 'block';
  }

  randomElementType(typeSpan, raritySpan) {
    // generates array with 58 numbers
    const typeNumberArray = Array.from(Array(58), (x, index) => index + 1);

    // selects one random number from the array
    const selectedNumber = typeNumberArray[Math.floor(Math.random() * typeNumberArray.length)];

    // picks types based on random number
    let chosenType = '';
    let rarity = '';

    // TODO: add image of type
    switch (selectedNumber) {
      // type 1
      case 1: case 2: case 3: case 4: case 5:
        chosenType = 'Nature';
        rarity = 'not rare';
        break;
      // type 2
      case 6: case 7: case 8: case 9: case 10:
        chosenType = 'Fire';
        rarity = 'not rare';
        break;
      // type 3
      case 11: case 12: case 13: case 14: case 15:
        chosenType = 'Water';
        rarity = 'not rare';
        break;
      // type 4
      case 16: case 17: case 18: case 19: case 20:
        chosenType = 'Strength';
        rarity = 'not rare';
        break;
      // type 5
      case 21: case 22: case 23: case 24:
        chosenType = 'Flying';
        rarity = 'usual';
        break;
      // type 6
      case 25: case 26: case 27: case 28:
        chosenType = 'Poison';
        rarity = 'usual';
        break;
      // type 7
      case 29: case 30: case 31: case 32:
        chosenType = 'Rock';
        rarity = 'usual';
        break;
      // type 8
      case 33: case 34: case 35: case 36:
        chosenType = 'Bug';
        rarity = 'usual';
        break;
      // type 9
      case 37: case 38:
        chosenType = 'Ghost';
        rarity = 'rare';
        break;
      // type 10
      case 39: case 40:
        chosenType = 'Electric';
        rarity = 'rare';
        break;
      // type 11
      case 41: case 42:
        chosenType = 'Magic';
        rarity = 'rare';
        break;
      // type 12
      case 43: case 44:
        chosenType = 'Ice';
        rarity = 'rare';
        break;
      // type 13
      case 45:
        chosenType = 'Dragon';
        rarity = 'extremely rare';
        break;
      // type 14
      case 46:
        chosenType = 'Dark';
        rarity = 'extremely rare';
        break;
      // type 15
      case 47:
        chosenType = 'Steel';
        rarity = 'extremely rare';
        break;
      // type 16
      case 48:
        chosenType = 'Fairy';
        rarity = 'extremely rare';
        break;
      // type 17
      default:
        chosenType = 'Normal';
        rarity = 'least rare';
    }

    document.getElementById(typeSpan).innerHTML = chosenType;
    document.getElementById(raritySpan).innerHTML = rarity;
  }

  ngOnInit() {}
}
