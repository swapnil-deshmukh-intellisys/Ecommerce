import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HTTPService } from './../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  msgs: any = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private base_path_service: HTTPService
  ) {
    if (localStorage.getItem('token')) {
      this.router.navigate(['home']);
    }
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onLogin() {
    this.router.navigate(['home']);
    const url = this.base_path_service.base_path_api + 'admin/login';
    const data = this.loginForm.value;
    this.base_path_service.PostRequestUnauthorised(url, data)
      .subscribe(res => {
        console.log(res, 'resonse');
        localStorage.setItem('token', res[0].json.token);
        this.router.navigate(['home']);
      },
      error => {
        if (error.status === 500) {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: error.statusText, detail: JSON.parse(error._body).message });
        } else {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'Server Error', detail: JSON.parse(error._body).message });
        }
        console.log(error);
      });
  }

  testFunction(): string {
    return 'Test Successful';
  }
}
