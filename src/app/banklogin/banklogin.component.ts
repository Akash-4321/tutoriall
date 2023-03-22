import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BankLoginService } from '../bank-login.service';
import { Banklogin } from '../banklogin';

@Component({
  selector: 'app-banklogin',
  templateUrl: './banklogin.component.html',
  styleUrls: ['./banklogin.component.css']
})
export class BankloginComponent {
   model:Banklogin=new Banklogin();

   constructor(private service:BankLoginService ,private router:Router){}

   login(){
    this.service.login(this.model).subscribe(
      (resp:any)=>{
        console.log(resp);
        if(resp=="return user not authenticated"){
          alert(resp);
        }
        else  if(resp=="user or password not match"){
          alert(resp);
        }
        else  if(resp=="there is an error"){
          alert(resp);
        }else{
        localStorage.setItem("user_token",resp);
        this.router.navigate(["/approve"]);
        }
      }
    )
   }
}
