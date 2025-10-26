angular.module('myApp')
.controller('LoginController', function($scope, $location, AuthService) {
  $scope.login = function() {
    if (AuthService.login($scope.username, $scope.password)) {
      alert('Login successful!');
    } else {
      alert('User not found. Redirecting to registration...');
      $location.path('/register');
    }
  };
})
.controller('RegisterController', function($scope, $location, AuthService) {
  $scope.register = function() {
    AuthService.register($scope.username, $scope.password);
    alert('Registration successful! Redirecting to login...');
    $location.path('/login');
  };
});
