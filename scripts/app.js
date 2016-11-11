(function () {
  var module = angular.module("app", [
    'app.home'
    , 'ui.bootstrap'
    , 'ui.tinymce'
  ]);

  module.config(AppConfig);

  AppConfig.$inject = [];

  function AppConfig() { }
})();
