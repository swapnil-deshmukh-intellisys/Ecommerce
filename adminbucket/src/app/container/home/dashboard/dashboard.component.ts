import { Component, OnInit, ViewChild } from '@angular/core';
import { HTTPService } from '../../../app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private base_path_service: HTTPService, private router: Router) {

  }

  ngOnInit() {

  }


}
