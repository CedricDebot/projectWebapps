function OverviewConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.overview', {
    url: '/djs',
    controller: 'OverviewCtrl as $ctrl',
    templateUrl: 'overview/overview.html',
    title: 'djs',
    resolve: {
      /*profile: function(Profile, $stateParams, $state) {
        return Profile.searchDjs($stateParams.this._queryParams).then(
          (profile) => profile,
          (err) => $state.go('app.home')
        );
      }*/
  /*    profile: function(Profile, $state, $stateParams) {
        return Profile.searchDjs($stateParams.this._queryParams).then(
          (profile) => profile,
          (err) => $state.go('app.home')
        );
      }*/
    }
  });
}

export default OverviewConfig;
