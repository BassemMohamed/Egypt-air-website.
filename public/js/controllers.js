// Main Controller
myApp.controller('mainController',function mainController($scope) 
{
	
});
// Home Controller
myApp.controller('homeController',function homeController($scope) 
{

});
// viewFlights Controller
myApp.controller('viewflightsController',function flightsController($scope, $http) 
{
	$scope.submit = function()
	{
		var originsData = origins.value;
		var destinationsData = destinations.value;
		var ticketclassData = ticketclass.value;
		var departingdateData = departingdate.value; 
		var returningdateData = returningDate.value;

		$http({
	    	method: 'GET',
	    	url: '/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class'
		}).then(function successCallback(response) {
	   	 	$scope.flights = response.data;
	    	console.log("Done");
		}, function errorCallback(response) {
	    	console.log(response);
		});
	}
	

});
// Flight Controller
myApp.controller('flightsController',function flightsController($scope, $http) 
{
	// $http({
	//     method: 'GET',
	//     url: '/api/flights'
	// }).then(function successCallback(response) {
	//     $scope.flights = response.data;
	//     console.log("Done");
	// }, function errorCallback(response) {
	//     console.log(response);
	// });
});
// Track a flight Controller
myApp.controller('trackFlightController',function trackFlightController($scope) 
{

});
// Boarding Controller
myApp.controller('boardingController',function boardingController($scope ) 
{

});
// About Controller
myApp.controller('aboutController',function aboutController($scope) 
{

});
// Confirm Controller
myApp.controller('confirmController',function confirmController($scope) 
{

});

