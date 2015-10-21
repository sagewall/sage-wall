/**
 * Created by Sage on 9/9/2015.
 */
(function(){
    var app = angular.module('sage-wall', ['esri.map', 'ui.bootstrap']);

    app.controller('MapController', function ($scope) {
        $scope.map = {
            center: {
                lng: -105.35,
                lat: 39.50
            },
            zoom: 9,
            mapOptions: {
                minZoom: 0,
                maxZoom: 20,
                resizeDelay: 500,
                navigationMode: 'classic',
                sliderOrientation: 'vertical',
                sliderPosition: 'top-right',
                displayGraphicsOnPan: true,
                fadeOnZoom: false,
                logo: true,
                wrapAround180: true
            }
        };
    });

    app.controller('ProjectsController', ['$http', function($http){
        var projectsCtrl = this;
        projectsCtrl.projects = [];
        $http.get('data/projects.json').success(function(data){
            projectsCtrl.projects = data;
        });
    }]);

    app.controller('ReportsController', ['$http', function($http){
        var projectsCtrl = this;
        projectsCtrl.reports = [];
        $http.get('data/reports.json').success(function(data){
            projectsCtrl.reports = data;
        });
    }]);

    app.directive("projectDescription", function() {
        return {
            restrict: 'E',
            templateUrl: "project-description.html"
        };
    });

    app.directive("reportsDescription", function() {
        return {
            restrict: 'E',
            templateUrl: "reports-description.html"
        };
    });


})();