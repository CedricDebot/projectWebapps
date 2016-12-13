class HomeCtrl {
  constructor(AppConstants, Profile, profile, $state) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._Profile = Profile;
    this.profile = profile;
    this._$state = $state;
    this._queryParams = "";
  }

  submitForm() {
    this.isSubmitting = true;

    switch(true) {
      case !this.formData.genre && !this.formData.region && !this.formData.price:
        this._queryParams = "";
        break;
      case !this.formData.genre && !this.formData.region:
      //  this.listConfig.filters = { price : this.formData.price };
        this._queryParams = "?price=" + this.formData.price;
        break;
      case !this.formData.genre && !this.formData.price:
        //this.listConfig.filters = { region: this.formData.region };
        this._queryParams = "?region=" + this.formData.region;
        break
      case !this.formData.region && !this.formData.price:
        //this.listConfig.filters = { genre: this.formData.genre };
        this._queryParams = "?genre=" + this.formData.genre;
        break;
      case !this.formData.genre:
        //this.listConfig.filters = { region: this.formData.region, price: this.formData.price };
        this._queryParams = "?region=" + this.formData.region + "&price=" + this.formData.price;
        break;
      case !this.formData.region:
        //this.listConfig.filters = { genre: this.formData.genre, price: this.formData.price };
        this._queryParams = "?genre=" + this.formData.genre + "&price=" + this.formData.price;
        break;
      case !this.formData.price:
        //this.listConfig.filters = { genre: this.formData.genre, region: this.formData.region };
        this._queryParams = "&region=" + this.formData.region + "?genre=" + this.formData.genre;
        break;
      default:
        //this.listConfig.filters = { genre: this.formData.genre, region: this.formData.region, price:  this.formData.price };
        this._queryParams = "?region=" + this.formData.region + "&genre=" + this.formData.genre + "&price=" + this.formData.price;
        break;
    }

    this._Profile.searchDjs(this._queryParams).then(
      (res) => {
        console.log(res);
        this.isSubmitting = false;
        this._$state.go('app.overview', {queryParams: this._queryParams});
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      });
  }

  submitFormDjName() {
    this.isSubmitting = true;

    this._Profile.get(this.formDataName.djName).then(
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
