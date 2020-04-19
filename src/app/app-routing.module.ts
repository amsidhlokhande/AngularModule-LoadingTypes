import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: '',
    redirectTo: '/company',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
