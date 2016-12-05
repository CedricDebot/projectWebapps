class DjListCtrl {
  constructor(Djs) {
    'ngInject';

    this._Djs = Djs;

    this.setListTo(this.listConfig);
  }

  setListTo(newList) {
    this.list = [];

    this.listConfig = newList;

    this.runQuery();
  }

  runQuery() {
    this.loading = true;

    let queryConfig = {
      type: this.listConfig.type,
      filters: this.listConfig.filters || {}
    };

    this._Djs
      .query(queryConfig)
      .then((res) => {
        this.loading = false;
        this.list = res.djs;
      });
  }
}

let DjList = {
  bindings: {
    listConfig: '='
  },
  controller: DjListCtrl,
  templateUrl: 'components/dj-helpers/dj-list.html'
};

export default DjList;
