(function () {
  var module = angular.module("app.home", []);

  module.controller("HomeController", Controller);

  Controller.$inject = ['$scope', '$sce', 'SettingsDialogProvider'];

  function Controller($scope, $sce, SettingsDialogProvider) {

    $scope.message = {
      body: null
    };

    $scope.options = {
      trusted: true,
      resize: true,
      min_height: 200,
      max_height: 400,
      menubar: false,
      plugins: [
        'advlist',
        'autolink',
        'lists',
        'link',
        'image',
        'hr',
        'anchor',
        'insertdatetime',
        'media',
        'table',
        'contextmenu',
        'paste',
        'textcolor',
        'imagetools'
      ],
      toolbar: "undo redo | paste copy cut | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | styleselect | image hr link table | insertdatetime media",
      image_advtab: true,
      insertdatetime_formats: ["%Y-%m-%d", "%H:%M:%S", "%Y-%m-%d %H:%M:%S"],
      insertdatetime_element: true
    };

    $scope.renderHtml = null;

    $scope.updateHtml = function () {
      $scope.renderHtml = $sce.trustAsHtml($scope.message.body);
    };

    $scope.openSettingsModal = function () {
      SettingsDialogProvider.open($scope.options, function (settings) {
        $scope.options = settings;
      });
    };
  }
})();
