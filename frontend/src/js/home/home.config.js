function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl as $ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    resolve: {
      profile: function(Profile) {
        return Profile.getDjsInThePicture();
      }
    }
  });

}

export default HomeConfig;
