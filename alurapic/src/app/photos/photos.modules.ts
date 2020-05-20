import { PhotoFormeModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
  imports: [
    PhotoModule,
    PhotoListModule,
    PhotoFormeModule
  ]
})
export class PhotosModule {

}
