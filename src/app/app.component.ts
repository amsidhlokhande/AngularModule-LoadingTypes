import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
             <nav [ngClass] = "'menu'">
                      <ul>
                          <li><a routerLink="/company" routerLinkActive = "active"> Company </a></li>  
                          <li><a routerLink="/person" routerLinkActive = "active"> Person </a></li>
                          <li> <a routerLink="/contactus" routerLinkActive="active">Contact Us</a></li>
                      </ul>
             </nav>
                <div [ngClass] = "'parent-container'">
                    <router-outlet> </router-outlet>
                </div>
            `
})
export class AppComponent {
}
