import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { IConfiguration } from 'src/app/interfaces/configuration.interface';
import { IGame } from 'src/app/interfaces/game.interface';
import {style, animate, transition, trigger} from '@angular/animations';




@Component({
  selector: 'app-select-game',
  templateUrl: './select-game.component.html',
  styleUrls: ['./select-game.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(200, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(200, style({opacity:0})) 
      ])
    ])
  ]
})
export class SelectGameComponent implements OnInit{

  @Input('items') items;
  @Input('selectedItems') seletedItems;
  @Input('dropDownConfiguration') configuration: IConfiguration;
  @Output('onSeletionChange') selectionChanged = new EventEmitter<[]>();

  comboItems = [];


  isExpanded = false;
  allSelected: boolean = false;

 filteredItems : any;

  

  ngOnInit() {
    if (this.validInputDataSet(this.items) && this.validInputDataSet(this.seletedItems)) {
      this.generateCompatibileItems();
      if((this.seletedItems.length === this.comboItems.length) && this.seletedItems.length>0) {
        this.allSelected = true;
      }
    } else {
      console.log('Improper Data Set Passed.. Please Check for mismatch among data keys and configuration settings..');
      alert('Inavalid Data format provided..')
    }
    
  }

  generateCompatibileItems() {
    for(let item of this.items) {
      if(this.isInSelectedItems(item)) {
        item['isSelected'] = true;
      } else {
        item['isSelected'] = false;
      }
      this.comboItems.push(item);
    }
    this.filteredItems = this.comboItems;
  }

  validInputDataSet(value) {
    let allRecordsOk = true;
    for(let item of value) {
      let dataKeys = Object.keys(item);
      if(!(dataKeys.indexOf(this.configuration.valueField)>=0 && dataKeys.indexOf(this.configuration.displayField)>=0)) {
        allRecordsOk = false;
        break;
      }
    }
    return allRecordsOk;
    
  }

  isInSelectedItems(item) {
    return this.seletedItems.filter((it)=>{
      return item[this.configuration.valueField] == it[this.configuration.valueField];
    }).length ? true: false;
  }


  filterItems(filterValue) {
    if(filterValue) {
      this.filteredItems = Object.assign([], this.comboItems).filter(
      item => item[this.configuration.displayField].toLowerCase().indexOf(filterValue.toLowerCase()) > -1
   )
    } else {
      this.filteredItems = this.items;
    }
     
  }

  allSelection(isSelectAll) {
    this.comboItems = this.comboItems.map((item)=>{
      item.isSelected = isSelectAll;
      return item;
    });
    this.filteredItems = this.comboItems;
    const selectedList = this.filteredItems.filter((item)=>{
      return item.isSelected;
    });
    this.seletedItems = selectedList.map((listItem)=>{   
      let temp = Object.assign({},listItem);   
      delete temp['isSelected'];
      return temp;
    })
    this.allSelected = isSelectAll;
    this.selectionChanged.emit(this.seletedItems);
    
  }

  checkChange(val,item) {
    item.isSelected = val;
    const selectedList = this.comboItems.filter((item)=>{
      return item.isSelected;
    });
    this.seletedItems = selectedList.map((listItem)=>{   
      let temp = Object.assign({},listItem);   
      delete temp['isSelected'];
      return temp;
    })
    this.allSelected = this.seletedItems.length === this.comboItems.length;
    this.selectionChanged.emit(this.seletedItems);
  }

  chipClicked(e:Event) {
    e.stopPropagation();
  }

  removeChip(chip,e:Event) {
    e.stopPropagation();
    this.seletedItems = this.seletedItems.filter((item)=>{
      return chip[this.configuration.valueField] != item[this.configuration.valueField];      
    });
    this.filteredItems = this.filteredItems.map((item)=>{
      if(chip[this.configuration.valueField] === item[this.configuration.valueField]) {
        item['isSelected'] = false;
      }
      return item;
    });
    this.allSelected = this.seletedItems.length === this.comboItems.length;
    this.selectionChanged.emit(this.seletedItems);
  }

  onClickOutside(e) {
    if(e.value) {
      this.isExpanded = false;
    }
    
  }
}
