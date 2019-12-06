import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  successmsg = false;
  errormsg = false;
  model: any = {};
  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
  }

  onRegisterClick() {
	let headers = new Headers();
	headers.append('Access-Control-Allow-Origin', '*');
	headers.append('Access-Control-Allow-Credentials', 'true');
    this.http.post<any>(
      '/api/register',
      { 
        name: this.model.username,
        firstName: this.model.firstName,
        lastName:  this.model.lastName,
        email: this.model.email,
        password: this.model.password
      },
	  { headers: headers }
    ).subscribe(res => {
      this.successmsg = true
    },
    err => {
      if(err.status == 409){
        this.errormsg = true
      }
    })
  }
}
