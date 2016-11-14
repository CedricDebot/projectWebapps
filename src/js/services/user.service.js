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
        method: 'GET'
      }).then(
        (res) => {
          this.current = res.data.user;
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

    // Do a hard reload of current state to ensure all data is flushed
    this._$state.go(this._$state.$current, null, { reload: true });
  }

  attemptAuth(credentials) {
    return this._$http({
      url: this._AppConstants.api + '/users/login',
      method: 'POST',
      data: {
        user: credentials
      }
    }).then(
      (res) => {
        // Set the Jwt token
        this._JWT.save(res.data.user.token);
        this.current = res.data.user;
        return res;
      }
    );
  }
}
