import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../../../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  user: any;

  constructor(
    private base_path_sr: HTTPService,
    private cnf_service: ConfirmationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('YOUR api is working data');
    this.base_path_sr.getUserdata().subscribe(
      data => {
        this.user = data.data;
        console.log(data);
        console.log(this.user);
        console.log('YOUR api is working data');
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}
