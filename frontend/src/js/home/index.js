import angular from 'angular';

let homeModule = angular.module('app.home', []);

import HomeConfig from './home.config';
homeModule.config(HomeConfig);

import HomeCtrl from './home.controller';
homeModule.controller('HomeCtrl', HomeCtrl);

export default homeModule;
