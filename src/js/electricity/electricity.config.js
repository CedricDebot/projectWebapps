function ElectricityConfig($stateProvider, $httpProvider) {
  'ngInject';

  // Define the routes
  $stateProvider
  .state('app.electricity', {
    url: '/electricity',
    controller: 'ElectricityController as $ctrl',
    templateUrl: 'electricity/electricity.html',
    title: 'Elektriciteit',
    resolve: {
      auth: function(User) {
        return User.ensureAuthIs(true);
      }
    }
  });
}

export default ElectricityConfig;
