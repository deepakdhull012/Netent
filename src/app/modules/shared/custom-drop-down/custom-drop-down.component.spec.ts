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

      component.seletedItems = myService.getSelectedGames();
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
    expect(component.seletedItems).toEqual([]);
  });

  it('should expect selected Items to be added', async() => {
    component.checkChange(true, component.items[0]);
    expect(component.seletedItems).toEqual([{gameId: '1011', gameName: 'Draculla'}]);
  });

  // Check Select All Functionality
  it('should select all the elements', async() => {
    component.allSelection(true);
    expect(component.seletedItems.length).toEqual(component.items.length);
  });

  // Check Select All Functionality
  it('should unselect all the elements', async() => {
    component.allSelection(false);
    expect(component.seletedItems.length).toEqual(0);
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
});
