import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppComponent } from './app.component';
import { SelectGameComponent } from './components/select-game/select-game.component';
import { OuterClickManagerDirective } from './directives/outer-click-manager.directive';

@NgModule({
  declarations: [
    AppComponent,
    SelectGameComponent,
    OuterClickManagerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
