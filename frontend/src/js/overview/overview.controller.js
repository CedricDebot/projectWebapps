class OverviewCtrl {
  constructor(profile, $state) {
    'ngInject';

    this.profile = profile;
    this._$state = $state;
  }

  clickDj(djName) {
    this._$state.go('app.profile', {djName: djName});
  }
}

export default OverviewCtrl;
