System.register(['angular2/core', './firebase.service', '../models/user.model'], function(exports_1, context_1) {
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
    var core_1, firebase_service_1, user_model_1;
    var CurrentUserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (firebase_service_1_1) {
                firebase_service_1 = firebase_service_1_1;
            },
            function (user_model_1_1) {
                user_model_1 = user_model_1_1;
            }],
        execute: function() {
            CurrentUserService = (function () {
                function CurrentUserService(backend) {
                    this.backend = backend;
                    this.setupObservables();
                    this.listenForIncomingEvents();
                    this.usersRepo = backend.users;
                }
                CurrentUserService.prototype.listenForIncomingEvents = function () {
                    this.backend.users.on(firebase_service_1.FireBaseService.ADDED, this.onUserAdded);
                };
                CurrentUserService.prototype.onUserAdded = function (newUserSnapshot) {
                    var newUser = newUserSnapshot.val();
                    if (this.waitingOnNewUser && newUser.email == this.waitingOnNewUser.email) {
                        this.currentUser = newUser;
                        this.waitingOnNewUser = null;
                        console.log('new user:');
                        console.log(newUser);
                        this.onUserCreated.onNext(this.currentUser);
                    }
                };
                CurrentUserService.prototype.setupObservables = function () {
                    this.onUserLoggedIn = new Rx.Subject();
                    this.onUserCreated = new Rx.Subject();
                };
                CurrentUserService.prototype.attemptLogin = function (email, password) {
                    var _this = this;
                    this.backend.attemptAuth(email, password, function (authData) {
                        _this.backend.users.child(authData.uid).once('value', function (user) {
                            if (!user.exists()) {
                                _this.currentUser = null;
                                _this.onUserLoggedIn.onError('Unable to get user data');
                            }
                            else {
                                _this.currentUser = user.val();
                                _this.onUserLoggedIn.onNext(_this.currentUser);
                            }
                        });
                    });
                };
                CurrentUserService.prototype.createUser = function (name, email, password) {
                    var user = new user_model_1.User(name, email);
                    this.waitingOnNewUser = user;
                    this.backend.createUser(user, password, function (userData) {
                        console.log('new user created!');
                    });
                };
                CurrentUserService.prototype.logout = function () {
                    this.backend.logout();
                };
                CurrentUserService.prototype.addSkill = function (skillLevel) {
                    this.currentUser.skillLevels.push(skillLevel);
                    this.update();
                };
                CurrentUserService.prototype.addProject = function (projectLevel) {
                    this.currentUser.projectLevels.push(projectLevel);
                    this.update();
                };
                CurrentUserService.prototype.updateSkillLevel = function (skillLevel) {
                    this.currentUser.skillLevels.push(skillLevel);
                    this.update();
                };
                CurrentUserService.prototype.updateProjectLevel = function (projectLevel) {
                    this.currentUser.projectLevels.push(projectLevel);
                    this.update();
                };
                CurrentUserService.prototype.update = function () {
                    this.usersRepo.child(this.currentUser.uid).update(this.currentUser);
                };
                CurrentUserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [firebase_service_1.FireBaseService])
                ], CurrentUserService);
                return CurrentUserService;
            }());
            exports_1("CurrentUserService", CurrentUserService);
        }
    }
});
//# sourceMappingURL=current-user.service.js.map