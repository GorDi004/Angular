import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { FormatDatePipe } from './format-date.pipe';
import { SummaPipe } from './summa.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    FormatDatePipe,
    SummaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
