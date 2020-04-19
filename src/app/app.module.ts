import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './modules/company/company.module';
import { PersonModule } from './modules/person/person.module';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule( {
  declarations: [
    AppComponent,
    ContactusComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    CompanyModule,
    PersonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
