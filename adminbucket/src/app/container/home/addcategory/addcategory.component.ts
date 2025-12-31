import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, } from '@angular/forms';
import { HTTPService } from '../../../app.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  addForm: FormGroup
  active: any = []
  msgs: any;
  x:any=1
  loader:boolean=false;
  constructor(private base_path_service: HTTPService, private fb: FormBuilder) {
    this.addForm = this.fb.group({
      categoryName: ['', Validators.required],
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
  }

  saveData() {
    if(this.x==1){
      this.loader=true;
      this.x=0;
    let url = this.base_path_service.base_path_api + 'category/addCategory';
    this.base_path_service.PostRequestUnauthorised(url, this.addForm.value)
      .subscribe(res => {
        this.loader=false;
        this.x=1;
        this.addForm.reset()
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Data Saved', detail: "Category saved" });
        console.log(res, 'hello res')
      },
    error=>{
      this.loader=false;
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'server error', detail: "some error try again" });
      console.log(error)
    })
    }
  }

}
