class HomeCtrl {
  constructor(AppConstants, Profile, $state) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._profile = Profile;
    this._$state = $state;

  }

  submitForm() {
    this.isSubmitting = true;

    switch(true) {
      case !this.formData.genre && !this.formData.region && !this.formData.price:
        this.listConfig.filters = null;
        break;
      case !this.formData.genre && !this.formData.region:
        this.listConfig.filters = { price : this.formData.price };
        break;
      case !this.formData.genre && !this.formData.price:
        this.listConfig.filters = { region: this.formData.region };
        break
      case !this.formData.region && !this.formData.price:
        this.listConfig.filters = { genre: this.formData.genre };
        break;
      case !this.formData.genre:
        this.listConfig.filters = { region: this.formData.region, price: this.formData.price };
        break;
      case !this.formData.region:
        this.listConfig.filters = { genre: this.formData.genre, price: this.formData.price };
        break;
      case !this.formData.price:
        this.listConfig.filters = { genre: this.formData.genre, region: this.formData.region };
        break;
      default:
        this.listConfig.filters = { genre: this.formData.genre, region: this.formData.region, price:  this.formData.price };
        break;
    }

    console.log(this.listConfig.filters);

    this._profile.searchDjs(this.formData.genre, this.formData.region, this.formData.price).then(
      (res) => {
        console.log(res);
        this.isSubmitting = false;
        this._$state.go('app.overview');
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      });
  }

  submitFormDjName() {
    this.isSubmitting = true;

    this._profile.get(this.formDataName.djName).then(
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
