System.register(['angular2/core', './_components/view-list', '../_common/models/user.model', '../_common/models/skill.model', '../_common/models/project.model'], function(exports_1, context_1) {
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
    var core_1, view_list_1, user_model_1, skill_model_1, project_model_1;
    var ViewTeam;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (view_list_1_1) {
                view_list_1 = view_list_1_1;
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
            ViewTeam = (function () {
                function ViewTeam() {
                    this.filter = { type: "none" };
                    //fake data
                    var supportal = new project_model_1.Project("Supportal");
                    var monsoon = new project_model_1.Project("Monsoon");
                    var secureTide = new project_model_1.Project("SecureTide");
                    var angular = new skill_model_1.Skill("Angular");
                    var cSharp = new skill_model_1.Skill("C#");
                    var octopus = new skill_model_1.Skill("Octopus");
                    var thomas = new user_model_1.User("Thomas Brian", "tbrian@appriver.com");
                    var leif = new user_model_1.User("Leif Thillet", "lthillet@appriver.com");
                    var shane = new user_model_1.User("Shane Drye", "sdrye@appriver.com");
                    thomas.skillLevels = [new skill_model_1.SkillLevel(angular, 3)];
                    thomas.projectLevels = [new project_model_1.ProjectLevel(supportal, 3)];
                    leif.skillLevels = [new skill_model_1.SkillLevel(cSharp, 3)];
                    leif.projectLevels = [new project_model_1.ProjectLevel(monsoon, 3)];
                    shane.skillLevels = [new skill_model_1.SkillLevel(octopus, 3)];
                    shane.projectLevels = [new project_model_1.ProjectLevel(secureTide, 3)];
                    this.team = {
                        title: "Team",
                        items: [thomas, leif, shane]
                    };
                    this.skills = {
                        title: "Skills",
                        items: [angular, cSharp, octopus]
                    };
                    this.projects = {
                        title: "Projects",
                        items: [supportal, monsoon, secureTide]
                    };
                }
                ViewTeam.prototype.onUpdateTeam = function (item) {
                    this.team.items = [item].concat(this.team.items.filter(function (x) { return x.name != item.name; }));
                    var skillsTop = this.skills.items.filter(function (x) { return item.skillLevels.map(function (x) { return x.skill; }).includes(x); }).slice();
                    var skillsBottom = this.skills.items.filter(function (x) { return !item.skillLevels.map(function (x) { return x.skill; }).includes(x); }).slice();
                    this.skills.items = skillsTop.concat(skillsBottom);
                    var projectsTop = this.projects.items.filter(function (x) { return item.projectLevels.map(function (x) { return x.project; }).includes(x); }).slice();
                    var projectsBottom = this.projects.items.filter(function (x) { return !item.projectLevels.map(function (x) { return x.project; }).includes(x); }).slice();
                    this.projects.items = projectsTop.concat(projectsBottom);
                };
                ViewTeam.prototype.onUpdateSkill = function (item) {
                    var teamTop = this.team.items.filter(function (x) { return x.skillLevels.map(function (x) { return x.skill; }).includes(item); }).slice();
                    var teamBottom = this.team.items.filter(function (x) { return !x.skillLevels.map(function (x) { return x.skill; }).includes(item); }).slice();
                    this.team.items = teamTop.concat(teamBottom);
                    this.skills.items = [item].concat(this.skills.items.filter(function (x) { return x.name != item.name; }));
                    //this.projects.items = [];
                };
                ViewTeam.prototype.onUpdateProject = function (item) {
                    var teamTop = this.team.items.filter(function (x) { return x.projectLevels.map(function (x) { return x.project; }).includes(item); }).slice();
                    var teamBottom = this.team.items.filter(function (x) { return !x.projectLevels.map(function (x) { return x.project; }).includes(item); }).slice();
                    this.team.items = teamTop.concat(teamBottom);
                    this.projects.items = [item].concat(this.projects.items.filter(function (x) { return x.name != item.name; }));
                    //this.skills.items = [];
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ViewTeam.prototype, "team", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ViewTeam.prototype, "skills", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ViewTeam.prototype, "projects", void 0);
                ViewTeam = __decorate([
                    core_1.Component({
                        selector: 'view-team',
                        templateUrl: 'app/viewTeam/view-team.html',
                        directives: [view_list_1.ViewList]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ViewTeam);
                return ViewTeam;
            }());
            exports_1("ViewTeam", ViewTeam);
        }
    }
});
//# sourceMappingURL=view-team.js.map