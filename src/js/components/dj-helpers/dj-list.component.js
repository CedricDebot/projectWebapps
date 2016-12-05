class DjListCtrl {
  constructor(Djs, $scope) {
    'ngInject';

    this._Djs = Djs;

    this.setListTo(this.listConfig);

    $scope.$on('setPageTo', (ev, pageNumber) => {
      this.setPageTo(pageNumber);
    });
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

    if(!this.listConfig.currentPage) {
      this.listConfig.currentPage = 1;
    }

    queryConfig.filters.offset = (this.limit * (this.listConfig.currentPage - 1));

    this._Djs
      .query(queryConfig)
      .then((res) => {
        this.loading = false;
        this.list = res.djs;

        this.listConfig.totalPages = Math.ceil(res.djsCount / this.limit);
      });
  }

  setPageTo() {
    this.listConfig.currentPage = pageNumber;

    this.runQuery();
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
