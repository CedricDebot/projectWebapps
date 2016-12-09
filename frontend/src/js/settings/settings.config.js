function SettingsConfig($stateProvider, $httpProvider) {
  'ngInject';

  // Define the routes
  $stateProvider
  .state('app.settings', {
    url: '/settings',
    controller: 'SettingsController as $ctrl',
    templateUrl: 'settings/settings.html',
    title: 'Settings',
    resolve: {
      auth: function(User) {
        return User.ensureAuthIs(true);
      }
    }
  });
}

export default SettingsConfig;
