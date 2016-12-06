class HomeCtrl {
  constructor(AppConstants, Profile, $state) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._profile = Profile;
    this._$state = $state;

  }

  /*submitForm() {
    this.isSubmitting = true;

    this._profile.searchDjByName().then(
      (res) => {
        console.log(res);
        this.isSubmitting = false;
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      });
  }*/

  submitFormDjName() {
    this.isSubmitting = true;

    this._profile.searchDjByName(this.formDataName.djName).then(
      (res) => {
        this.isSubmitting = false;
        this._$state.go('app.profile', {djName: this.formDataName.djName});
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      });
  }
}

export default HomeCtrl;
