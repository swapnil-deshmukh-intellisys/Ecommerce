import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, CanActivate } from '@angular/router';
import { HomeComponent } from './home.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { SubCatComponent } from './sub-cat/sub-cat.component';
import { SubCatDetailsComponent } from './sub-cat-details/sub-cat-details.component';
import { InnerSubCatDetailsComponent } from './inner-sub-cat-details/inner-sub-cat-details.component';
import { InnerSubCatComponent } from './inner-sub-cat/inner-sub-cat.component';
import { AddSubCatComponent } from './add-sub-cat/add-sub-cat.component';
import { CategoryComponent } from './category/category.component'
import { AddProductComponent } from './add-product/add-product.component'
import { ProductListComponent } from './product-list/product-list.component'
import {AddInnerSubCatComponent  } from './add-inner-sub-cat/add-inner-sub-cat.component'
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




const initialRoute = () => {
    return true;
};

const appRoutes: Routes = [
    {
        path: '', component: HomeComponent,

        children: [
            {
                path: '', component: DashboardComponent,
            },
            {
                path: 'dashboard', component: DashboardComponent,
            },
            {
                path: 'category', component: CategoryComponent,
            },
            {
                path: 'add-category', component: AddcategoryComponent,
            },
            {
                path: 'edit-category/:id', component: CategoryDetailsComponent,
            },
            {
                path: 'sub-cat/:id', component: SubCatComponent,
            },
            {
                path: 'add-sub-cat', component: AddSubCatComponent,
            },
            {
                path: 'sub-cat-details/:id', component: SubCatDetailsComponent,
            },
            {
                path: 'inner-sub-cat/:id', component: InnerSubCatComponent,
            },
            {
                path: 'sub-cat-details/:id', component: InnerSubCatDetailsComponent,
            },
            {
                path: 'product', component: ProductListComponent,
            },
            {
                path: 'add-product', component: AddProductComponent,
            },
            {
                path: 'add-inner-sub-cat', component: AddInnerSubCatComponent,
            },
            {
                path: 'sub-cat-details/:id', component: SubCatDetailsComponent,
            },
            {
                path: 'sub-cat-details/:id', component: InnerSubCatDetailsComponent,
            },
            {
                path: 'userdata', component: UserdataComponent,
            },
            {
                path: 'adddist', component: AdddistributerComponent,
            },
            {
                path: 'addslider', component: HomesliderComponent,
            },
            {
                path: 'society', component: SocietyComponent,
            },
            {
                path: 'profile', component: ProfileComponent,
            },
            {
                path:'order',component:OrderComponent,
            },
            {
                path:'notification',component:NotificationComponent,
            },
            {
                path:'offers',component:OffersComponent,
            },
            {
                path:'delivery',component:DeliveryComponent,
            },
            {
                path:'invoice',component:InvoiceComponent,
            },
            {
                path:'productlist',component:ProductlistComponent,
            },
            {
                path: 'sliderlist', component: SliderlistComponent,
            },
            {
                path: 'updateslider', component: UpdatesliderComponent,
            }
        ]
    },


];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
