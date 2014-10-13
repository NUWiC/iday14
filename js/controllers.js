//
//
//
//
app.controller('MainCtrl', function($scope, $ionicSideMenuDelegate, AttendeesService, CareerFairService) {
  
  $scope.responses = {};
  console.log($scope.responses);
  $scope.attendees = AttendeesService.getAttendees();
  
  // Make sure that you link the booth and company info prior to 
  // brining the company info into the main controller
  // cuz that will be used by all other views, dont want to repeat work
  
  // maybe a factory for that bit??

  //$scope.floorplan = CareerFairService.getBooths(); //getBoothLayout();
  
  // pull from data.js
  $scope.majors = majors_list;
  $scope.positions = positions_list;
 
 $scope.allCompanies = CareerFairService.getCompanies();

 // filter this one by user prefs... filtering makes a new array anyway but just testing shiz
 $scope.companies = $scope.allCompanies; //CareerFairService.getCompanies();
 //$scope.booths = CareerFairService.getBooths();
 
 //  console.log("companies 1 2 3", $scope.companies[0], $scope.companies[1], $scope.companies[2]);
 
  $scope.booths = CareerFairService.getBooths();
  //console.log("booths 1 2 3", $scope.booths[0], $scope.booths[1], $scope.booths[2]);
  
  //for (var i = 0; i < $scope.booths.length; i++) {
  //   booths[i].id = "booth"+bNum; // Assign element id's for svg/html
  //}

// need to figure out a way so that 
// if a user sorts the list, then navigates to a detail view,
// then back to company list
// their position is maintained
// AND their sort type and direction is maintained
// position is secondary actually
//$scope.sortProp = 'name';  this just always sets it on return
// same effect as initially sorting by booth int he html template

  //c in filteredList = (companies |  filter:searchText | orderBy:sortType:asc)" class="item-thumbnail-left" href="#/app/companies/{{c.nameId}}">


  $scope.majorsIncluded = []; // 'cs'
  $scope.positionsIncluded = []; //coop


    $scope.includeMajor = function (m) {
        var i = $scope.majorsIncluded.indexOf(m);
        if (i > -1) { $scope.majorsIncluded.splice(i, 1); } 
        else { $scope.majorsIncluded.push(m); }
    }
    
     $scope.includePosition = function (p) {
        var i = $scope.positionsIncluded.indexOf(p);
        if (i > -1) { $scope.positionsIncluded.splice(i, 1); } 
        else { $scope.positionsIncluded.push(p); }
    }

    //
    //
    //
    $scope.userFilter = function (company) {
        
        var includedPositions= $scope.positionsIncluded;
        var includedMajors = $scope.majorsIncluded;



        // if no filters at all selected automatically return all companies
        
        if(includedMajors.length <= 0 && includedPositions.length <= 0)
            return company;
        
        // if nothing selected, assume all included
        // for both majors and positions


        // friendlyName = The name to display in the interface
        // name = the csv/json-safe name for filtering etc
        // e.g. MS/PhD value is set to msphd

        // this is only specific to the data that i developed with
        //includedPositions = ["fte","intern","coop","msphd"];

        // this is only specific to the data that i developed with
        //includedMajors = ["am","bme","chem","civil","ce","cs","ee","enve","ie","made","matsci","mech","noneng"];
          
        var p = 0;
        var m = 0;
        var i = 0;

        if(includedPositions.length <= 0)
        {
          for (p = 0; p < $scope.positions.length; p++)
            includedPositions[p] = $scope.positions[p].name;
        }
            
        if(includedMajors.length <= 0)
        {
          for (m = 0; m < $scope.majors.length; m++)
            includedMajors[m] = $scope.majors[m].name;
        }
        //console.log("comp:", company.name, " ", company["ee"]);
        
        //console.log("does company match filters?");
        //console.log(includedPositions);
        //console.log(includedMajors);
        // only show companies matching the users filter requirements
        for (i = 0; i < includedPositions.length; i++)
        {

         // console.log(company[includedPositions[i].toString()]); undefined
            // check if a position is true
            if(company[includedPositions[i]])
            {
                // must have at least one of these true as well
                for (var j = 0; j < includedMajors.length; j++)
                {
                    if(company[includedMajors[j]]) return company;
                }
            }
        }
        return;
    }

    //$scope.filteredList = (companies |filter:userFilter);
//http://plnkr.co/edit/hXOeZvHjpHOulIhD7s2Y?p=preview
  //http://jsfiddle.net/TahmidTanzim/N9Vqk/
  // http://blog.tompawlak.org/use-filter-in-controller-angularjs
  // http://stackoverflow.com/questions/14302267/how-to-use-a-filter-in-a-controller
  $scope.toggleLeft = function() { $ionicSideMenuDelegate.toggleLeft(); };
})


