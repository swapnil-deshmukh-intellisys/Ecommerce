import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { HTTPService } from '../../../app.service';

@Component({
  selector: 'app-homeslider',
  templateUrl: './homeslider.component.html',
  styleUrls: ['./homeslider.component.css']
})
export class HomesliderComponent implements OnInit {

  icon: any = "../../../../assets/images/no_image.jpg";
  image: any;
  msgs: any = [];
  brandName: any = [];
  brandType: any = [];
  Category: any = [];
  subCategory: any = [];
  innerSubCategory: any = [];
  isOffer: boolean = false;
  startminDate: any = new Date();
  endminDate: any = new Date();
  bannerForm: FormGroup;
  errorMessage: any = {
    brannd: false, category: false, subCategory: false, type: false, code: false, startDate: false, endDate: false, imgurl: false
  }
  loader: boolean = false;


  constructor(private httpservice: HTTPService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.brandName.push({
      label: 'select brand', value: null
    })
    this.brandName.push({
      label: 'Patanjali', value: 'patanjali'
    })
    this.brandName.push({
      label: 'Ashirvad', value: 'ashirvad'
    })
    this.brandType.push({
      label: 'select type', value: null
    })
    this.brandType.push({
      label: 'banner', value: 'banner'
    })
    this.brandType.push({
      label: 'offer', value: 'offer'
    })

    this.Category.push({
      label: 'select category', value: null
    })

    this.subCategory.push({
      label: 'select subcategory', value: null
    })

    this.innerSubCategory.push({
      label: 'select inner catergory', value: null
    })

    this.formInsialization();
    this.gettingCategory();
  }

  formInsialization() {
    this.bannerForm = this.fb.group({
      brand: [''],
      categoryId: [''],
      subCategoryId: [''],
      innerSubCategoryId: [''],
      type: ['', Validators.required],
      code: [''],
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      imageIcon: ['', Validators.required],
      description: ['']

    })
  }


  fileChangeEvent(event) {
    this.image = event.target.files[0];
    if (this.image) {
      this.loader = true;
      let filename = this.image.name;
      filename = filename.split('.').pop()
      filename = filename.toLowerCase();
      if (this.image.size <= 5242880 && filename == "jpeg" || this.image.size <= 5242880 && filename == "png" || this.image.size <= 5242880 && filename == "jpg" || this.image.size <= 5242880 && filename == "svg") {
        let url = this.httpservice.base_path_api + 'user/uploadImage';


        return new Promise((resolve, reject) => {

          var formData: any = new FormData();
          var xhr = new XMLHttpRequest();
          formData.append("userPhoto", this.image);
          xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
              this.loader = false;
              if (xhr.status == 200) {
                this.icon = this.httpservice.base_path_api + xhr.response;
                this.bannerForm.controls['imageIcon'].setValue(this.httpservice.base_path_api + xhr.response);
                this.errorMessage.imgurl = false;
                console.log(xhr.response, 'hello image response');

                this.msgs.push({ severity: 'success', summary: '', detail: 'Profile photo updated successfully.' });

              }

              else {

                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '', detail: 'Some error occured. Try again!' });

              }

            }

          }

          xhr.open("Post", url);
          xhr.send(formData);

        });

      }

      else if (this.image.size > 5242880) {

        // alert("File size is greater than 5MB");
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: '', detail: 'File size is greater than 5MB' });

      }

      else {

        // alert('Invalid file type');
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: '', detail: 'Invalid file type' });


      }

    }




  }

  bransChange(event) {
    if (event.value == 'offer') {
      this.isOffer = true;
    }
    else {
      this.isOffer = false;
      this.bannerForm.controls['code'].setValue('');
    }
  }

  saveForm() {
    if (this.bannerForm.valid) {
      if (this.bannerForm.controls['type'].value === 'offer' && this.bannerForm.controls['code'].value === '') {
        this.errorMessage.code = true;
      }
      else {
        this.saveData()
        // this.bannerForm.reset();
        // this.icon = "../../../../assets/images/no_image.jpg";
        // this.subCategory = [];
        // this.innerSubCategory = [];
        // this.subCategory.push({
        //   label: 'select subcategory', value: null
        // })

        // this.innerSubCategory.push({
        //   label: 'select inner catergory', value: null
        // })
      }


    }
    else {
      // if (this.bannerForm.controls['brand'].invalid) {
      //   this.errorMessage.brand = true;
      // }
      // if (this.bannerForm.controls['categoryId'].invalid) {
      //   this.errorMessage.category = true;
      // }
      // if (this.bannerForm.controls['subCategoryId'].invalid) {
      //   this.errorMessage.subCategory = true;
      // }
      if (this.bannerForm.controls['type'].invalid) {
        this.errorMessage.type = true;
      }
      if (this.bannerForm.controls['startDate'].invalid) {
        this.errorMessage.startDate = true;
      }
      if (this.bannerForm.controls['endDate'].invalid) {
        this.errorMessage.endDate = true;
      }
      if (this.bannerForm.controls['imageIcon'].invalid) {
        this.errorMessage.imgurl = true;
      }
      if (this.bannerForm.controls['type'].value === 'offer' && this.bannerForm.controls['code'].value === '') {
        this.errorMessage.code = true;
      }
    }

    console.log(this.bannerForm.value, 'hello value')
  }


  gettingCategory() {
    let url = this.httpservice.base_path_api + "category/categoryDropdown";
    this.httpservice.GetRequestUnauthorised(url)
      .subscribe(res => {
        res[0].json.data.map(res => {
          this.Category.push({
            label: res.categoryName, value: res._id
          })
        })
        console.log(res, 'categroy list');
      })
  }

  CategoryChange(event) {
    let url = this.httpservice.base_path_api + "subCategory/allSubCategory/" + event.value;
    this.httpservice.GetRequestUnauthorised(url)
      .subscribe(res => {
        console.log(res, 'hello res')
        res[0].json.data.map(res => {
          this.subCategory.push({
            label: res.subCategoryName, value: res._id
          })
        })
      },
      error => {
        console.log(error)
      })
  }

  startDateChange(event) {
    this.endminDate = event;
    this.bannerForm.controls['endDate'].setValue(event);
    console.log(event, 'date change')
  }

  saveData() {
    this.loader = true
    let url = this.httpservice.base_path_api + 'offer'
    this.httpservice.PostRequestUnauthorised(url, this.bannerForm.value)
      .subscribe(res => {
        this.loader = false;
        this.bannerForm.reset();
        this.icon = "../../../../assets/images/no_image.jpg";
        this.msgs = [];
        this.msgs.push({ severity: 'sucess', summary: '', detail: 'Banner submited successfully' });
        console.log(res, 'hello response`')
      }, error => {
        this.loader = false;
        console.log(error)
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Server error!', detail: 'server error try agian.' });
      })
  }

}

