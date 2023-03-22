import { Component,OnInit} from '@angular/core';
import { Accountdetailsmodel } from '../approvee/accountdetailsmodel';
import { TransactionService } from '../transaction.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  accountDetailsModel: Accountdetailsmodel[];


  constructor(private service:TransactionService){}

  ngOnInit(): void {
    this.onGetAccoutDetails();
  }

  onGetAccoutDetails(){
    const userid=localStorage.getItem("user_id");
    if(userid!=null){
    this.service.geAccountDetails(userid).subscribe(
      (res:any)=>{
         this.accountDetailsModel=res;
      }
    );
  }
}


}
