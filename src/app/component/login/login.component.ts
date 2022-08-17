import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) { }

  loginForm!: FormGroup

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [],
      password: []
    })
    if(localStorage.getItem('user')){
      this.router.navigate(['/products'])
    }
  }

  async onSubmit(){
    debugger;
    var res = await this.api.login(this.loginForm.value)
    
    if(res.status == 1){
      alert(`Welcome ${res?.data?.username}`)
      localStorage.setItem('user',JSON.stringify(res.data))
      localStorage.setItem('userType',(res?.data?.type))
      if(res?.data?.type == 'admin'){
        this.router.navigate(['/products'])
      }
    }else{
      alert(res.message)
    }
  }

  async signUp(){
    // debugger;
    let payload = {
      "username": "NEW_TEST",
      "password": "NEWTEST",
      "email": "NEW@Test.com",
      "type": "admin"
    }
    var res = await this.api.signUp(payload)
    console.log(res)
  }

}
