System.register(['./firebase.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var firebase_service_1;
    var ProjectsService;
    return {
        setters:[
            function (firebase_service_1_1) {
                firebase_service_1 = firebase_service_1_1;
            }],
        execute: function() {
            ProjectsService = (function () {
                function ProjectsService(backend) {
                    var _this = this;
                    this.backend = backend;
                    this.projects = [];
                    this.onProjectsChanged = function (projectsSnapshot) {
                        var projectsList = projectsSnapshot.val();
                        _this.projects = projectsList.map(function (x) { return { name: x }; });
                    };
                    this.updateProjects = function (projects) {
                        _this.projectsRepo.update(projects);
                    };
                    this.projectsRepo = backend.projects;
                    this.listenForIncomingEvents();
                }
                ProjectsService.prototype.listenForIncomingEvents = function () {
                    this.projectsRepo.on(firebase_service_1.FireBaseService.VALUE, this.onProjectsChanged);
                };
                return ProjectsService;
            }());
            exports_1("ProjectsService", ProjectsService);
        }
    }
});
//# sourceMappingURL=projects.service.js.map