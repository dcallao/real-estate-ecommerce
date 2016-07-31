app.factory('UserFactory', function ($http) {

  var UserFactory = {};

  UserFactory.fetchAll = function () {
    return $http.get('/api/users')
    .then(res => res.data);
  };

  UserFactory.changeAdmin = function(userId, adminStatus) {
    return $http.post('/api/users/changeAdmin/' + userId, {isAdmin: adminStatus})
      .then(res => res.data);
  }

  UserFactory.delete = function (userId) {
    return $http.delete('/api/users/' + userId)
      .then(res => res.data);
  }

  return UserFactory;
});