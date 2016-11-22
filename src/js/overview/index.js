import angular from 'angular';

let overviewModule = angular.module('app.overview', []);

import OverviewConfig from './overview.config';
overviewModule.config(OverviewConfig);

import OverviewCtrl from './overview.controller';
overviewModule.controller('OverviewCtrl', OverviewCtrl);

export default overviewModule;
