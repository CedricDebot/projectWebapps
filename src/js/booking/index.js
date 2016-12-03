import angular from 'angular';

let bookingModule = angular.module('app.booking', []);

import BookingConfig from './booking.config';
bookingModule.config(BookingConfig);

import BookingCtrl from './booking.controller';
bookingModule.controller('BookingCtrl', BookingCtrl);

export default bookingModule;
