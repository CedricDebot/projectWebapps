export default class Profile {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  get(id) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/djs/' + id,
      method: 'GET'
    }).then((res) => {
      return res.data;
    });
  }

/*  query(config) {
    let request = {
      url: this._AppConstants.api + '/djs',
      method: 'GET',
      params: 'config.filters ? config.filters : null'
    };

    return this._$http(request).then((res) => res.data);
  }*/
}
