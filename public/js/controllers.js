// Main Controller
myApp.controller('mainController',function mainController($scope, $http)
{
	$http({
	    method: 'GET',
	    url: '/api/quote'
	}).then(function successCallback(response) {
	    $scope.quotes = response;
	    console.log("Done");
	}, function errorCallback(response) {
	    console.log(response);
	});
});
// Home Controller
myApp.controller('homeController',function homeController($scope)
{

});
// viewFlights Controller
myApp.controller('flightsController',function flightsController($scope)
{

});
// Flight Controller
myApp.controller('flightsController',function flightsController($scope)
{

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
