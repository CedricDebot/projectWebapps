import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// services
import JwtService from './jwt.service';
servicesModule.service('JWT', JwtService);

import UserService from './user.service';
servicesModule.service('User', UserService);



export default servicesModule;
