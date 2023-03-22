import { Component, OnInit } from '@angular/core';
import { Banktransfer } from '../banktransfer';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit{
  

  banktransfer:Banktransfer=new Banktransfer();
  ngOnInit(): void {
    
  }
  onSubmit(){

    
   
   }

}
