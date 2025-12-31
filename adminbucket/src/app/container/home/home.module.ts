import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, NgForm, ReactiveFormsModule, FormControlDirective, FormGroupDirective } from '@angular/forms';
import { HomeComponent } from './home.component';
// import { UploadVideoComponent } from './upload-video/upload-video.component';
// import { EditvideoComponent } from './editvideo/editvideo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { GrowlModule } from 'primeng/growl';
import { BlockUIModule } from 'primeng/blockui';
import {DataTableModule} from 'primeng/datatable';
import {RadioButtonModule} from 'primeng/radiobutton';
import {PaginatorModule} from 'primeng/paginator';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import { homeRouting } from './home.routing';
import { CalendarModule } from 'primeng/calendar';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { SubCatComponent } from './sub-cat/sub-cat.component';
import { SubCatDetailsComponent } from './sub-cat-details/sub-cat-details.component';
import { InnerSubCatDetailsComponent } from './inner-sub-cat-details/inner-sub-cat-details.component';
import { InnerSubCatComponent } from './inner-sub-cat/inner-sub-cat.component';
import { AddSubCatComponent } from './add-sub-cat/add-sub-cat.component';
import {AddProductComponent} from './add-product/add-product.component'
import {ProductListComponent} from './product-list/product-list.component';
import {CategoryComponent} from './category/category.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { AddInnerSubCatComponent } from './add-inner-sub-cat/add-inner-sub-cat.component';
import { UserdataComponent } from './userdata/userdata.component';
import { AdddistributerComponent } from './adddistributer/adddistributer.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { NotificationComponent } from './notification/notification.component';
import { OffersComponent } from './offers/offers.component';
import { OrderComponent } from './order/order.component';
import { SocietyComponent } from './society/society.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HomesliderComponent } from './homeslider/homeslider.component';
import { SliderlistComponent } from './sliderlist/sliderlist.component';
import { UpdatesliderComponent } from './updateslider/updateslider.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
 
@NgModule({
    imports: [
        ReactiveFormsModule, Ng2SearchPipeModule,
        FormsModule,
        CommonModule, InputTextareaModule, CalendarModule,
        homeRouting,
        ButtonModule,
        DropdownModule,
        GrowlModule,
        BlockUIModule,
        DataTableModule,
        RadioButtonModule,
        PaginatorModule,
        DialogModule,
        OverlayPanelModule,
        CardModule,
        ConfirmDialogModule
    ],
    exports: [],
    declarations: [
        AddProductComponent,
        ProductListComponent,
        HomeComponent,
        DashboardComponent, 
        CategoryDetailsComponent,
        AddcategoryComponent,
        SubCatComponent,
        SubCatDetailsComponent,
        InnerSubCatDetailsComponent,
        InnerSubCatComponent,
        AddSubCatComponent,
        CategoryComponent,
        AddInnerSubCatComponent,
        UserdataComponent,
       AdddistributerComponent,
       DeliveryComponent,
       InvoiceComponent,
       NotificationComponent,
       OffersComponent,
       OrderComponent,
       SocietyComponent,
       ProfileComponent,
       ProductlistComponent,
       HomesliderComponent,
       SliderlistComponent,
       UpdatesliderComponent
         
    ],
    providers: [ConfirmationService],
})
export class HomeModule { }
