System.register(['./firebase.service', '../models/user.model', '../models/skill.model', '../models/project.model', 'rxjs/Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var firebase_service_1, user_model_1, skill_model_1, project_model_1, Subject_1;
    var CurrentUserService;
    return {
        setters:[
            function (firebase_service_1_1) {
                firebase_service_1 = firebase_service_1_1;
            },
            function (user_model_1_1) {
                user_model_1 = user_model_1_1;
            },
            function (skill_model_1_1) {
                skill_model_1 = skill_model_1_1;
            },
            function (project_model_1_1) {
                project_model_1 = project_model_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            CurrentUserService = (function () {
                function CurrentUserService(backend) {
                    var _this = this;
                    this.backend = backend;
                    this.onUserCreated = new Subject_1.Subject();
                    this.onUserAdded = function (newUserSnapshot) {
                        var newUser = _this.normalizeUser(newUserSnapshot.val());
                        if (_this.waitingOnNewUser && newUser.email == _this.waitingOnNewUser.email) {
                            _this.currentUser = newUser;
                            _this.waitingOnNewUser = null;
                            _this.onUserCreated.next(_this.currentUser);
                        }
                    };
                    this.listenForIncomingEvents();
                    this.usersRepo = backend.users;
                    this.setCurrentUser();
                }
                CurrentUserService.prototype.setCurrentUser = function () {
                    var _this = this;
                    if (this.backend.isLoggedIn()) {
                        var auth = this.backend.getLoggedInAuth();
                        this.usersRepo.child(auth.uid).once(firebase_service_1.FireBaseService.VALUE, function (userSnapshot) {
                            _this.currentUser = _this.normalizeUser(userSnapshot.val());
                        });
                    }
                };
                CurrentUserService.prototype.listenForIncomingEvents = function () {
                    var _this = this;
                    this.backend.users.on(firebase_service_1.FireBaseService.ADDED, this.onUserAdded);
                    this.backend.authObservable.subscribe(function (auth) {
                        _this.usersRepo.child(auth.uid).on(firebase_service_1.FireBaseService.VALUE, function (userSnapshot) {
                            _this.currentUser = _this.normalizeUser(userSnapshot.val());
                        });
                    });
                };
                CurrentUserService.prototype.normalizeUser = function (user) {
                    user.skillLevels = user.skillLevels ? user.skillLevels : [];
                    user.projectLevels = user.projectLevels ? user.projectLevels : [];
                    return user;
                };
                CurrentUserService.prototype.attemptLogin = function (email, password) {
                    this.backend.attemptAuth(email, password);
                };
                CurrentUserService.prototype.createUser = function (name, email, password) {
                    var user = new user_model_1.User(name, email);
                    this.waitingOnNewUser = user;
                    this.backend.createUser(user, password);
                };
                CurrentUserService.prototype.logout = function () {
                    this.backend.logout();
                };
                CurrentUserService.prototype.userProjectsContain = function (name) {
                    return this.currentUser.projectLevels.map(function (x) { return x.project.name; }).indexOf(name) > -1;
                };
                CurrentUserService.prototype.toggleProject = function (projectName, level) {
                    if (this.userProjectsContain(projectName)) {
                        this.currentUser.projectLevels = this.currentUser.projectLevels.filter(function (x) { return x.project.name !== projectName; });
                    }
                    else {
                        var projectLevel = new project_model_1.ProjectLevel({ name: projectName }, level);
                        this.currentUser.projectLevels.push(projectLevel);
                    }
                    this.currentUser.projectLevels = this.currentUser.projectLevels.filter(this.onlyUnique);
                    this.update();
                };
                CurrentUserService.prototype.updateProjects = function (projectLevels) {
                    this.currentUser.projectLevels = projectLevels;
                    this.update();
                };
                CurrentUserService.prototype.userSkillsContain = function (name) {
                    return this.currentUser.skillLevels.map(function (x) { return x.skill.name; }).indexOf(name) > -1;
                };
                CurrentUserService.prototype.toggleSkill = function (skillName, level) {
                    if (this.userSkillsContain(skillName)) {
                        this.currentUser.skillLevels = this.currentUser.skillLevels.filter(function (x) { return x.skill.name !== skillName; });
                    }
                    else {
                        var skillLevel = new skill_model_1.SkillLevel({ name: skillName }, level);
                        this.currentUser.skillLevels.push(skillLevel);
                    }
                    this.currentUser.skillLevels = this.currentUser.skillLevels.filter(this.onlyUnique);
                    this.update();
                };
                CurrentUserService.prototype.updateSkills = function (skillLevels) {
                    this.currentUser.skillLevels = skillLevels;
                    this.update();
                };
                CurrentUserService.prototype.onlyUnique = function (value, index, self) {
                    return self.indexOf(value) === index;
                };
                CurrentUserService.prototype.update = function () {
                    var auth = this.backend.getLoggedInAuth();
                    this.usersRepo.child(auth.uid).update(this.currentUser);
                };
                return CurrentUserService;
            }());
            exports_1("CurrentUserService", CurrentUserService);
        }
    }
});
//# sourceMappingURL=current-user.service.js.map