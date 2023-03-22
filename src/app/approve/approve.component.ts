import { Component, OnInit } from '@angular/core';
import { Accountdetailsmodel } from '../approvee/accountdetailsmodel';
import { BankCustomerService } from '../approvee/bank-customer.service';
import { Loginmodel } from '../approvee/loginmodel';




@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})


  export class  ApproveComponent implements OnInit {

    model: Loginmodel [];

    AccountModel: Accountdetailsmodel[];
    
  
    constructor(private service:BankCustomerService){}

    ngOnInit() {
    this.getAll();
    }
  
   getAll(){
     this.service.getAllAccounts().subscribe(
     (res:any)=>{
       this.model=res;
       }
     );
  }
  
   onApprove(id:String){
    this.service.approval(id).subscribe(
       (res:any)=>{
         this.ngOnInit();
        this.service.createAccount(id).subscribe(
          (resp:any)=>{
                console.log(resp);
              }
            );
          }
        );
      }
    
 
  
  onDisapprove(id:String){
    this.service.disapproval(id).subscribe(
       (res:any)=>{
         this.ngOnInit();
        this.service.createAccount(id).subscribe(
          (resp:any)=>{
                console.log(resp);
              }
            );
          }
        );
      }
    


}
