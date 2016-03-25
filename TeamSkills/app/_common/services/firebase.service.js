System.register(['angular2/core', 'rxjs/Subject'], function(exports_1, context_1) {
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
    var core_1, Subject_1;
    var FireBaseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            FireBaseService = (function () {
                function FireBaseService() {
                    var _this = this;
                    this.authObservable = new Subject_1.Subject();
                    this.loggedInStatus = new Subject_1.Subject();
                    this.onAuth = function (authData) {
                        if (authData) {
                            debugger;
                            _this.authObservable.next(authData);
                            _this.loggedInStatus.next(true);
                        }
                    };
                    this.setupFirebaseCollections();
                    this.listenForIncomingEvents();
                }
                FireBaseService.prototype.listenForIncomingEvents = function () {
                    this.firebase.onAuth(this.onAuth);
                };
                FireBaseService.prototype.setupFirebaseCollections = function () {
                    this.firebase = new Firebase(FireBaseService.URI);
                    this.users = this.firebase.child(FireBaseService.USERS);
                    this.projects = this.firebase.child(FireBaseService.PROJECTS);
                    this.skills = this.firebase.child(FireBaseService.SKILLS);
                };
                FireBaseService.prototype.attemptAuth = function (email, password) {
                    this.firebase.authWithPassword({
                        email: email,
                        password: password
                    }, function (err, authData) {
                        if (err) {
                            alert("Login Failed.. " + err.message);
                            console.warn(err);
                        }
                    });
                };
                ;
                FireBaseService.prototype.isLoggedIn = function () {
                    var auth = this.firebase.getAuth();
                    if (auth)
                        return true;
                    return false;
                };
                FireBaseService.prototype.logout = function () {
                    this.firebase.unauth();
                    this.loggedInStatus.next(false);
                };
                FireBaseService.prototype.createUser = function (user, password) {
                    var _this = this;
                    this.firebase.createUser({
                        email: user.email,
                        password: password
                    }, function (error, userData) {
                        debugger;
                        if (error) {
                            _this.handleCreateUserError(error);
                        }
                        else {
                            _this.users.child(userData.uid).set(user);
                        }
                    });
                };
                FireBaseService.prototype.getLoggedInAuth = function () {
                    return this.firebase.getAuth();
                };
                FireBaseService.prototype.handleCreateUserError = function (error) {
                    console.error(error);
                    debugger;
                    switch (error.code) {
                        case "EMAIL_TAKEN":
                            alert("The new user account cannot be created because the email is already in use.");
                            break;
                        case "INVALID_EMAIL":
                            alert("The specified email is not a valid email.");
                            break;
                        default:
                            alert("Error creating user");
                    }
                };
                FireBaseService.prototype.setNewUserData = function (user) {
                    this.firebase.child(FireBaseService.USERS).child(user.uid).set(user);
                };
                FireBaseService.URI = "https://shining-fire-1754.firebaseio.com";
                FireBaseService.CHANGED = "child_changed";
                FireBaseService.ADDED = "child_added";
                FireBaseService.REMOVED = "child_removed";
                FireBaseService.VALUE = "value";
                FireBaseService.USERS = "users";
                FireBaseService.PROJECTS = "projects";
                FireBaseService.SKILLS = "skills";
                FireBaseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FireBaseService);
                return FireBaseService;
            }());
            exports_1("FireBaseService", FireBaseService);
        }
    }
});
//# sourceMappingURL=firebase.service.js.map