import angular from 'angular';

// Create the home module where our functionality can attach to
let telephoneModule = angular.module('app.telephone', []);


// Include our UI-Router config settings
import TelephoneConfig from './telephone.config';
telephoneModule.config(TelephoneConfig);

// Controllers
import TelephoneController from './telephone.controller';
telephoneModule.controller('TelephoneController', TelephoneController);

export default telephoneModule;
