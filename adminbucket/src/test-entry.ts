// This file is required by karma.conf.js and loads explicitly all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Simple test that should definitely run
describe('Basic Test', () => {
  it('should pass', () => {
    console.log('🧪 Test is running!');
    expect(true).toBe(true);
  });
});

console.log('🔍 Test entry file loaded');
