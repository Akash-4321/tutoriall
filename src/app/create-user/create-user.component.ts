import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUser } from '../create-user';
//import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {

  createuser: CreateUser=new CreateUser();


ngOnInit(): void {
    
}


onSubmit(){

 

}
}
