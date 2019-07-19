
(function() {
    'use strict';
    
    angular.module('cookie', []);
    
    var app = angular.module('cookie');
    
    app.controller('cookieController', ['$scope', function($scope, $cookieStore) {
    
      
  this.init = function(element, options) {
    $cookieStore.put('Name', 'Anubhav');
    alert($scope.cookie = $cookieStore.get('Name'));
  };
    
    }]);
    })();