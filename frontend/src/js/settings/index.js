import angular from 'angular';

// Create the home module where our functionality can attach to
let settingsModule = angular.module('app.settings', []);


// Include our UI-Router config settings
import SettingsConfig from './settings.config';
settingsModule.config(SettingsConfig);

// Controllers
import SettingsController from './settings.controller';
settingsModule.controller('SettingsController', SettingsController);

export default settingsModule;
