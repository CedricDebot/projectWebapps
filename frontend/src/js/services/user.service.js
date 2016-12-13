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
    }).then((res) => {
      this._JWT.save(res.data.user.token);
      this.current = res.data.user;
      console.log(res.data.user);
      return res;
    },
    (err) => {
      console.log(err);
    });
  }

  update(fields) {
    return this._$http({
      url: this._AppConstants.api + '/user',
      method: 'PUT',
      data: {
        user: fields
      }
    }).then(
      (res) => {
        this.current = res.data.user;
        return res.data.user;
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

      // Check for JWT token first
      if (!this._JWT.get()) {
        deferred.resolve(false);
        return deferred.promise;
      }

      // If there's a JWT & user is already set
      if (this.current) {
        deferred.resolve(true);
      } else {
        this._$http({
          url: this._AppConstants.api + '/user',
          method: 'GET',
          headers: {
            Authorization: 'Token ' + this._JWT.get()
          }
        }).then(
          (res) => {
            this.current = res.data.user;
            deferred.resolve(true);
          },
          // If an error happens, that means the user's token was invalid.
          (err) => {
            this._JWT.destroy();
            deferred.resolve(false);
          }
          // Reject automatically handled by auth interceptor
          // Will boot them to homepage
        );
      }

      return deferred.promise;
    }

  logout() {
    this.current = null;
    this._JWT.destroy();

    this._$state.go(this._$state.$current, null, { reload: true });
  }
}
