function ProfileConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.profile', {
    url: '/djs/profile/:djName',
    controller: 'ProfileCtrl as $ctrl',
    templateUrl: 'profile/profile.html',
    //title: "profile",
    resolve: {
      profile: function(Profile, $state, $stateParams) {
        return Profile.get($stateParams.djName).then(
          (profile) => profile,
          (err) => $state.go('app.home')
        );
      }
    }
  });
}

export default ProfileConfig;
