System.register(['angular2/core', './_components/manage-list.component', '../_common/services/auth.service', '../_common/services/projects.service', '../_common/services/skills.service', '../_common/services/current-user.service'], function(exports_1, context_1) {
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
    var core_1, manage_list_component_1, auth_service_1, projects_service_1, skills_service_1, current_user_service_1;
    var ManageSkills;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (manage_list_component_1_1) {
                manage_list_component_1 = manage_list_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (projects_service_1_1) {
                projects_service_1 = projects_service_1_1;
            },
            function (skills_service_1_1) {
                skills_service_1 = skills_service_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            }],
        execute: function() {
            ManageSkills = (function () {
                function ManageSkills(authService, skillsService, projectsService, userService) {
                    this.authService = authService;
                    this.skillsService = skillsService;
                    this.projectsService = projectsService;
                    this.userService = userService;
                }
                ManageSkills.prototype.onAddOrRemoveSkill = function (ratedItem) {
                    this.userService.toggleSkill(ratedItem.name, ratedItem.rating);
                };
                ManageSkills.prototype.onAddOrRemoveProject = function (ratedItem) {
                    this.userService.toggleProject(ratedItem.name, ratedItem.rating);
                };
                ManageSkills = __decorate([
                    core_1.Component({
                        selector: 'manage-skills',
                        templateUrl: 'app/manage/manage.html',
                        directives: [manage_list_component_1.ManageList]
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, skills_service_1.SkillsService, projects_service_1.ProjectsService, current_user_service_1.CurrentUserService])
                ], ManageSkills);
                return ManageSkills;
            }());
            exports_1("ManageSkills", ManageSkills);
        }
    }
});
//# sourceMappingURL=manage.component.js.map