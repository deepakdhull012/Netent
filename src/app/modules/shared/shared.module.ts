import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDropDownComponent } from './custom-drop-down/custom-drop-down.component';
import { OuterClickManagerDirective } from './../../directives/outer-click-manager.directive';

@NgModule({
  declarations: [
    CustomDropDownComponent,
    OuterClickManagerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [CustomDropDownComponent, OuterClickManagerDirective]
})
export class SharedModule { }
