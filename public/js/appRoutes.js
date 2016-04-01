angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) 
{

    $routeProvider

        // Home Page
        .when('/', {
            templateUrl: './index.html',
            controller: 'mainController'
        })

        // Flights Page
        .when('/flights', {
            templateUrl: 'html/viewFlights.html',
            controller: 'viewFlightsController'
        });

        .when('/trackflight', {
            templateUrl: 'html/trackFlight.html',
            //controller: 'viewFlightsController'
        });

        // 3'alban 3'lt
        .when('/flight', {
            templateUrl: 'html/flight.html',
            //controller: 'viewFlightsController'
        });

        .when('/confirm', {
            templateUrl: 'html/confirm.html',
            //controller: 'viewFlightsController'
        });
        
        .when('/boarding', {
            templateUrl: 'html/boarding.html',
            //controller: 'viewFlightsController'
        });

    $locationProvider.html5Mode(true);

}]);