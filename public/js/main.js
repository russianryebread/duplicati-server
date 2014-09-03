$(document).ready(function() {

  // Place JavaScript code here...

});


/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////    Angular    /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


var Dashboard = angular.module('Dashboard', ['ngRoute']);

Dashboard.controller('AppController', function($scope, $http) {
	$scope.success = 80;
	$scope.warn = 15;
	$scope.error = 8;
	$scope.total = ($scope.success + $scope.warn + $scope.error);
	
	$scope.method = 'GET';
	$scope.url = "http://crm.ccwis.com/ap/get_open_cases.php?data=cases"
	$scope.items = [];
			
	$http({method: $scope.method, url: $scope.url}).
	    success(function(data, status) {
	    	$scope.status = status;
			$scope.items = data;
			$('.loading_icon').hide();
	    }).error(function(data, status) {
	    	$scope.data = data || "Request failed";
			$scope.status = status;
		});
});