class ProfileCtrl {
  constructor(profile, $state) {
    'ngInject';

    this.profile = profile;
    this._$state = $state;
    }

  book() {
    console.log(this.profile.djName);
    this._$state.go('app.booking',  {djName: this.profile.djName});
  }
}

export default ProfileCtrl;
