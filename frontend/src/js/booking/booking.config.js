function BookingConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.booking', {
    url: '/djs/profiles/booking/:djName',
    controller: 'BookingCtrl as $ctrl',
    templateUrl: 'booking/booking.html',
    resolve: {
      profile: function(Profile, $state, $stateParams) {
        return Profile.get($stateParams.djName).then(
          (profile) => profile,
          (err) => $state.go('app.home'),
        );
      }
    }

  });
}

export default BookingConfig;
