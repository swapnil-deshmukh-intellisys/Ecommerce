import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, } from '@angular/forms';
import { HTTPService } from '../../../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'app-sub-cat-details',
  templateUrl: './sub-cat-details.component.html',
  styleUrls: ['./sub-cat-details.component.css']
})
export class SubCatDetailsComponent implements OnInit {
  editForm: FormGroup;
  active: any = []
  id: any;
  msgs: any;
  loader: boolean = false;
  categorylist: any = [];
  constructor(private fb: FormBuilder, private base_path_service: HTTPService, private route: ActivatedRoute) {
    this.route.params.forEach(params => {
      this.id = params['id']
    })
    console.log(this.id)
    this.active.push({
      label: 'Active', value: true
    })
    this.active.push({
      label: 'Inactive', value: false
    })
    this.editForm = this.fb.group({
      categoryId: [''],
      subCategoryName: ['', Validators.required],
      periority: ['', Validators.required],
      isActive: ['', Validators.required]
    })
  }
  ngOnInit() {

    this.gettingCategory()

  }

  gettingCategory() {
    let url = this.base_path_service.base_path_api + "category/categoryDropDown";
    this.base_path_service.GetRequestUnauthorised(url)
      .subscribe(res => {
        let data = res[0].json.data;
        for (let i = 0; i < data.length; i++) {
          this.categorylist.push({
            label: data[i].categoryName, value: data[i]._id
          })
        }
        this.gettingData()
        console.log(res, 'hello res');
      })
  }

  gettingData() {
    this.loader = true;
    let url = this.base_path_service.base_path_api + "subCategory/particularSubCategory/" + this.id
    this.base_path_service.GetRequestUnauthorised(url)
      .subscribe(res => {
        this.loader = false;
        this.editForm.controls['subCategoryName'].setValue(res[0].json.data.subCategoryName)
        this.editForm.controls['isActive'].setValue(res[0].json.data.isActive)
        this.editForm.controls['categoryId'].setValue(res[0].json.data.categoryId)
        console.log(res, 'hello res')
      },
        error => {
          this.loader = false;
          console.log(error)
        })
  }

  saveData() {
    this.loader=true;
    let url = this.base_path_service.base_path_api + 'subCategory/updateSubCategory/' + this.id
    this.base_path_service.PutRequest(url, this.editForm.value)
      .subscribe(res => {
        this.loader=false;
        this.gettingData();
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Data Saved', detail: "Sub category updated" });
        console.log(res, 'hello')
      },
        error => {
          this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'server error', detail: "some error try again" });
          this.loader=false;
          console.log(error, 'hello')
        })
  }

}
