class HomeCtrl {
  constructor(AppConstants, profile, $state) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._profile = profile;
    this._$state = $state;
    console.log(profile);
  }

  submitForm() {
    this.isSubmitting = true;
    var queryParams = "";
    switch(true) {
      case this.formData.genre === 'undefined' && !this.formData.region && !this.formData.price:
        queryParams = "";
        break;
      case !this.formData.genre && !this.formData.region:
      //  this.listConfig.filters = { price : this.formData.price };
        queryParams = "?price=" + this.formData.price;
        break;
      case !this.formData.genre && !this.formData.price:
        //this.listConfig.filters = { region: this.formData.region };
        queryParams = "?region=" + this.formData.region;
        break
      case !this.formData.region && !this.formData.price:
        //this.listConfig.filters = { genre: this.formData.genre };
        queryParams = "?genre=" + this.formData.genre;
        break;
      case !this.formData.genre:
        //this.listConfig.filters = { region: this.formData.region, price: this.formData.price };
        queryParams = "?region=" + this.formData.region + "&price=" + this.formData.price;
        break;
      case !this.formData.region:
        //this.listConfig.filters = { genre: this.formData.genre, price: this.formData.price };
        queryParams = "?genre=" + this.formData.genre + "&price=" + this.formData.price;
        break;
      case !this.formData.price:
        //this.listConfig.filters = { genre: this.formData.genre, region: this.formData.region };
        queryParams = "&region=" + this.formData.region + "?genre=" + this.formData.genre;
        break;
      default:
        //this.listConfig.filters = { genre: this.formData.genre, region: this.formData.region, price:  this.formData.price };
        queryParams = "?region=" + this.formData.region + "&genre=" + this.formData.genre + "&price=" + this.formData.price;
        break;
    }

    console.log(queryParams);

    this._profile.searchDjs(queryParams).then(
      (res) => {
        console.log(res);
        this.isSubmitting = false;
        this._$state.go('app.overview', queryParams);
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
