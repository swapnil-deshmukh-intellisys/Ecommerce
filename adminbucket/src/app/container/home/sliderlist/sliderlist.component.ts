import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../../../app.service';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sliderlist',
  templateUrl: './sliderlist.component.html',
  styleUrls: ['./sliderlist.component.css']
})
export class SliderlistComponent implements OnInit {
  Response: any;
  loader = false;
  msgs: any;
  id: any;
bannerList: any = [];
  constructor(private base_path_sr: HTTPService, private cnf_service: ConfirmationService, private router: Router) { }

  ngOnInit() {
    this.getSlider();
     this.gettingBanner();
  }
gettingBanner() {
    this.loader = true;
    const url = this.base_path_sr.base_path_api + 'offer';
    this.base_path_sr.GetRequestUnauthorised(url)
      .subscribe(res => {
        this.loader = false;
        this.bannerList = [];
        this.bannerList = res[0].json.data;
        console.log(res, this.bannerList, 'hello response');
      },
      error => {
        this.loader = false;
        console.log(error);
      });
  }
  getSlider() {
    this.loader = true;
    const url = this.base_path_sr.base_path_api + 'admin/getBanner';
    this.base_path_sr.GetRequestUnauthorised(url)
      .subscribe(data => {
        this.loader = false;
        this.Response = data[0].json.Banner;
        for (let i = 0; i < this.Response.length; i++) {
         const id = this.id = this.Response[i]._id;
         console.log(this.id);
         }
        console.log(this.Response);
        // console.log(res, 'hello response')
      },
        error => {
          this.loader = false;
          console.log(error);
        });
  }
  editSlider(id) {
    console.log(id, 'hello');
    this.router.navigateByUrl('home/updateslider/', this.id);
  }
  removeSlider(id) {
    const url = this.base_path_sr.base_path_api + 'admin/deleteBanner/' + this.id;
    //   this.base_path_sr.DeleteRequest(url)
    //     .subscribe(res => {
    //       this.msgs = [];
    //       this.msgs.push({ severity: 'success', summary: 'Data Deleted', detail: "Category deleted" });
    //       console.log(res, 'response');
    //       this.getSlider();
    //     },
    //       error => {
    //         this.msgs = [];
    //         this.msgs.push({ severity: 'error', summary: 'server error', detail: "some error try again" });
    //         console.log(error);
    //       })
    if (confirm('Are you sure you want to delete ?')) {
           this.base_path_sr.DeleteRequest(url).subscribe(
               data => {
                this.msgs = [];
                      this.msgs.push({ severity: 'success', summary: 'Data Deleted', detail: 'Category deleted' });
                      console.log(data, 'response');
                 this.getSlider();
                 return true;
              },
               error => {
                this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: 'server error', detail: 'some error try again' });
                        console.log(error);
               }
            );
          }
        }

  // removeSlider(id){
  //   console.log("hellooooooooooooooooo");
  //   this.cnf_service.confirm({
  //     message: 'Do you want to delete this category and related sub category?',
  //     header: 'Delete Confirmation',
  //     icon: 'fa fa-trash',
  //     accept: () => {
  //       this.removerecord(this.id);
  //       // this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
  //     },
  //     reject: () => {
  //       // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
  //     }
  //   });
  // }
  // removerecord(id){
  //   let url = this.base_path_sr.base_path_api + "admin/deleteBanner/" +this.id;
  //   this.base_path_sr.DeleteRequest(url)
  //     .subscribe(res => {
  //       this.msgs = [];
  //       this.msgs.push({ severity: 'success', summary: 'Data Deleted', detail: "Category deleted" });
  //       console.log(res, 'response');
  //       this.getSlider();
  //     },
  //       error => {
  //         this.msgs = [];
  //         this.msgs.push({ severity: 'error', summary: 'server error', detail: "some error try again" });
  //         console.log(error);
  //       })
  // }
}

