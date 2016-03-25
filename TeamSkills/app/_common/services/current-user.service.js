System.register(['angular2/core', './firebase.service', '../models/user.model', 'rxjs/Subject'], function(exports_1, context_1) {
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
    var core_1, firebase_service_1, user_model_1, Subject_1;
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
                CurrentUserService.prototype.updateProjects = function (projectLevels) {
                    this.currentUser.projectLevels = projectLevels;
                    this.update();
                };
                CurrentUserService.prototype.updateSkills = function (skillLevels) {
                    debugger;
                    this.currentUser.skillLevels = skillLevels;
                    this.update();
                };
                CurrentUserService.prototype.update = function () {
                    var auth = this.backend.getLoggedInAuth();
                    this.usersRepo.child(auth.uid).update(this.currentUser);
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