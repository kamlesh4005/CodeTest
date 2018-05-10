import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  inputs: ['carDetail']
})
export class CarDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
