import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './company-list.component.html',
})
export class CompanyListComponent implements OnInit {
  companies: any;

  constructor() { }

  ngOnInit(): void {

    this.companies = [
      {
        "code": "001",
        "Name": "HCL"
      },
      {
        "code": "002",
        "Name": "Deutsche Bank"
      },
      {
        "code": "003",
        "Name": "Capgemini"
      },
      {
        "code": "004",
        "Name": "Sungard"
      },
      {
        "code": "005",
        "Name": "Accenture"
      },
      {
        "code": "006",
        "Name": "Financial Software And System(P)"
      }

    ];

  }

}
