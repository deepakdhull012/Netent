import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/app/interfaces/game.interface';

/**
   * The seleted games component displayes in a list
   * @export
   * @class SelectedGamesComponent
   */

@Component({
  selector: 'app-selected-games',
  templateUrl: './selected-games.component.html',
  styleUrls: ['./selected-games.component.scss']
})
export class SelectedGamesComponent {

  @Input('games') selectedGamesList: IGame[];

  constructor() { }

}
