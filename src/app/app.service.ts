import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IBrand } from './brand';
import { IModel } from './model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getBrands(): Observable<IBrand[]>{
    return this.http.get<IBrand[]>("http://localhost:3000/api/brands")
                    .catch(this.errorHandler);
  }

  getModels(id): Observable<IModel[]>{
    return this.http.get<IModel[]>("http://localhost:3000/api/models/"+id)
                    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
