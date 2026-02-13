// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Manually import all test files since require.context is not working
// This ensures all tests are discovered and executed

// Import all component tests
import './app/app.component.spec';
import './app/login/login.component.spec';

// Import container tests
import './app/container/home/add-inner-sub-cat/add-inner-sub-cat.component.spec';
import './app/container/home/add-product/add-product.component.spec';
import './app/container/home/add-sub-cat/add-sub-cat.component.spec';
import './app/container/home/brand/brand.component.spec';
import './app/container/home/category/category.component.spec';
import './app/container/home/inner-category/inner-category.component.spec';
import './app/container/home/order/order.component.spec';
import './app/container/home/updateslider/updateslider.component.spec';
import './app/container/home/userdata/userdata.component.spec';

// Import other component tests
import './app/components/shared/loading-spinner/loading-spinner.component.spec';

// Import service tests
import './app/services/auth.service.spec';
import './app/services/product.service.spec';

// Import utility tests
import './app/utils/validation.util.spec';

// Import guard tests
import './app/guards/auth.guard.spec';

// Import interceptor tests
import './app/interceptors/error.interceptor.spec';

console.log('🧪 All test files imported manually');
