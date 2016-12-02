import angular from 'angular';

let componentsModule = angular.module('app.components', []);

// components
import ListErrors from './list-errors.component';
componentsModule.component('listErrors', ListErrors);

/*import ProfileMeta from './dj-helpers/profile-meta.component';
componentsModule.component('profileMeta', ProfileMeta);

import DjPreview from './dj-helpers/dj-preview.component';
componentsModule.component('djPreview', DjPreview);

import DjList from './dj-helpers/dj-list.component';
componentsModule.component('djList', DjList);*/

// directives
import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);


export default componentsModule;
