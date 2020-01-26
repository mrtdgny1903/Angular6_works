import { Component, OnInit, Input } from "@angular/core";
import { Customer } from "./customer";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  constructor() {}

  customers: Customer[] = [];
  selectedCustomer: Customer;
  @Input() city: string;

  ngOnInit() {
    this.customers = [
      { id: 1, name: "Murat", lastName: "Doğanay", age: 27 },
      { id: 2, name: "Merve", lastName: "Doğanay", age: 25 },
      { id: 3, name: "İrem", lastName: "Demir", age: 23 },
      { id: 4, name: "Tülay", lastName: "Ay", age: 20 },
      { id: 5, name: "Rabo", lastName: "Aksakal", age: 19 }
    ];
  }

  selectCustomer(customer: Customer) {
    this.selectedCustomer = customer;
  }

  elseFunction() {
    return "Bir kişi seçiniz";
  }
}
