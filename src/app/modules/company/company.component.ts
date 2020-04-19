import { Component, OnInit } from '@angular/core';

@Component({
  template: `<h2> Welcome to the Company Home</h2>
    <a routerLinkActive = "active" [routerLink]="['company-list']"> View Company List</a>
    <router-outlet> </router-outlet>`
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
