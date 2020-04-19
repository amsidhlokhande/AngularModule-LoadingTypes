import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonComponent } from './person.component';


const personRoutes: Routes = [
  {
    path: 'person',
    component: PersonComponent,
    children: [
      {
        path: 'person-list',
        component: PersonListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(personRoutes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
