// var phonecatApp = angular.module('phonecatApp', [
//     'ngRoute',
//     'phonecatControllers'
//   ]);

// phonecatApp.config(['$routeProvider',
// function($routeProvider) {
//     $routeProvider.
//         when('/phones', {
//             templateUrl: 'phones/phone-list.html',
//             controller: 'PhoneListCtrl'
//         }).
//         otherwise({
//             redirectTo: '/phones'
//         });
// }]);

var app = angular.module('phonecatApp',["ui.router","oc.lazyLoad"]);

app.config(
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service; 
            app.constant = $provide.constant;
            app.value = $provide.value;
        }
    ]
);

app.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        debug: true,
        events: true
    });
}]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state("phones", {
        url: "/phones",
        templateUrl: "model/phone-list.html",
        resolve: {
            deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['js/controllers/mobile_controller.js'], {cache: false});
                }
            ]
        }
    });

});
