import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './person-list.component.html',
})
export class PersonListComponent implements OnInit {
  persons: any;
  constructor() { }

  ngOnInit(): void {
    this.persons = [
      {
        "id": 1,
        "name": "Amsidh",
        "age": 37,
        "city": "Pune"
      },
      {
        "id": 2,
        "name": "Sanjay",
        "age": 35,
        "city": "Shirnal"
      },
      {
        "id": 3,
        "name": "Raju",
        "age": 33,
        "city": "Bijapur"
      },
      {
        "id": 4,
        "name": "********",
        "age": 40,
        "city": "Karad"
      },
      {
        "id": 5,
        "name": "Anjali",
        "age": 34,
        "city": "Pride World City"
      }
    ];
  }

}
