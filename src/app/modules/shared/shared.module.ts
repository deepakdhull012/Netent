import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuterClickManagerDirective } from './shared-directives/outer-click-manager.directive';
import { CustomDropDownComponent } from './shared-components/custom-drop-down/custom-drop-down.component';


  /**
   * The shared module containing drop down component and directives
   * @export
   * @class SharedModule
   * @type Module
   */
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
