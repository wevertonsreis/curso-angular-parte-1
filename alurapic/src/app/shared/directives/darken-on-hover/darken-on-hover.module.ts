import { DarkenOnHoverDirective } from './darken-on-hover.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DarkenOnHoverDirective],
  exports: [DarkenOnHoverDirective]
})
export class DarkenOnHoverModule {

}
