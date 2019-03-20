import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SharedModule } from './modules/shared/shared.module';

import { AppComponent } from './app.component';
import { SelectedGamesComponent } from './components/selected-games/selected-games.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectedGamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
