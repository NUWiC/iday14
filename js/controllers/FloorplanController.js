// need to use a factory or something, loading this takes sooo sloowwlyy
// -------------------------------------------------------------
// http://codepen.io/lizz/pen/nKuLm?editors=101
// Company Map / Booth Floorplan Layout
//
app.controller('CompanyMapCtrl', function($scope, $location) {
  

  $scope.go = function ( path ) { $location.path( path ); };

  $scope.rotateBooth = function (boothRotation) {
    var degrees = 0;
      if(boothRotation != null) degrees = boothRotation;
      return "rotate("+degrees+", 0, 0);";
  };
  
  // these variables defined in booths.js
  $scope.bWidth = boothWidth;
  $scope.bHeight = boothHeight;
  //$scope.bWidth = 60; // boothWidth
  //$scope.bHeight = 60; // boothHeight

  //$scope.bWidth = 70; // boothWidth
  //$scope.bHeight = 20; // boothHeight
  
  $scope.roomTitle = "Industry Day 2014 Layout";  
  $scope.roomOutline = "m7.112296,825.497009l-0.257112,-822.069417l1084.832926,-1.713796l0,824.335887l-205.655579,-1.713806l15.424194,-34.275879l-130.248474,0l17.137939,35.989685l-781.233896,-0.552673z M452.69928,1019.155945l-221.336807,-1.161072l0,406.169678l675.235672,0l0,-411.311096l-339.331665,-1.713806l34.27594,46.272461l-186.803772,-1.713745l37.960632,-36.542419z";
  
  

 
 // values specific to THIS floorplan svg image
// i have code to calculate the size of the canvase as well
// and account for case that theres weirdly just 1 booth
// but keeping it fixed for now
  $scope.startX = -20;
  $scope.startY = -4;
  $scope.mapWidth = 1095 + 40; //93
  $scope.mapHeight = 1431;
  // add any padding HERE, not in the view!
    // {{startX - 20}} {{startY - 20}} {{mapWidth + 20}} {{mapHeight + 20}}"


});