// Main Controller
myApp.controller('mainController',function mainController($scope) 
{
	
});
// Home Controller
myApp.controller('homeController',function homeController($scope) 
{

});
// viewFlights Controller
myApp.controller('flightsController',function flightsController($scope, $http) 
{
	$scope.submit = function()
	{
		var origin = "origins.value";
		var destination = "destinations.value";
		var ticketclass = "ticketclass.value";
		var departingDate = "departingdate.value"; 
		var returningDate = "returningDate.value";

		$http({
	    	method: 'GET',
	    	url: '/api/flights/search/:' + origin + '/:' + destination + '/:' + departingDate + '/:' + returningDate + '/:' + ticketclass,
	    	params: 
	    	{
	    		origin: origin,
	    		destination: destination,
	    		class: ticketclass,
	    		departingdate: departingDate,
	    		returningdate: returningDate
	    	}
		}).then(function successCallback(response) {
	   	 	//$scope.flights = response.data;
	    	console.log("Done");
		}, function errorCallback(response) {
	    	console.log(response);
		});
	}
	

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

