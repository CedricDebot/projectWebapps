function CarInsuranceConfig($stateProvider, $httpProvider) {
  'ngInject';

  // Define the routes
  $stateProvider
  .state('app.carinsurance', {
    url: '/carinssurance',
    controller: 'CarInsuranceController as $ctrl',
    templateUrl: 'carinsurance/carinsurance.html',
    title: 'Autoverzekering',
    resolve: {
      auth: function(User) {
        return User.ensureAuthIs(true);
      }
    }
  });
}

export default CarInsuranceConfig;
