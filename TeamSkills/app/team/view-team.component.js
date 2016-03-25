System.register(['angular2/router', 'angular2/core', './_components/view-list.component', '../_common/services/auth.service', '../_common/services/users.service', '../_common/services/skills.service', '../_common/services/projects.service'], function(exports_1, context_1) {
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
    var router_1, core_1, view_list_component_1, auth_service_1, users_service_1, skills_service_1, projects_service_1;
    var ViewTeam;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (view_list_component_1_1) {
                view_list_component_1 = view_list_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (skills_service_1_1) {
                skills_service_1 = skills_service_1_1;
            },
            function (projects_service_1_1) {
                projects_service_1 = projects_service_1_1;
            }],
        execute: function() {
            ViewTeam = (function () {
                function ViewTeam(router, authService, usersService, skillsService, projectsService) {
                    this.router = router;
                    this.authService = authService;
                    this.usersService = usersService;
                    this.skillsService = skillsService;
                    this.projectsService = projectsService;
                    this.filter = { type: "none" };
                }
                ViewTeam.prototype.routerOnActivate = function () {
                    var status = this.authService.isAuthenticated();
                    if (!status)
                        this.router.navigate(['Login']);
                };
                ViewTeam.prototype.onUpdateTeam = function (user) {
                    var teamTop = user;
                    var teamBottom = this.usersService.users.filter(function (x) { return x.name != user.name; });
                    this.usersService.users = this.grayedOut([teamTop], teamBottom);
                    var skillsTop = this.skillsService.skills.filter(function (x) { return user.skillLevels.map(function (level) { return level.skill.name; }).includes(x.name); });
                    var skillsBottom = this.skillsService.skills.filter(function (x) { return !user.skillLevels.map(function (level) { return level.skill.name; }).includes(x.name); });
                    this.skillsService.skills = this.skillsWithStars(user, skillsTop, skillsBottom);
                    var projectsTop = this.projectsService.projects.filter(function (x) { return user.projectLevels.map(function (level) { return level.project.name; }).includes(x.name); });
                    var projectsBottom = this.projectsService.projects.filter(function (x) { return !user.projectLevels.map(function (level) { return level.project.name; }).includes(x.name); });
                    this.projectsService.projects = this.projectsWithStars(user, projectsTop, projectsBottom);
                };
                ViewTeam.prototype.onUpdateSkill = function (skill) {
                    var teamTop = this.usersService.users.filter(function (x) { return x.skillLevels.map(function (level) { return level.skill.name; }).includes(skill.name); });
                    var teamBottom = this.usersService.users.filter(function (x) { return !x.skillLevels.map(function (level) { return level.skill.name; }).includes(skill.name); });
                    this.usersService.users = this.usersWithSkillStars(skill, teamTop, teamBottom);
                    var skillsTop = skill;
                    var skillsBottom = this.skillsService.skills.filter(function (x) { return x.name != skill.name; });
                    this.skillsService.skills = this.grayedWithoutStars([skillsTop], skillsBottom);
                    this.projectsService.projects = this.grayedWithoutStars([], this.projectsService.projects);
                };
                ViewTeam.prototype.onUpdateProject = function (project) {
                    var teamTop = this.usersService.users.filter(function (x) { return x.projectLevels.map(function (x) { return x.project.name; }).includes(project.name); });
                    var teamBottom = this.usersService.users.filter(function (x) { return !x.projectLevels.map(function (x) { return x.project.name; }).includes(project.name); });
                    this.usersService.users = this.usersWithProjectStars(project, teamTop, teamBottom);
                    var projectsTop = project;
                    var projectsBottom = this.projectsService.projects.filter(function (x) { return x.name != project.name; });
                    this.projectsService.projects = this.grayedWithoutStars([projectsTop], projectsBottom);
                    this.skillsService.skills = this.grayedWithoutStars([], this.skillsService.skills);
                };
                ViewTeam.prototype.grayedOut = function (top, bottom) {
                    top = top.map(function (x) {
                        x['grayedOut'] = false;
                        return x;
                    });
                    bottom = bottom.map(function (x) {
                        x['grayedOut'] = true;
                        return x;
                    });
                    return top.concat(bottom);
                };
                ViewTeam.prototype.grayedWithoutStars = function (top, bottom) {
                    top = top.map(function (x) {
                        x['showRating'] = false;
                        x['rating'] = 0;
                        return x;
                    });
                    bottom = bottom.map(function (x) {
                        x['showRating'] = false;
                        x['rating'] = 0;
                        return x;
                    });
                    return this.grayedOut(top, bottom);
                };
                ViewTeam.prototype.skillsWithStars = function (user, top, bottom) {
                    console.info(user);
                    top = top.map(function (x) {
                        x['showRating'] = true;
                        x['rating'] = user.skillLevels.filter(function (y) { return y.skill.name == x.name; })[0].level;
                        return x;
                    });
                    bottom = bottom.map(function (x) {
                        x['showRating'] = false;
                        x['rating'] = 0;
                        return x;
                    });
                    return this.grayedOut(top, bottom);
                };
                ViewTeam.prototype.projectsWithStars = function (user, top, bottom) {
                    top = top.map(function (x) {
                        x['showRating'] = true;
                        x['rating'] = user.projectLevels.filter(function (y) { return y.project.name == x.name; })[0].level;
                        return x;
                    });
                    bottom = bottom.map(function (x) {
                        x['showRating'] = false;
                        x['rating'] = 0;
                        return x;
                    });
                    return this.grayedOut(top, bottom);
                };
                ViewTeam.prototype.usersWithSkillStars = function (skill, top, bottom) {
                    top = top.map(function (x) {
                        x['showRating'] = true;
                        x['rating'] = x.skillLevels.filter(function (y) { return y.skill.name == skill.name; })[0].level;
                        return x;
                    });
                    bottom = bottom.map(function (x) {
                        x['showRating'] = false;
                        x['rating'] = 0;
                        return x;
                    });
                    return this.grayedOut(top, bottom);
                };
                ViewTeam.prototype.usersWithProjectStars = function (project, top, bottom) {
                    top = top.map(function (x) {
                        x['showRating'] = true;
                        x['rating'] = x.projectLevels.filter(function (y) { return y.project.name == project.name; })[0].level;
                        return x;
                    });
                    bottom = bottom.map(function (x) {
                        x['showRating'] = false;
                        x['rating'] = 0;
                        return x;
                    });
                    return this.grayedOut(top, bottom);
                };
                ViewTeam = __decorate([
                    core_1.Component({
                        selector: 'view-team',
                        templateUrl: 'app/team/view-team.html',
                        directives: [view_list_component_1.ViewList]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, users_service_1.UsersService, skills_service_1.SkillsService, projects_service_1.ProjectsService])
                ], ViewTeam);
                return ViewTeam;
            }());
            exports_1("ViewTeam", ViewTeam);
        }
    }
});
//# sourceMappingURL=view-team.component.js.map