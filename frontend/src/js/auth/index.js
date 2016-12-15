import angular from 'angular';

let authModule = angular.module('app.auth', []);

import AuthConfig from './auth.config';
authModule.config(AuthConfig);

import AuthController from './auth.controller';
authModule.controller('AuthController', AuthController);

export default authModule;
