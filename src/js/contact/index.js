import angular from 'angular';

let contactModule = angular.module('app.contact', []);

import ContactConfig from './contact.config';
contactModule.config(ContactConfig);

import ContactCtrl from './contact.controller';
contactModule.controller('ContactCtrl', ContactCtrl);

export default contactModule;
