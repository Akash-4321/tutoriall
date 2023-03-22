import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../userbank/customer';
import { ServiceService } from '../userbank/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  modell: Customer=new Customer();

  constructor(private service: ServiceService,private router:Router){}

  signin(){
    this.service.signin(this.modell).subscribe(
      (respp:any)=>{
        console.log(respp);
        if(respp=="return user not authenticated"){
          alert(respp);
        }
        else  if(respp=="user or password not match"){
          alert(respp);
        }
        else  if(respp=="there is an error"){
          alert(respp);
        }else{
        localStorage.setItem("user_token",respp);
        this.router.navigate(["/home"]);
        }
      
      }
    )
   }
}



