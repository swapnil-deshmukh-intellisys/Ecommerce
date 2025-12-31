import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../../../app.service';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  Response: any;
  loader: boolean = false;
  msgs: any;

  constructor(private base_path_sr: HTTPService, private cnf_service: ConfirmationService, private router: Router) { }

  ngOnInit() {
    this.gettingData();
  }

  gettingData() {
    this.loader = true;
    let url = this.base_path_sr.base_path_api + 'category/allCategory';
    this.base_path_sr.GetRequestUnauthorised(url)
      .subscribe(res => {
        this.loader = false;
        this.Response = res[0].json.data;
        for (let i = 0; i < this.Response.length; i++) {
          this.Response[i].slno = i + 1;
        }
        console.log(this.Response)
        console.log(res, 'hello response')
      },
        error => {
          this.loader = false;
          console.log(error)
        })
  }

  editDetails(car) {
    console.log(car, 'hello');
    this.router.navigateByUrl('home/edit-category/' + car._id)
  }

  removeCategory(car) {
    this.cnf_service.confirm({
      message: 'Do you want to delete this category and related sub category?',
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
    let url = this.base_path_sr.base_path_api + "category/deleteCategory/" + val._id;
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
