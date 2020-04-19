import { Component, OnInit } from '@angular/core';

@Component({
  template: `<h2> Welcome to the Person Home</h2>
    <a routerLinkActive = "active" [routerLink]="['person-list']"> View Person List</a>
    <router-outlet></router-outlet>`
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
