function TelephoneConfig($stateProvider, $httpProvider) {
  'ngInject';

  // Define the routes
  $stateProvider
  .state('app.telephone', {
    url: '/telephone',
    controller: 'TelephoneController as $ctrl',
    templateUrl: 'telephone/telephone.html',
    title: 'Telefonie',
    resolve: {
      auth: function(User) {
        return User.ensureAuthIs(true);
      }
    }
  });
}

export default TelephoneConfig;
