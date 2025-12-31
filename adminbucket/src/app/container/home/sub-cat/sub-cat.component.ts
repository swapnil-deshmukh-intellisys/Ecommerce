import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../../../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-sub-cat',
  templateUrl: './sub-cat.component.html',
  styleUrls: ['./sub-cat.component.css']
})
export class SubCatComponent implements OnInit {
  Response: any;
  title: any;
  id: any;
  msgs:any=[];
  loader:boolean=false;
  constructor(private base_path_sr: HTTPService, private cnf_service: ConfirmationService, private router: Router, private route: ActivatedRoute) {
    this.route.params.forEach(params => {
      this.id = params['id']
    })
  }

  ngOnInit() {
    this.gettingData()
  }

  gettingData() {
    this.loader=true;
    let url = this.base_path_sr.base_path_api + "subCategory/allSubCategory/" + this.id;
    this.base_path_sr.GetRequestUnauthorised(url)
      .subscribe(res => {
        this.loader=false;
        this.Response = res[0].json.data;
        for (let i = 0; i < this.Response.length; i++) {
          this.Response[i].slno = i + 1;
        }
        console.log(res, 'hello res');
      },
        error => {
        this.loader=false;
          console.log(error)
        })

  }


  removeCategory(car) {
    this.cnf_service.confirm({
      message: 'Do you want to delete this sub category?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.removerecord(car);
        // this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
      },
      reject: () => {
        // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });
  }

  removerecord(val) {
    let url = this.base_path_sr.base_path_api + "subCategory/deleteSubCategory/" + val._id;
    this.base_path_sr.DeleteRequest(url)
      .subscribe(res => {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Data Deleted', detail: "Category deleted" });
        console.log(res, 'response');
        this.gettingData();
      },
        error => {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'server error', detail: "some error try again" });
          console.log(error);
        })
  }


}
