import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { AddorupdateComponent } from './addorupdate/addorupdate.component';
import {CheckboxModule, DialogModule, RadioButtonModule,ButtonModule} from "primeng/primeng";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    AddorupdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DialogModule,
    CheckboxModule,
    ButtonModule,
    BrowserAnimationsModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
