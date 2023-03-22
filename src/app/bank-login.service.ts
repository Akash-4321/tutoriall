import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banklogin } from './banklogin';

@Injectable({
  providedIn: 'root'
})
export class BankLoginService {


  constructor(private http:HttpClient) { }

  url="http://localhost:8009";

  login(model:Banklogin){
   return this.http.post(`${this.url}/Admin/login`,model,{responseType:"text"});
  }


}
