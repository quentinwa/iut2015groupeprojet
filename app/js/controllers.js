'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', '$http',
  function($scope, $routeParams, Phone, $http) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
    $scope.sendEmail = function() {
    var req = {
        method: 'POST',
         url:'http://api.mailgun.net/v3/sandbox2dde62dbe4fa4d379e0e68dd9d27e5b8.mailgun.org/messages?to=raphaya@laposte.net&from=raphaya@laposte.net&text=blabla',
         headers: {
            'Authorization' : 'Basic YXBpOmtleS05OGU5MTFmNmYzYTRlZWE4MGU3Y2U3OWM0MGEzNGZlZQ=='
         },
    };   
    
    $http(req).success(function(response)  {
        alert('Message envoyé');
    }).error(function(response){
            alert('Message non envoyé');
        });
 } 


    
    
  }]);
