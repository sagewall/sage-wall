app = angular.module('sage-wall', ['ui.bootstrap'])
app.controller('ProjectsController', ['$http', ($http) ->
  projectsCtrl = this;
  projectsCtrl.projects = [];
  $http.get('data/projects.json').success((data) ->
    projectsCtrl.projects = data
    return
  )
  return
])

app.controller('ReportController', ['$http', ($http) ->
  reportCtrl = this
  reportCtrl.reports = []
  $http.get('data/reports.json').success((data) ->
    reportCtrl.reports = data
    return
  )
  return
])

app.controller('SkillController', ['$http', ($http) ->
  skillCtrl = this
  skillCtrl.skills = []
  $http.get('data/skills.json').success((data) ->
    skillCtrl.skills = data
    return
  )
  return
])

app.directive("projectDescription", ->
  return {
    restrict: 'E',
    templateUrl: "project-description.html"
  }
)

app.directive("reportDescription", ->
  return {
    restrict: 'E',
    templateUrl: "report-description.html"
  }
)