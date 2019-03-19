import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

export interface IConfiguration {
      valueField: string,    // Value Corresponding To A dropdown item
      displayField: string,  // Display Value Corresponding To A dropdown item
      placeholder: string,   // Drop down Placeholder
      selectAllText: string,  // Drop Down select all items text
      filterText: string,     //Drop down filter placeholder
      unSelectAllText: string,   // Drop down unselect all text
      itemsShowLimit: number,     // Drop down seleted items/chips limit 
      allowSearchFilter: boolean,  // To Enable/Disable search option 
      allowSelectAllOption: boolean   // To Enable/Disable select all option
}