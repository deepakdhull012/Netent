import { Injectable } from '@angular/core';
import { IConfiguration } from '../interfaces/configuration.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  /**
     * @name getDropDownConfig
     * @desc Provide the Dropdown configuration
     * @returns {IConfiguration}
     * @memberOf CommonService
  */
  getDropDownConfig(): IConfiguration {
    return {
      valueField: 'gameId',
      displayField: 'gameName',
      placeholder: 'Select Game',
      selectAllText: 'Select All Games',
      unSelectAllText: 'Unselect All Games',
      filterText: 'Search Games',
      allowSelectAllOption: true,
      allowSearchFilter: true,
      itemsShowLimit: 10,
    };
  }
}
