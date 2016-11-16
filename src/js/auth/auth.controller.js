class AuthController {

  constructor(User, $state) {
    'ngInject';

    this.title = $state.current.title;
    this._User = User;
    this._$state = $state;
    this.authType = $state.current.name.replace('app.', '');
  }

  submitForm() {
    this.isSubmitting = true;

    this._User.attemptAuth(this.authType, this.formData).then(
      (res) => {
        this._$state.go('app.home');
      },
      (err) => {
        this.isSubmitting = false;
        console.log(err.data.errors);
      }
    );
  }
}

export default AuthController;
