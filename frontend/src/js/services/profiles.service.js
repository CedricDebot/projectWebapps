export default class Profile {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  searchDjs(queryParams) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/djs' + queryParams ,
      method: 'GET'
    }).then((res) => {
      return res.data;
    })
  }

  get(djName) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/djs/djName/' + djName,
      method: 'GET'
    }).then((res) => {
      return res.data;
    });
  }

  getDjsInThePicture() {
    return this._$http({
      url: this._AppConstants.api + '/profiles/inthepicture',
      method: 'GET'
    }).then((res) => {
      return res.data;
    });
  }
}
