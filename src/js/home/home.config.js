function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    /*resolve: {
      auth: function(User) {
        return User.ensureAuthIs(true);
      }
    }*/
  });

}

export default HomeConfig;
