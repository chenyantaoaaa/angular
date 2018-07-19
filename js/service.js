var app = angular.module("myservice", []);

app.service('myService', function ($http,$q){
    this.num = 1000;
});

