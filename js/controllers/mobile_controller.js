app.controller('PhoneListCtrl', function ($scope,$http) {
  // $scope.phones = [
  //   {'name': 'Nexus S',
  //    'snippet': 'Fast just got faster with Nexus S.',
  //    'age':'1'},
  //   {'name': 'Motorola XOOM? with Wi-Fi',
  //    'snippet': 'The Next, Next Generation tablet.',
  //    'age':'3'},
  //   {'name': 'MOTOROLA XOOM?',
  //    'snippet': 'The Next, Next Generation tablet.',
  //    'age':'2'}
  // ];

  $http.get('../static/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.names = [
      1,2,3,4,5,6,7,8,9,0,123
  ]
  $scope.orderProp = 'age';

  $scope.aler = function(){
    alert(123);
  }
});