import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  


  constructor(private http:HttpClient) { }
  url="http://localhost:8008";

  signin(modell:Customer){
   return this.http.post(`${this.url}/api/login`,modell,{responseType:"text"});
  }
}
