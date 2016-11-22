function OverviewConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.overview', {
    url: '/djs',
    controller: 'OverviewCtrl as $ctrl',
    templateUrl: 'overview/overview.html',
    title: 'djs',
  });
}

export default OverviewConfig;
