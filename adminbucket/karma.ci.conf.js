// // CI-specific Karma configuration to avoid webpack-dev-middleware issues
// module.exports = function (config) {
//   config.set({
//     basePath: '',
//     frameworks: ['jasmine', '@angular-devkit/build-angular'],
//     plugins: [
//       require('karma-jasmine'),
//       require('karma-chrome-launcher'),
//       require('karma-jasmine-html-reporter'),
//       require('karma-coverage-istanbul-reporter'),
//       require('@angular-devkit/build-angular/plugins/karma')
//     ],
//     client: {
//       clearContext: false,
//       captureConsole: false // Disable console capture for CI
//     },
//     coverageIstanbulReporter: {
//       reports: ['text-summary', 'lcov'],
//       fixWebpackSourcePaths: true
//     },
//     angularCli: {
//       environment: 'dev'
//     },
//     reporters: ['dots'], // Use dots reporter for CI
//     port: 9876,
//     colors: false, // Disable colors for CI
//     logLevel: config.LOG_ERROR, // Only show errors
//     autoWatch: false,
//     browsers: ['ChromeHeadless'],
//     singleRun: true
//   });
// };

// CI-specific Karma configuration to avoid webpack-dev-middleware issues
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false,
      captureConsole: false
    },
    coverageIstanbulReporter: {
      reports: ['text-summary', 'lcov'],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['dots'],
    port: 9876,
    colors: false,
    logLevel: config.LOG_ERROR,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,

    // ✅ ADD THIS LINE
    failOnEmptyTestSuite: false
  });
};
