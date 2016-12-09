export default class Profile {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  /*get(id) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/djs/' + id,
      method: 'GET'
    }).then((res) => {
      return res.data;
    });
  }*/

  query(config) {
    let request = {
      url: this._AppConstants.api + '/profiles/djs/',
      method: 'GET',
      params: config.filters ? config.filters : null
    };

    return this._$http(request).then((res) => res.data);
  }

  searchDjs(queryParams) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/djs' + queryParams ,
      method: 'GET'
    }).then((res) => {
      console.log(res.data);
      return res.data;
    })
  }

  get(djname) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/djs/djname/' + djname,
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
      console.log(res.data);
      return res.data;
    });
  }
}
