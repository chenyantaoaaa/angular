var app = angular.module('phonecatApp',["ui.router","oc.lazyLoad","myservice"])
.constant('_', window._)//lodash全局变量
// use in views, ng-repeat="x in _.range(3)"
.run(function ($rootScope) {
   $rootScope._ = window._;
});
 
app.config(
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
            app.controller = $controllerProvider.register;//注册controller 将模板对应的js注册
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service; 
            app.constant = $provide.constant;
            app.value = $provide.value;
        }
    ]
);

app.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {//懒加载
    $ocLazyLoadProvider.config({
        debug: true,
        events: true
    });
}]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main/phones");
    $stateProvider
    // .state("phones", {
    //     url: "/phones",
    //     templateUrl: "model/phone-list.html",
    //     resolve: {
    //         deps: ['$ocLazyLoad',
    //             function ($ocLazyLoad) {
    //                 return $ocLazyLoad.load(['js/controllers/mobile_controller.js'], {cache: false});
    //             }
    //         ]
    //     }
    // })
    .state("main", {
        url: "/main",
        templateUrl: "model/main.html"
    })
    .state("main.phones", {//父页面.子页面
        url: "/phones",
        views: {
            "mainview": {//这里的名字对应到 ui-view=""中的名字
                templateUrl: "model/phone-list.html",
            }
        },
        // templateUrl: "model/phone-list.html",
        resolve: {
            deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['js/controllers/mobile_controller.js'], {cache: false});
                }
            ]
        }
    });

});
