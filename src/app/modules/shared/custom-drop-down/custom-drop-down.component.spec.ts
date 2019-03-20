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
    spyOn(component, 'checkChange');
    spyOn(component, 'validInputDataSet');
    component.checkChange(false, component.items[0]);
    component.validInputDataSet(component.items);
  });

  it('should create', async() => {
    expect(component.checkChange).toHaveBeenCalledWith(false, component.items[0]);
  });

  it('should validate input data set', async() => {
    expect(component.validInputDataSet).toHaveBeenCalledWith(component.items);
  });

  // it('should expect selected Items to be empty', async() => {
  //   expect(component.seletedItems).toEqual([]);
  // });
});
