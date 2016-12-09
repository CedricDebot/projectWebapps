function ContactConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.contact', {
    url: '/contact',
    controller: 'ContactCtrl as $ctrl',
    templateUrl: 'contact/contact.html',
    title: 'contact',
  });
}

export default ContactConfig;
