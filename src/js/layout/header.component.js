class AppHeaderCtrl {
  constructor(AppConstants, User) {
    'ngInject';

    this.appName = AppConstants.appName;

    this.logout = User.logout.bind(User);
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
