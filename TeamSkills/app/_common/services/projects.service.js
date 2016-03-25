System.register(['angular2/core', './firebase.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, firebase_service_1;
    var ProjectsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
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
                        _this.projects = projectsSnapshot.val();
                        console.info(_this.projects);
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
                ProjectsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [firebase_service_1.FireBaseService])
                ], ProjectsService);
                return ProjectsService;
            }());
            exports_1("ProjectsService", ProjectsService);
        }
    }
});
//# sourceMappingURL=projects.service.js.map