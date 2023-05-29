import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formTitle = '----LOGIN FORM';
  test!: string;
    

  amount: number = 50000;
  panNo: any = true;

  submit(){
    let num=20;
    num=2000;
     
    this.formTitle = 'Login Form';
  }
}
