//angular.module('idayIonic', ['ionic', 'idayIonic.controllers', 'idayIonic.services', 'idayIonic.filters'])

var app = angular.module('ionicApp', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('sidemenu', {
      url: "/iday",
      abstract: true,
      templateUrl: "templates/sidemenu.html",
    })
    .state('sidemenu.home', {
      url: "/home",
      views: { 'menuContent' :{ templateUrl: "templates/home.html" } }
    })
    /*
    .state('sidemenu.checkin', {
      url: "/check-in",
      views: { 'menuContent' :{ templateUrl: "templates/check-in.html", controller: "CheckinCtrl" } }
    })
    .state('sidemenu.attendees', {
      url: "/attendees",
      views: { 'menuContent' :{ templateUrl: "templates/attendees.html", controller: "AttendeesCtrl" } },
      resolve: {  attendees:function(AttendeesService) { return AttendeesService.getAttendees(); }  }
    })
    .state('sidemenu.activity', {
      url: "/activity",
      views: { 'menuContent' :{ templateUrl: "templates/attendee-activity.html", controller: "AttendeeActivityCtrl" }  }
    })
    */
    
    .state('sidemenu.credits', {
      url: "/credits",
      views: { 'menuContent' :{ templateUrl: "templates/credits.html", controller: "MainCtrl" } } /*FilterSettingsCtrl*/
    })

    .state('sidemenu.feedback', {
      url: "/feedback",
      views: { 'menuContent' :{ templateUrl: "templates/survey.html", controller: "SurveyCtrl" } } /*FilterSettingsCtrl*/
    })
    
    

    
    .state('sidemenu.settings', {
      url: "/settings",
      views: { 'menuContent' :{ templateUrl: "templates/settings.html", controller: "MainCtrl" } } /*FilterSettingsCtrl*/
    })
    
    .state('sidemenu.companies', {
      url: "/companies",
      views: { 'menuContent' :{ templateUrl: "templates/company-list.html", controller: "CompanyListCtrl" } }
    })
    
    .state('sidemenu.company', {
      url: "/companies/:companyId",
      resolve: { company: function($stateParams, CareerFairService) { return CareerFairService.getCompany($stateParams.companyId); },
      /*nextCompany: function($stateParams, CareerFairService) {return CareerFairService.getNextCompany($stateParams.companyId);}*/ },
      views: { 'menuContent' :{ templateUrl: "templates/company-detail.html", controller: "CompanyDetailCtrl" } }
    })
    
    .state('sidemenu.map', {
      url: "/map",
      views: { 'menuContent' :{ templateUrl: "templates/map.html", controller: "CompanyMapCtrl" } }
    })
    
    // sidemenu.map.company'
    .state('sidemenu.booth', {
      url: "/map/:companyId",
      views: { 'menuContent' :{ templateUrl: "templates/map.html", controller: "CompanyMapCtrl" } }
    })
    
    
    
    .state('sidemenu.companies-grid', {
      url: "/companies-grid",
      views: { 'menuContent' :{ templateUrl: "templates/company-list-gridinfo.html", controller: "CompanyListCtrl" } }
    })

    .state('sidemenu.companies-verbose', {
      url: "/companies-verbose",
      views: { 'menuContent' :{ templateUrl: "templates/company-list-all-details.html", controller: "CompanyListCtrl" } }
    })



  
  // Fall back on this URL otherwise
  $urlRouterProvider.otherwise("/iday/companies");
});





// Ionic Starter App - Side Menu

// angular.module is a global place
// for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example
// (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
/*
angular.module('idayIonic', ['ionic', 'idayIonic.controllers', 'idayIonic.services', 'idayIonic.filters'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.companies', {
      url: "/companies",
      views: {
        'menuContent' :{
          templateUrl: "templates/companyList.html",
          controller: 'CompanyListCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/companies/:companyURLId",
      views: {
        'menuContent' :{
          templateUrl: "templates/companyDetail.html",
          controller: 'CompanyCtrl'
        }
      }
    })

    .state('app.map', {
      url: "/map",
      views: {
        'menuContent' :{
          templateUrl: "templates/map.html",
          controller: 'CompanyMapCtrl'
        }
      }
    })

    .state('app.singleBooth', {
      url: "/map/:companyMapId",
      views: {
        'menuContent' :{
          templateUrl: "templates/map.html",
          controller: 'CompanyMapCtrl'
        }
      }
    })


    .state('app.settings', {
      url: "/settings",
      views: {
        'menuContent' :{
          templateUrl: "templates/settings.html"
        }
      }
    })

    .state('app.favorites', {
      url: "/favorites",
      views: {
        'menuContent' :{
          templateUrl: "templates/favorites.html"
        }
      }
    })

    .state('app.login', {
      url: "/login",
      views: {
        'menuContent' :{
          templateUrl: "templates/login.html"
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/companies');
});
*/

