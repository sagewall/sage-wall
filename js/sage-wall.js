/**
 * Created by Sage on 9/9/2015.
 */
(function(){
    var app = angular.module('sage-wall', ['ui.bootstrap']);

    app.controller('ProjectsController', ['$http', function($http){
        var projectsCtrl = this;
        projectsCtrl.projects = [];
        $http.get('data/projects.json').success(function(data){
            projectsCtrl.projects = data;
        });
    }]);

    app.controller('ReportController', ['$http', function($http){
        var reportCtrl = this;
        reportCtrl.reports = [];
        $http.get('data/reports.json').success(function(data){
            reportCtrl.reports = data;
        });
    }]);

    app.controller('SkillController', ['$http', function($http){
        var skillCtrl = this;
        skillCtrl.skills = [];
        $http.get('data/skills.json').success(function(data){
            skillCtrl.skills = data;
        });
    }]);

    app.directive("projectDescription", function() {
        return {
            restrict: 'E',
            templateUrl: "project-description.html"
        };
    });

    app.directive("reportDescription", function() {
        return {
            restrict: 'E',
            templateUrl: "report-description.html"
        };
    });
})();