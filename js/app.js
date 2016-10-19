var app = angular.module('portfolio', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      contoller: 'MainController'
    })
    .when('/bio', {
      templateUrl: 'partials/bio.html',
      controller: 'BioController'
    })
    .when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'ProjectController'
    })
    .when('/resume', {
      templateUrl: 'partials/resume.html',
      controller: 'ResumeController'
    })
    .otherwise({ redirectTo: '/' })
    $locationProvider.html5Mode(true);
});
