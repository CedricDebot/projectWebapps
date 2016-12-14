class SettingsController {

  constructor(User, $state) {
    'ngInject';

    this._User = User;
    this._$state = $state;

    this.formData = {
      djName: User.current.djName,
      region: User.current.region,
      price: User.current.price,
      biography: User.current.biography,
      genres: User.current.genres,
      references: User.current.references
    };

}
    submitForm() {
      this.isSubmitting = true;
      this._User.update(this.formData).then(
        (user) => {
          this.isSubmitting = false;
          this._$state.go('app.profile', {djName:user.djName});
        },
        (err) => {
          this.isSubmitting = false;
          this.errors = res.data.errors;
        }
      )
    };
}

export default SettingsController;
