import angular from 'angular';

let settingsModule = angular.module('app.settings', []);

import SettingsConfig from './settings.config';
settingsModule.config(SettingsConfig);

import SettingsController from './settings.controller';
settingsModule.controller('SettingsController', SettingsController);

export default settingsModule;
