import { Component, OnInit } from '@angular/core';
import { IGame } from './interfaces/game.interface';
import { IConfiguration } from './interfaces/configuration.interface';
import { GameService } from './services/game.service';
import { CommonService } from './services/common.service';

/**
   * Root Component 
   * @export
   * @class AppComponent
   * @implements { OnInit }
   */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  gameList: IGame[] = [];    
  selectedGamesList: IGame[] = [];
  dropdownSettings: IConfiguration = <IConfiguration>{}; // To Customize The Dropdown e.g. hiding filter or no of chips to be displayed


  constructor(
    private gameServie: GameService,
    private commonService: CommonService
    ) {

  }

  /**
   * Fetch Initial Data Set and Configurations
   * @memberof AppComponent
   */

  ngOnInit() {
    this.gameList = this.gameServie.getAllGames();
    this.selectedGamesList = this.gameServie.getSelectedGames();
    this.dropdownSettings = this.commonService.getDropDownConfig();
  }

  /**
   * Callback for selection changed event of custom drop down
   * @memberof AppComponent
   * @param(items: [])
   */

  seletionChanged(items) {
    this.selectedGamesList = items;
  }
}