app.controller('SurveyCtrl', function($scope) {
  $scope.showForm = true;
  /*
$scope.convenientLocation.checked = "N/A";
$scope.convenientTime.checked = "N/A";
$scope.convenientDay.checked = "N/A";
*/

  $scope.shirtSizes = [
    { text: 'Large', value: 'L' },
    { text: 'Medium', value: 'M' },
    { text: 'Small', value: 'S' }
  ];
  
  $scope.survey_majors = [
  { text: "Undecided", value: 'Und'},
  { text: "Applied Math", value: 'AM'},
  { text: "Biomedical Engineering", value: 'BME'},
  { text: "Chemical Engineering", value: 'CHEM'},
  { text: "Civil Engineering", value: 'CIV'},
  { text: "Computer Engineering", value: 'CE'},
  { text: "Computer Science (McCormick)", value: 'CS-BS'},
  { text: "Computer Science (Weinberg)", value: 'CS-BA'},
  { text: "Electrical Engineering", value: 'EE'},
  { text: "MaDE", value: 'MADE'},
  { text: "Material Science &amp; Engineering", value: 'MSE'},
  { text: "Mechanical Engineering", value: 'MECH'},
  { text: "Non-Engineering", value: 'NON'},
  { text: "Not specified", value: 'NA'},
  ];

        /*<!--
      <option>Economics</option>
      <option>ISP</option>
      <option>MMM</option>
      <option>MSIT</option>
      <option>MPDD</option>
      <option>MSIA</option>
      -->*/

  $scope.response = {};
  $scope.submit = function() {
    
    // if you want to force any fields to be mandatory indicate them here
    /*if(!$scope.attendee.firstname) {
      alert('Info required');
      return;
    }*/
    $scope.showForm = false;
    $scope.responses.push($scope.response);
  };
  
})




// -------------------------------------------------------------
//
// Company List
//
app.controller('CompanyListCtrl', function($scope, $ionicScrollDelegate, $ionicModal) {
  //$scope.companies = companies;
  
  $scope.toggleFavorite = function(company) {}; //{ $scope.companies.getCompanycompany.favorite = !company.favorite; };
  
  $scope.clearSearch = function() {
    $scope.searchString = '';
  };
  
  
  $scope.scrollBottom = function() {
    $ionicScrollDelegate.scrollBottom(true);
  };
  
    $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop(true);
  };

  $ionicModal.fromTemplateUrl('modal.html', { //templates/settings
    scope: $scope
  }).then(function(modal) {$scope.modal = modal;})

  $scope.openModal = function() {
    console.log('modal opened');

   $scope.modal.show();
  };

  $scope.closeModal = function() { $scope.modal.hide() };

  $scope.$on('$destroy', function() { $scope.modal.remove()
  });
  
});

// -------------------------------------------------------------
//
// Company detail
//
app.controller('CompanyDetailCtrl', function($scope, company) {
  $scope.company = company;
})


// -------------------------------------------------------------
//
// Company Map / Booth Floorplan Layout
//
app.controller('CompanyMapCtrl', function($scope, $location) {
  
// need to use a factory or something, loading this takes sooo sloowwlyy

  $scope.go = function ( path ) { $location.path( path ); };

  /*$scope.hasRotation = function(booth) {
        return booth.hasOwnProperty('rotate');
    }*/
  $scope.rotateBooth = function (boothRotation) {
    var degrees = 0;
      if(boothRotation != null) degrees = boothRotation;
      return "rotate("+degrees+", 0, 0);";
  };
  

  $scope.bWidth = 60; // boothWidth
  $scope.bHeight = 60; // boothHeight
  
  // {{startX - 20}} {{startY - 20}} {{mapWidth + 20}} {{mapHeight + 20}}"
  
  
  // values specific to hilton orrington
  $scope.startX = 80;
  $scope.startY = -200;
  $scope.mapWidth = 1250;
  $scope.mapHeight = 2100;
  
  //var xMin = 0;
  //var xMax = 0;
  //var yMin = 0;
  //var yMax = 0;

/*
  if ($scope.companies.length > 0) {
    xMin = $scope.companies[0].x;
    xMax = $scope.companies[0].x;
    yMin = $scope.companies[0].y;
    yMax = $scope.companies[0].y;
  }

  for (var i = 0; i < $scope.companies.length; i++) {
    var boothPos = $scope.companies[i];
    if (boothPos.x < xMin) xMin = boothPos.x;
    if (boothPos.x > xMax) xMax = boothPos.x;
    if (boothPos.y < yMin) yMin = boothPos.y;
    if (boothPos.y > yMax) yMax = boothPos.y;
  }*/

// this this is outdated......
 /* $scope.startX = xMin;
  $scope.startY = yMin;
  $scope.mapWidth = xMax - xMin + $scope.boothWidth;
  $scope.mapHeight = yMax - yMin + $scope.boothHeight;
  */
    // viewBox="-100 150 1500 400"
  //  $scope.paddingV = 10;
  //   $scope.paddingH = 10;
  // {{mapWidth+paddingH}} {{mapHeight+paddingV}}

  // viewBox="{{startX}} {{startY}} {{mapWidth+100}} {{mapHeight+100}} "

  
  
  
})



//
// Filter Settings
//
app.controller('FilterSettingsCtrl', function($scope) {
  
  
})




/*
//
// Check-in
//
app.controller('CheckinCtrl', function($scope) {
  $scope.showForm = true;
  
  $scope.shirtSizes = [
    { text: 'Large', value: 'L' },
    { text: 'Medium', value: 'M' },
    { text: 'Small', value: 'S' }
  ];
  
  $scope.attendee = {};
  $scope.submit = function() {
    if(!$scope.attendee.firstname) {
      alert('Info required');
      return;
    }
    $scope.showForm = false;
    $scope.attendees.push($scope.attendee);
  };
  
})



//
// Attendee List - in MainCtrl
//
app.controller('AttendeesCtrl', function($scope) {
  //$scope.attendees = attendees;
  
})

//
// Attendee Activity / Toggles
//
app.controller('AttendeeActivityCtrl', function($scope) {
  
  $scope.activity = [];
  $scope.arrivedChange = function(attendee) {
    var msg = attendee.firstname + ' ' + attendee.lastname;
    msg += (!attendee.arrived ? ' has arrived, ' : ' just left, '); 
    msg += new Date().getMilliseconds();
    $scope.activity.push(msg);
    if($scope.activity.length > 3) {
      $scope.activity.splice(0, 1);
    }
  };
  
});*/
