function ShowImage() {
  'ngInject';

  return {
    restrict: 'A',
    scope: {
      image: '='
    },
    link: function(scope, element) {
      if (scope.image.length > 0) {
        angular.element(element).css({
          'background-image' : 'url(' + scope.image + ')'
        });
      } else {
        angular.element(element).addClass('no-image');
      }
    }
  };
}

export default ShowImage;
