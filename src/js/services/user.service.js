export default class User {

  constructor(AppConstants, $http, JWT, $state, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._JWT = JWT;
    this._$state = $state;
    this._$q = $q;

    // Current user data
    this.current = null;
  }

  attemptAuth(type, credentials) {
    let route = (type === 'login') ? '/login' : '';

    return this._$http({
      url: this._AppConstants.api + '/users' + route,
      method: 'POST',
      data: {
        user: credentials
      }
    }).then( (res) => {
      this._JWT.save(res.data.token);
      this.current = res.data;
      return res;
    },
    (err) => {
      console.log(err);
    });
  }

  // This method will be used by UI-Router resolves
  ensureAuthIs(bool) {
    let deferred = this._$q.defer();

    this.verifyAuth().then((authValid) => {
      // if it's the opposite, redirect home
      if (authValid !== bool) {
        this._$state.go('app.login');
        deferred.resolve(false);
      } else {
        deferred.resolve(true);
      }
    })

    return deferred.promise;
  }

  verifyAuth() {
    let deferred = this._$q.defer();

    if (!this._JWT.get()) {
      deferred.resolve(false);
      return deferred.promise;
    }

    if (this.current) {
      deferred.resolve(true);
    } else {
      this._$http({
        url: this._AppConstants.api + '/user',
        method: 'GET',
        headers: {
          Authorization: 'Token' + this._JWT.get()
        }
      }).then(
        (res) => {
          this.current = res.data;
          deferred.resolve(true);
        },
        () => {
          this._JWT.destroy();
          deferred.resolve(false);
        }
      )
    }

    return deferred.promise;
  }

  logout() {
    this.current = null;
    this._JWT.destroy();

    this._$state.go(this._$state.$current, null, { reload: true });
  }
}
