import angular from 'angular';

// Create the home module where our functionality can attach to
let carInsuranceModule = angular.module('app.carinsurance', []);


// Include our UI-Router config settings
import CarInsuranceConfig from './carinsurance.config';
carInsuranceModule.config(CarInsuranceConfig);

// Controllers
import CarInsuranceController from './carinsurance.controller';
carInsuranceModule.controller('CarInsuranceController', CarInsuranceController);

export default carInsuranceModule;
