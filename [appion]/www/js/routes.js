angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('cameraTabDefaultPage', {
    url: '/page2',
    templateUrl: 'templates/cameraTabDefaultPage.html',
    controller: 'cameraTabDefaultPageCtrl'
  })

  .state('cartTabDefaultPage', {
    url: '/page3',
    templateUrl: 'templates/cartTabDefaultPage.html',
    controller: 'cartTabDefaultPageCtrl'
  })

  .state('cloudTabDefaultPage', {
    url: '/page4',
    templateUrl: 'templates/cloudTabDefaultPage.html',
    controller: 'cloudTabDefaultPageCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.viewFlights', {
    url: '/page2',
    views: {
      'tab8': {
        templateUrl: 'templates/viewFlights.html',
        controller: 'viewFlightsCtrl'
      }
    }
  })

  .state('tabsController.contactUs', {
    url: '/page6',
    views: {
      'tab8': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      }
    }
  })

  .state('tabsController.trackAFlight', {
    url: '/page7',
    views: {
      'tab8': {
        templateUrl: 'templates/trackAFlight.html',
        controller: 'trackAFlightCtrl'
      }
    }
  })

  .state('page', {
    url: '/page8',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('tabsController.ourServices', {
    url: '/page16',
    views: {
      'tab8': {
        templateUrl: 'templates/ourServices.html',
        controller: 'ourServicesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page16')

  

});