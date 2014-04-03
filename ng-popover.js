
(function () {
  'use strict';

angular.module('mypopover', []).directive('mypopover', function ($compile, $templateCache) {
 
   var getTemplate = function (contentType) {
    var template = '';
    switch (contentType) {
      case 'events':
        template = $templateCache.get('eventsTemplate.html');
        break;
    }
    return template;
  }
  return {
    restrict: "A",
    transclude: true,
    template: "<span ng-transclude></span>",
    link: function (scope, element, attrs) {
      var popOverContent;
      if (scope.items) {
        var html = getTemplate("events"),
            options;
        popOverContent = $compile(html)(scope);
      
        options = {
          content: popOverContent,
          placement: "left",
          html: true,
        };
        $(element).popover(options);
      }
    },
    scope: {
      items: '='
    }
  };
});
})()
