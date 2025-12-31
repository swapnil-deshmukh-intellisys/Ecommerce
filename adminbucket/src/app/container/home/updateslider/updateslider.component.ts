import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { HTTPService } from '../../../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router'
@Component({
  selector: 'app-updateslider',
  templateUrl: './updateslider.component.html',
  styleUrls: ['./updateslider.component.css']
})
export class UpdatesliderComponent implements OnInit {
  editForm: FormGroup;
  active: any = []
  id: any;
  msgs: any;
  loader:boolean=false;
  constructor(private fb: FormBuilder, private base_path_service: HTTPService, private route: ActivatedRoute) {
    this.route.params.forEach(params => {
      this.id = params['id']
    })
    console.log(this.id)
   
    // this.editForm = this.fb.group({
    //   categoryName: ['', Validators.required],
    //   periority: ['', Validators.required],
    //   isActive: ['', Validators.required]
    // })
  }

  ngOnInit() {
  }

}

