import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { HTTPService } from '../../../app.service';

@Component({
  selector: 'app-add-sub-cat',
  templateUrl: './add-sub-cat.component.html',
  styleUrls: ['./add-sub-cat.component.css']
})

export class AddSubCatComponent implements OnInit {
  subcagtegorylist: any = [];
  addForm: FormGroup
  active: any = []
  categorylist: any = [];
  msgs: any;
  x: any = 1
  loader: boolean = false;
  constructor(private fb: FormBuilder, private base_path_service: HTTPService) {
    this.addForm = this.fb.group({
      categoryId: ['', Validators.required],
      subCategoryName: ['', Validators.required],
      periority: ['', Validators.required],
      isActive: ['', Validators.required]
    })
    this.active.push({
      label: 'Active', value: true
    })
    this.active.push({
      label: 'Inactive', value: false
    })
  }

  ngOnInit() {
    this.gettingCategory()
  }

  gettingCategory() {
    let url = this.base_path_service.base_path_api + "category/categoryDropdown";
    this.base_path_service.GetRequestUnauthorised(url)
      .subscribe(res => {
        console.log(res, 'hello res')
        res[0].json.data.map(res => {
          this.categorylist.push({
            label: res.categoryName, value: res._id
          })
        })
      },
        error => {
          console.log(error)
        })
  }

  saveData() {
    if (this.x == 1) {
      this.loader = true;
      this.x = 0;
      let url = this.base_path_service.base_path_api + 'subCategory/addSubCategory';
      this.base_path_service.PostRequestUnauthorised(url, this.addForm.value)
        .subscribe(res => {
          this.loader = false;
          this.x = 1;
          this.addForm.reset()
          this.msgs = [];
          this.msgs.push({ severity: 'success', summary: 'Data Saved', detail: "Category saved" });
          console.log(res, 'hello res')
        },
          error => {
            this.loader = false;
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'server error', detail: "some error try again" });
            console.log(error)
          })
    }
  }
}
