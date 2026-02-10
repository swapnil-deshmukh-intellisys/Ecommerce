import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../../../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderList: any;
  productlist: any;
  productsName: any;
  totalQuantity: any;
  unit: any;
  price: any;
  constructor(private base_path_sr: HTTPService,
private cnf_service: ConfirmationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    console.log('token');
    console.log(token);
    this.base_path_sr.getAllorder(token).subscribe(data => {
      console.log(data);
      this.orderList = data.data;
 for (let i = 0; i < this.orderList.length; i++) {
        this.productlist = this.orderList[i].productList;
        // console.log(this.productlist);
        for (let j = 0; j < this.productlist.length; j++) {
           this.productsName = this.productlist[j].productsName;
           this.totalQuantity = this.productlist[j].totalQuantity;
           this.unit = this.productlist[j].unit;
           this.price = this.productlist[j].price;
          console.log(this.productsName);
          console.log(this.unit);
        }
      }
    console.log(data);
      console.log(this.orderList);
      console.log('YOUR api is working data');
    },
      err => {
        console.log(err);
        return false;

      });
  }

}
