import { Component, OnInit } from '@angular/core';
import { IGame } from './interfaces/game.interface';
import { IConfiguration } from './interfaces/configuration.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  gameList = [];
  selectedGamesList: IGame[] = [];
  dropdownSettings: IConfiguration = <IConfiguration>{};


  constructor() {

  }

  ngOnInit() {
    this.gameList = [
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

    this.selectedGamesList = [
      { gameId: '1011', gameName: 'Draculla' }
    ];

    this.dropdownSettings = {
      valueField: 'gameId',
      displayField: 'gameName',
      placeholder: 'Select Game',
      selectAllText: 'Select All Games',
      unSelectAllText: 'Unselect All Games',
      filterText: 'Search Games',
      allowSelectAllOption: true,
      itemsShowLimit: 3,
      allowSearchFilter: true,

    };
  }

  seletionChanged(items) {
    this.selectedGamesList = items;
  }
  
  
}
