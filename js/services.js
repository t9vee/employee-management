angular.module('myApp')
.factory('AuthService', function() {
  let users = {};

  return {
    login: function(username, password) {
      return users[username] === password;
    },
    register: function(username, password) {
      users[username] = password;
    }
  };
});
