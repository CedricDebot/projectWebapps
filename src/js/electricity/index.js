import angular from 'angular';

// Create the home module where our functionality can attach to
let electricityModule = angular.module('app.electricity', []);


// Include our UI-Router config settings
import ElectricityConfig from './electricity.config';
electricityModule.config(ElectricityConfig);

// Controllers
import ElectricityController from './electricity.controller';
electricityModule.controller('ElectricityController', ElectricityController);

export default electricityModule;
