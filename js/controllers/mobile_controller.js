app.controller('PhoneListCtrl', function ($scope,$http,myService) {
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
    var x = "h h h h h h h";
    alert(_.map(users,function(user){
      return [user.name+"haha",user.age+1]
    }));
  }

  function square(n) {
    return n * n;
  }
   
  _.map([4, 8], square);
  // => [16, 64]
   
  
  // => [16, 64] (iteration order is not guaranteed)
   
  var users = [
    { 'name': 'chen','age':'1' },
    { 'name': 'liu' ,'age':'2' }
  ];


   
  // The `_.property` iteratee shorthand.
  _.map(users, 'user');
  // => ['barney', 'fred']
});