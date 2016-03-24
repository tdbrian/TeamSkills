System.register(['angular2/core', './_components/manage-list', '../_common/models/user.model', '../_common/models/skill.model', '../_common/models/project.model'], function(exports_1, context_1) {
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
    var core_1, manage_list_1, user_model_1, skill_model_1, project_model_1;
    var ManageSkills;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (manage_list_1_1) {
                manage_list_1 = manage_list_1_1;
            },
            function (user_model_1_1) {
                user_model_1 = user_model_1_1;
            },
            function (skill_model_1_1) {
                skill_model_1 = skill_model_1_1;
            },
            function (project_model_1_1) {
                project_model_1 = project_model_1_1;
            }],
        execute: function() {
            ManageSkills = (function () {
                function ManageSkills() {
                    //fake data
                    var supportal = new project_model_1.Project("Supportal");
                    var monsoon = new project_model_1.Project("Monsoon");
                    var secureTide = new project_model_1.Project("SecureTide");
                    var angular = new skill_model_1.Skill("Angular");
                    var cSharp = new skill_model_1.Skill("C#");
                    var octopus = new skill_model_1.Skill("Octopus");
                    this.user = new user_model_1.User("Shane Drye", "sdrye@appriver.com");
                    this.user.skills = [octopus];
                    this.user.projects = [secureTide];
                    this.skills = {
                        title: "Skills",
                        items: [angular, cSharp, octopus]
                    };
                    this.projects = {
                        title: "Projects",
                        items: [supportal, monsoon, secureTide]
                    };
                }
                // needs to use skill service to add or remove 
                ManageSkills.prototype.onAddOrRemoveSkill = function (item) {
                    if (item.isSelected == true) {
                        this.user.skills = this.user.skills.slice().filter(function (x) { return x.name != item.name; });
                    }
                    if (item.isSelected == false) {
                        var newSkill = new skill_model_1.Skill(item.name);
                        this.user.skills = this.user.skills.concat([newSkill]);
                    }
                };
                ManageSkills.prototype.onAddOrRemoveProject = function (item) {
                    if (item.isSelected == true) {
                        this.user.projects = this.user.projects.slice().filter(function (x) { return x.name != item.name; });
                    }
                    if (item.isSelected == false) {
                        var newProject = new skill_model_1.Skill(item.name);
                        this.user.projects = this.user.projects.concat([newProject]);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ManageSkills.prototype, "user", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ManageSkills.prototype, "skills", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ManageSkills.prototype, "projects", void 0);
                ManageSkills = __decorate([
                    core_1.Component({
                        selector: 'manage-skills',
                        templateUrl: 'app/manageSkills/manage-skills.html',
                        directives: [manage_list_1.ManageList]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ManageSkills);
                return ManageSkills;
            }());
            exports_1("ManageSkills", ManageSkills);
        }
    }
});
//# sourceMappingURL=manage-skills.js.map