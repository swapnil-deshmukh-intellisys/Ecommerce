import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../../../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-adddistributer',
  templateUrl: './adddistributer.component.html',
  styleUrls: ['./adddistributer.component.css']
})
export class AdddistributerComponent implements OnInit {
  email: String;
  password: String;
  constructor(private base_path_sr: HTTPService, private cnf_service: ConfirmationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onRegisterSubmit() {
    const user = {
      email: this.email,
      password: this.password
    };
    this.base_path_sr.registerUser(user).subscribe(data => {
      console.log(data);
      console.log('data.message');
      if (data.message == 'Admin Register') {

        this.router.navigate(['/login']);
      } else {

        this.router.navigate(['/register']);
      }
    });
  }
}
