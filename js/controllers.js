app.controller('MainController', function($scope) {
  $scope.view = {};
  $scope.view.message = 'I am Sam'
})

app.controller('BioController', function($scope) {
  $scope.view = {};
  $scope.view.message = 'My Biography'
})

app.controller('ProjectController', function($scope) {
  $scope.view = {};
  $scope.view.message = 'My Projects'
})

app.controller('ResumeController', function($scope) {
  $scope.view = {};
  $scope.view.message = 'My Resume'
})
