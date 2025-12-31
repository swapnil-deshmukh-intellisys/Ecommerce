import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../../../app.service';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Response: any = [];
  totalRecord: any;
  page: number = 1;
  loader: boolean = false;
  msgs: any = [];
  constructor(private httpservice: HTTPService, private cnf_service: ConfirmationService) { }

  ngOnInit() {
    this.gettingProducatList();
  }


  
  gettingProducatList() {
    this.loader = true;
    let url = this.httpservice.base_path_api + 'product/allProduct?page=' + this.page;
    this.httpservice.GetRequestUnauthorised(url)
      .subscribe(res => {
        this.loader = false;
        this.Response = res[0].json.data;
        this.totalRecord = res[0].json.totalPages;
        console.log(res, 'hello response ')
      },
        error => {
          this.loader = false;
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'server error', detail: "some error try again" });
          console.log(error, 'hello error')
        })
  }

  pageChange(event) {
    this.page = event.page + 1;
    this.gettingProducatList();
    console.log('page change', event)
  }

  removeCategory(car) {
     this.cnf_service.confirm({
      message: 'Are you sure want to delete?',
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
    let url = this.httpservice.base_path_api + "product/deleteProduct/" + val._id;
    this.httpservice.GetRequestUnauthorised(url)
      .subscribe(res => {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Data Deleted', detail: "product deleted" });
        console.log(res, 'response');
        this.gettingProducatList();
      },
        error => {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'server error', detail: "some error try again" });
          console.log(error);
        })
  }

  editDetails(car) {

  }


}

