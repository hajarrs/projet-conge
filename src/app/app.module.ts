import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployersComponent } from './model/list-employers/list-employers.component';
import { ListEmployerComponent } from './list-employer/list-employer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployersComponent,
    ListEmployerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
