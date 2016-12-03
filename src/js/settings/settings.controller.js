class SettingsController {

  constructor(User, $state) {
    'ngInject';

    this._User = User;
    this._$state = $state;

    console.log(this._User);

    this.formData = {
      djName: User.current.djName,
      region: User.current.region,
      price: User.current.price,
      biography: User.current.biography,
      genres: User.current.genres,
      references: User.current.references
    };

    console.log(this.formData);
}
    submitForm() {
      this.isSubmitting = true;
      this._User.update(this.formData).then(
        (user) => {
          console.log('succes!');
          this.isSubmitting = false;
        },
        (err) => {
          this.isSubmitting = false;
          this.errors = res.data.errors;
        }
      )
    };
}

export default SettingsController;
