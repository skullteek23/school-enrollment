import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './components/student/student.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { AddressInfoComponent } from './components/address-info/address-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    BasicInfoComponent,
    AddressInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
