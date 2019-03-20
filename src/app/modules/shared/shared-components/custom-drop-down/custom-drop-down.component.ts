import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { IConfiguration } from 'src/app/interfaces/configuration.interface';
import { style, animate, transition, trigger } from '@angular/animations';

  /**
   * The custom drop-down component
   * @export
   * @class CustomDropDownComponent
   * @implements { OnInit }
   */

@Component({
  selector: 'app-custom-drop-down',
  templateUrl: './custom-drop-down.component.html',
  styleUrls: ['./custom-drop-down.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(200, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CustomDropDownComponent implements OnInit {

  @Input('items') items;
  @Input('selectedItems') selectedItems;
  @Input('dropDownConfiguration') configuration: IConfiguration;
  @Output('onSeletionChange') selectionChanged = new EventEmitter<[]>();

  comboItems = [];
  isExpanded = false;
  allSelected = false;
  filteredItems: any = [];

  constructor() { }

  /**
   * This Method is called to initialize the combo box
   * @memberof CustomDropDownComponent
   */

  ngOnInit() {
    // Validate Input Data Set
    if (this.validInputDataSet(this.items) && this.validInputDataSet(this.selectedItems)) {
      // Modify Input Data Set Format compatible to Custom Combo box
      this.generateCompatibileItems();

      // Check If all items are selected or not
      if ((this.selectedItems.length === this.comboItems.length) && this.selectedItems.length > 0) {
        this.allSelected = true;
      }
      // To Handle Improper itemshowlimit in configuration Starts Here 
      if (this.configuration.itemsShowLimit < 0) {
        this.configuration.itemsShowLimit = 0;
      } else if (this.configuration.itemsShowLimit > this.comboItems.length) {
        this.configuration.itemsShowLimit = this.comboItems.length;
      }
    } else {
      console.log('Improper Data Set Passed.. Please Check for mismatch among data keys and configuration settings..');
      alert('Inavalid Data format provided..')
    }
  }

  /**
   * Provide items in the format required for combo box
   * @memberof CustomDropDownComponent
   */

  generateCompatibileItems() {
    for (let item of this.items) {
      if (this.isInSelectedItems(item)) {
        item['isSelected'] = true;
      } else {
        item['isSelected'] = false;
      }
      this.comboItems.push(item);
    }
    this.filteredItems = this.comboItems;
  }

  /**
   * Validate the input data set according to configuration
   * @memberof CustomDropDownComponent
   */

  validInputDataSet(value) {
    let allRecordsOk = true;
    for (let item of value) {
      let dataKeys = Object.keys(item);
      if (!(dataKeys.indexOf(this.configuration.valueField) >= 0 && dataKeys.indexOf(this.configuration.displayField) >= 0)) {
        allRecordsOk = false;
        break;
      }
    }
    return allRecordsOk;

  }

  /**
   * Checks whether an item is in seleted items list or not
   * @memberof CustomDropDownComponent
   */

  isInSelectedItems(item) {
    return this.selectedItems.filter((it) => {
      return item[this.configuration.valueField] == it[this.configuration.valueField];
    }).length ? true : false;
  }


  /**
   * Filter the items on the basis of search field value
   * @memberof CustomDropDownComponent
   */

  filterItems(filterValue) {
    if (filterValue) {
      this.filteredItems = Object.assign([], this.comboItems).filter(
        item => item[this.configuration.displayField].toLowerCase().indexOf(filterValue.toLowerCase()) > -1
      )
    } else {
      this.filteredItems = this.items;
    }

  }
  /**
   * Handles the select all and unselect all event 
   * @memberof CustomDropDownComponent
   */

  allSelection(isSelectAll) {
    this.comboItems = this.comboItems.map((item) => {
      item.isSelected = isSelectAll;
      return item;
    });
    this.filteredItems = this.comboItems;
    const selectedList = this.filteredItems.filter((item) => {
      return item.isSelected;
    });
    this.selectedItems = selectedList.map((listItem) => {
      let temp = Object.assign({}, listItem);
      delete temp['isSelected'];
      return temp;
    })
    this.allSelected = isSelectAll;
    this.selectionChanged.emit(this.selectedItems);

  }

  /**
   * Handle the event whenever an item is selected or unselected
   * @memberof CustomDropDownComponent
   */

  checkChange(val, item) {
    item.isSelected = val;
    const selectedList = this.comboItems.filter((item) => {
      return item.isSelected;
    });
    this.selectedItems = selectedList.map((listItem) => {
      let temp = Object.assign({}, listItem);
      delete temp['isSelected'];
      return temp;
    })
    this.allSelected = this.selectedItems.length === this.comboItems.length;
    this.selectionChanged.emit(this.selectedItems);
  }

  /**
   * To prevent closing of drop down on chip click
   * @memberof CustomDropDownComponent
   */

  chipClicked(e: Event) {
    e.stopPropagation();
  }

  /**
   * To remove selected item/ chip on remove icon click
   * @memberof CustomDropDownComponent
   */

  removeChip(chip, e) {
    e.stopPropagation();
    this.selectedItems = this.selectedItems.filter((item) => {
      return chip[this.configuration.valueField] != item[this.configuration.valueField];
    });
    this.filteredItems = this.filteredItems.map((item) => {
      if (chip[this.configuration.valueField] === item[this.configuration.valueField]) {
        item['isSelected'] = false;
      }
      return item;
    });
    this.allSelected = this.selectedItems.length === this.comboItems.length;
    this.selectionChanged.emit(this.selectedItems);
  }

  /**
   * To close the drop down on outside click
   * @memberof CustomDropDownComponent
   */
  onClickOutside(e) {
    if (e.value) {
      this.isExpanded = false;
    }

  }

}
