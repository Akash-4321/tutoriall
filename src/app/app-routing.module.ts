import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ApproveComponent } from './approve/approve.component';
import { BankloginComponent } from './banklogin/banklogin.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransferComponent } from './transfer/transfer.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"users",component:UserListComponent},
  {path:'',redirectTo: 'login',pathMatch:'full'},
  {path: 'create-user',component:CreateUserComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"banktransfer",component:TransferComponent},
  {path:"transactions",component:TransactionComponent},
  {path:"approve",component:ApproveComponent},
  {path:"banklogin",component:BankloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
