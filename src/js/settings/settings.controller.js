class SettingsController {

  constructor($state) {
    'ngInject';

    this.title = $state.current.title;
    this._$state = $state;
  }
}

export default SettingsController;
