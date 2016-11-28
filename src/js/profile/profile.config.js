function ProfileConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.profile', {
    url: '/djs/:id',
    controller: 'ProfileCtrl as $ctrl',
    templateUrl: 'profile/profile.html',
    //title: "profile",
    resolve: {
      profile: function(Profile, $state, $stateParams) {
        return Profile.get($stateParams.id).then(
          (profile) => profile,
          (err) => $state.go('app.overview'),
        );
      }
     }
  });
}

export default ProfileConfig;
