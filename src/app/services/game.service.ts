import { Injectable } from '@angular/core';
import { IGame } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  /**
     * @name getAllGames
     * @desc Provide the List of all available games
     * @returns {IGame[]}
     * @memberOf GameService
  */

  getAllGames(): IGame[] {
    return [
      { gameId: '1011', gameName: 'Draculla' },
      { gameId: '1012', gameName: 'Lost Relics' },
      { gameId: '1013', gameName: 'Gonzo\'s Quest' },
      { gameId: '1014', gameName: 'Warlords'},
      { gameId: '1015', gameName: 'Elements'},
      { gameId: '1016', gameName: 'Twin Spin'},
      { gameId: '1017', gameName: 'Criket' },
      { gameId: '1018', gameName: 'Lost Relics' },
      { gameId: '1019', gameName: 'Gonzo\'s Quest' },
      { gameId: '1020', gameName: 'Warlords'},
      { gameId: '1021', gameName: 'Elements'},
      { gameId: '1022', gameName: 'Twin Spin'}
    ];
  }

  /**
     * @name getSelectedGames
     * @desc Provide the List of all initially selected games
     * @returns {IGame[]}
     * @memberOf GameService
  */

  getSelectedGames(): IGame[] {
    return [
      { gameId: '1011', gameName: 'Draculla' }
    ];
  }

  getDropDown
}
