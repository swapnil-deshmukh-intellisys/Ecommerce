import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { HTTPService } from '../../../app.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categorylist: any = [];
  subcagtegorylist: any = [];
  innersubcategorylist: any = [];
  unittype: any = []
  sizeArray: any = []
  unitForm: FormGroup;
  unitList: FormArray;
  uploaded: boolean = true;
  msgs: any = [];
  image: any;
  previewPath: any;
  productDetailsForm: FormGroup;
  constructor(private fb: FormBuilder, private base_path_service: HTTPService) {
    this.sizeArray.push({
      length: 1
    })
    this.unittype.push({
      label: 'Open', value: 'open'
    },
      {
        label: 'Close', value: 'close'
      })
    this.FormValue();
    this.productDetailsInst();
  }

  productDetailsInst() {
    this.productDetailsForm = this.fb.group({
      categoryId: [''],
      subCategoryId: [''],
      innerSubCategoryId: [''],
      productName: [''],
      productDescription: [''],
      brand: [''],
      pincode: [''],
      unitType: [''],
      totalInventory: [''],
      inventoryUnit: [''],
    })
  }


  FormValue() {
    this.unitForm = this.fb.group({
      unitList: this.addGroup()
    })
  }
  addGroup(): FormArray {
    this.unitList = this.fb.array([
      this.addMore()
    ])
    return this.unitList;
  }

  addMore(): FormGroup {
    return this.fb.group({
      quantity: [''],
      unit: [''],
      discount: [''],
      price: [''],
      inventory: [''],
    })
  }


  add() {
    this.unitList.push(this.addMore());
  }

  remove(indx) {
    this.unitList.removeAt(indx);

  }


  ngOnInit() {
    console.log(this.sizeArray, 'hello');
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

  removeIndex(i) {
    this.sizeArray.removeAt(i)

  }

  addSize() {
    this.sizeArray.push({
      length: this.sizeArray.length - 1
    })
  }

  fileChangeEvent($event) {

    this.image = $event.target.files[0];


    if (this.image) {
      this.uploaded = true;
      let filename = this.image.name;
      filename = filename.split('.').pop()
      filename = filename.toLowerCase();
      if (this.image.size <= 5242880 && filename == "jpeg" || this.image.size <= 5242880 && filename == "png" || this.image.size <= 5242880 && filename == "jpg") {

        let url = this.base_path_service.base_path_api + "user/uploadImage";

        return new Promise((resolve, reject) => {

          var formData: any = new FormData();
          var xhr = new XMLHttpRequest();
          formData.append("userPhoto", this.image);
          xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {

              if (xhr.status == 200) {
                this.uploaded = false;
                this.previewPath = this.base_path_service.base_path_api + xhr.response;
                console.log(xhr.response, 'hello image')
                // this.updateDisable = false;
                // this.profile_Image = this.base_path_service.base_path_image + JSON.parse(xhr.response).file;
                // // if (this.isAdmin) {
                // if (localStorage.getItem('email') == this.user.userEmail) {
                //   localStorage.setItem('profile_pic', JSON.stringify(JSON.parse(xhr.response).file));
                //   this.base_path_service.homeHeaderInfoFun();
                // }
                // // }
                this.msgs.push({ severity: 'success', summary: '', detail: 'Profile photo updated successfully.' });

              }

              else {

                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '', detail: 'Some error occured. Try again!' });

              }

            }

          }

          xhr.open("Post", url);
          // xhr.setRequestHeader("Authorization", 'Bearer ' + access_token);
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

  saveForm() {
    let data = this.productDetailsForm.value;
    data.userPhoto = this.previewPath;
    data.size = this.unitForm.value.unitList
    for (let i = 0; i < data.size.length; i++) {
      data.size[i].quantity = parseInt(data.size[i].quantity)
      data.size[i].discount = parseInt(data.size[i].discount)
      data.size[i].price = parseInt(data.size[i].price)
      if (data.size[i].inventory) {
        data.size[i].inventory = parseInt(data.size[i].inventory)
      }
    }
    let url = this.base_path_service.base_path_api + "product/addProduct";
    this.base_path_service.PostRequestUnauthorised(url, data)
      .subscribe(res => {
        console.log(res, 'hello response')
      })
    //  let unit=this.unitForm.value;
    //  console.log(data,unit,'hello unit') 

  }

  CategoryChange(event) {
    let url = this.base_path_service.base_path_api + "subCategory/allSubCategory/" + event.value;
    this.base_path_service.GetRequestUnauthorised(url)
      .subscribe(res => {
        console.log(res, 'hello res')
        res[0].json.data.map(res => {
          this.subcagtegorylist.push({
            label: res.subCategoryName, value: res._id
          })
        })
      },
        error => {
          console.log(error)
        })
  }

  // /user/uploadImage

}
