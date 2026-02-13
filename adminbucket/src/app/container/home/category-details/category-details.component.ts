import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, } from '@angular/forms';
import { HTTPService } from '../../../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  editForm: FormGroup;
  active: any = [];
  id: any;
  msgs: any;
  loader = false;
  constructor(private fb: FormBuilder, private base_path_service: HTTPService, private route: ActivatedRoute) {
    this.route.params.forEach(params => {
      this.id = params['id'];
    });
    console.log(this.id);
    this.active.push({
      label: 'Active', value: true
    });
    this.active.push({
      label: 'Inactive', value: false
    });
    this.editForm = this.fb.group({
      categoryName: ['', Validators.required],
      periority: ['', Validators.required],
      isActive: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.gettingData();
  }
  gettingData() {
    this.loader = true;
    // updateCategory/5a884748f17a1717c0c0b101
    const url = this.base_path_service.base_path_api + 'category/particularCategory/' + this.id;
    this.base_path_service.GetRequestUnauthorised(url)
      .subscribe(res => {
        this.loader = false;
        console.log(res, 'hello');
        this.editForm.controls['categoryName'].setValue(res[0].json.data.categoryName);
        this.editForm.controls['isActive'].setValue(res[0].json.data.isActive);
        // this.editForm.controls['isActive'].setValue(res[0].json.data.categoryName)
      },
        error => {
          this.loader = false;
          console.log(error);
        });



  }

  saveData() {
    this.loader = true;
    const url = this.base_path_service.base_path_api + 'category/updateCategory/' + this.id;
    this.base_path_service.PutRequest(url, this.editForm.value)
      .subscribe(res => {
        this.loader = false;
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Data Saved', detail: 'Category updated' });
        this.gettingData();
        console.log(res, 'hello');
      },
        error => {
          this.loader = false;
          this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'server error', detail: 'Some error try again' });
          console.log(error, 'hello');
        });
  }



}
