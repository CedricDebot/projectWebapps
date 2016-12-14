class ProfileCtrl {
  constructor(profile, $state) {
    'ngInject';

    this.profile = profile;
    this._$state = $state;
    }

  book() {
    this._$state.go('app.booking',  {djName: this.profile.djName});
  }
}

export default ProfileCtrl;
