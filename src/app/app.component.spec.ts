import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CustomDropDownComponent } from './modules/shared/custom-drop-down/custom-drop-down.component';
import { SelectedGamesComponent } from './components/selected-games/selected-games.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CustomDropDownComponent,
        SelectedGamesComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.items = [];
    expect(app).toBeTruthy();
  });
});
