import { PhotoFormComponent } from './photo-form/photo-form.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class PhotosModule {

}
