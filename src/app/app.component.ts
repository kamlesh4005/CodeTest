import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentCar: any;
  brands: any[] = [];
  carModels: any[] =  [];
  public brandErrorMsg = "";
  public modelErrorMsg = "";

  constructor(private appService: AppService){}

  ngOnInit(){
    this.appService.getBrands()
        .subscribe(data => this.brands = data,
                  error => this.brandErrorMsg = error);
    
  }

  firstDropDownChanged(val: any){
    this.currentCar = null;
    this.carModels = [];

    this.appService.getModels(val)
        .subscribe(data => this.carModels = data,
                  error => this.modelErrorMsg = error);

  }

  secondDropDownChanged(val: any){
    let myCar = this.carModels.find(item => item._id === val);
    this.currentCar = myCar;
  }

}
