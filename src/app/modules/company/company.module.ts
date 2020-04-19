import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './components/company-list/company-list.component';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class CompanyModule {
  constructor() {
    console.log('Company Module loaded successfully!!!');
  }
}
