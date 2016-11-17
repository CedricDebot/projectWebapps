function ProfileConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.profile', {
    url: '/profile',
    controller: 'ProfileCtrl as $ctrl',
    templateUrl: 'profile/profile.html',
    title: "profile"
  });
}

export default ProfileConfig;
