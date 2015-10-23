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
    
    $scope.sendEmail = function(){
        
        var req = {
            method: 'POST',
            url: 'https://api.mailgun.net/v3/sandbox1a772981c6814abd835afcc7c72dc269.mailgun.org/messages?to=quentinwa@laposte.net&from=quentinwa@laposte.net&text=salut',
            headers: {
                'Authorization': 'Basic YXBpOmtleS0xZTNlMzk0YzlkZmJkOTNkNmM1ZDlkNTNiYWViYTRiMw=='
            }
        };
        
        $http(req).success(function(response){
            alert ('Message envoyé');
        }).error(function(response){
            alert ('Message non envoyé');
        });
    };
    
  }]);
  

