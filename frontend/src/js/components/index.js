import angular from 'angular';

let componentsModule = angular.module('app.components', []);

// components
import ListErrors from './list-errors.component';
componentsModule.component('listErrors', ListErrors);

import ProfileMeta from './dj-helpers/profile-meta.component';
componentsModule.component('profileMeta', ProfileMeta);

import ProfilePreview from './dj-helpers/profile-preview.component';
componentsModule.component('profilePreview', ProfilePreview);

import ProfileList from './dj-helpers/profile-list.component';
componentsModule.component('profileList', ProfileList);

import ListPagination from './dj-helpers/list-pagination.component';
componentsModule.component('listPagination', ListPagination);

// directives
import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import ShowImage from './show-image.directive';
componentsModule.directive('showImage', ShowImage);

export default componentsModule;
