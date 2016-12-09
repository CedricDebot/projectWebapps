function AuthConfig($stateProvider) { //$httpProvider
  'ngInject';

  // Define the routes
  $stateProvider
  .state('app.login', {
    url: '/login',
    controller: 'AuthController as $ctrl',
    templateUrl: 'auth/auth.html',
    title: 'Inloggen',
    resolve: {
      auth: function(User) {
        return User.ensureAuthIs(false);
      }
    }
  })

  .state('app.register', {
    url: '/register',
    controller: 'AuthController as $ctrl',
    templateUrl: 'auth/auth.html',
    title: "Registeren",
    resolve: {
      auth: function(User) {
        return User.ensureAuthIs(false);
      }
    }
  });
}

export default AuthConfig;
