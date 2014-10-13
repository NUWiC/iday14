//angular.module('idayIonic.filters', [])


//http://stackoverflow.com/questions/15266671/angular-ng-repeat-in-reverse
app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

// All filters must return a function. The first parameter
// is the data that is to be filtered, and the second is
// an argument that may be passed with a colon
// (searchFor:searchString)
app.filter('instantNameSearch', function(){

	return function(list, searchString){

		if(!searchString){ return list; }
		var result = [];
		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(list, function(item){
		
    // only searches the name, not the description!!
    // make sure to change the property of what you're searching here....
    if(item.name.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});//; //;



app.filter('checkmark', function() {
  return function(input) {
    // check symbol if true, x if false
    return input ? '\u2713' : '\u2718';
  };
});//;



app.directive('ngXlinkHref', function () {
  return {
    priority: 99,
    restrict: 'A',
    link: function (scope, element, attr) {
      var attrName = 'xlink:href';
      attr.$observe('ngXlinkHref', function (value) {
        if (!value)
          return;

        attr.$set(attrName, value);
      });
    }
  };
});

/*
// http://jsfiddle.net/mrajcok/5ttQA/
app.directive('ngIf', function() {
    return {
        link: function(scope, element, attrs) {
            if(scope.$eval(attrs.ngIf)) {
                // remove '<div ng-if...></div>'
                element.replaceWith(element.children())
            } else {
                element.replaceWith('')
            }
        }
    }
});*/



//'use strict';

/* Filters 

// Define a new module for our app. 
// The array holds the names of dependencies if any.
// var app = a
//angular.module('idayFilters', []) //;

//angular.module('idayIonic.idayFilters', [])

// All filters must return a function.
// Param 1: the data to be filtered, 
// Param 2: an argument that may be passed 
// http://tutorialzine.com/2013/08/learn-angularjs-5-examples/

//app.filter
.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});*/
