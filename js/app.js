var app;
app = angular.module('sage-wall', ['ui.bootstrap']);

app.controller('ProjectsController', [
  '$http', function($http) {
    var projectsCtrl;
    projectsCtrl = this;
    projectsCtrl.projects = [];
    $http.get('data/projects.json').success(function(data) {
      projectsCtrl.projects = data;
    });
  }
]);

app.controller('ReportController', [
  '$http', function($http) {
    var reportCtrl;
    reportCtrl = this;
    reportCtrl.reports = [];
    $http.get('data/reports.json').success(function(data) {
      reportCtrl.reports = data;
    });
  }
]);

app.controller('SkillController', [
  '$http', function($http) {
    var skillCtrl;
    skillCtrl = this;
    skillCtrl.skills = [];
    $http.get('data/skills.json').success(function(data) {
      skillCtrl.skills = data;
    });
  }
]);

app.directive("projectDescription", function() {
  return {
    restrict: 'E',
    templateUrl: "templates/project-description.html"
  };
});

app.directive("reportDescription", function() {
  return {
    restrict: 'E',
    templateUrl: "templates/report-description.html"
  };
});
