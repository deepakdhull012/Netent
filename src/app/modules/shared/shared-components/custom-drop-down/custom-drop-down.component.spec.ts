import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDropDownComponent } from './custom-drop-down.component';
import { GameService } from '../../../services/game.service';
import { CommonService } from '../../../services/common.service';

describe('CustomDropDownComponent', () => {
  let component: CustomDropDownComponent;
  let fixture: ComponentFixture<CustomDropDownComponent>;
  let myService: GameService;
  let commonservice: CommonService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDropDownComponent ],
      providers: [ GameService, CommonService]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(CustomDropDownComponent);
    component = fixture.componentInstance;
      myService = fixture.debugElement.injector.get(GameService); 
      commonservice = fixture.debugElement.injector.get(CommonService); 
    });
  }));

  beforeEach(async() => {
    
    
   
   
    component.items = myService.getAllGames();

      component.selectedItems = myService.getSelectedGames();
    component.configuration = commonservice.getDropDownConfig();
    fixture.detectChanges();
    // spyOn(component, 'checkChange');
    // spyOn(component, 'validInputDataSet');
    
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expect selected Items to be empty on unselecting the only item', async() => {
    component.checkChange(false, component.items[0]);
    expect(component.selectedItems).toEqual([]);
  });

  it('should expect selected Items to be added', async() => {
    component.checkChange(true, component.items[0]);
    expect(component.selectedItems).toEqual([{gameId: '1011', gameName: 'Draculla'}]);
  });

  // Check Un Select All Functionality
  it('should unselect all the elements', async() => {
    component.allSelection(false);
    expect(component.selectedItems.length).toEqual(0);
  });

  // Check Select All Functionality
  it('should select all the elements', async() => {
    component.allSelection(true);
    expect(component.selectedItems.length).toEqual(component.items.length);
  });

  

  // Check Filter Functionality
  it('should filter elements with value and check if return correct results', async() => {
    let filterTerms = ['Draculla', 'Elements'];
    let noOfItems = [1,2];
    for(let index in filterTerms){
      component.filterItems(filterTerms[index]);
      expect(component.filteredItems.length).toEqual(noOfItems[index]);
    }   
  });

  // Remove Chip on click
  // First select all elements and then remove chip and check if selected items length reduced by 1 
  it('should remove chip from selected array', async() => {
    component.allSelection(true);
    component.removeChip(component.selectedItems[0],{stopPropagation:()=>{}});
      expect(component.selectedItems.length).toEqual(component.items.length-1);   
  });
});
