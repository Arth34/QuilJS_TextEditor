import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   QuillModule.forRoot(),
   MatButtonModule,
   MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
