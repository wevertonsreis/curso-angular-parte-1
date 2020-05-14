import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PhotosModel } from './photos/photos.modules';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModel,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
