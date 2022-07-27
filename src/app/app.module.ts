import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditLayoutComponent } from './edit-layout/edit-layout.component';
import { ElementsComponent } from './elements/elements.component';
import { ViewLayoutComponent } from './view-layout/view-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    ViewLayoutComponent,
    EditLayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
