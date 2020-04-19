import { NgModule } from '@angular/core';
import { PersonComponent } from './person.component';
import { PersonRoutingModule } from './person-routing.module';
import { PersonListComponent } from './components/person-list/person-list.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonComponent,
    PersonListComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
})
export class PersonModule {
  constructor() {
    console.log('Person Module loaded successfully!!!');
  }
}
