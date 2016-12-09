function BookingConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.booking', {
    url: 'djs/profile/booking',
    controller: 'BookingCtrl as $ctrl',
    templateUrl: 'booking/booking.html'
  });
}

export default BookingConfig;
