System.register(['rxjs/Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Subject_1;
    var FireBaseService;
    return {
        setters:[
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
                return FireBaseService;
            }());
            exports_1("FireBaseService", FireBaseService);
        }
    }
});
//# sourceMappingURL=firebase.service.js.map