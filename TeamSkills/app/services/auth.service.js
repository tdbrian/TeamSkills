System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthService;
    return {
        setters:[],
        execute: function() {
            AuthService = (function () {
                function AuthService(backend, router) {
                    var _this = this;
                    this.backend = backend;
                    this.router = router;
                    this.backend.loggedInStatus.subscribe(function (status) {
                        _this.isLoggedIn = status;
                        _this.router.navigate(['ViewTeam']);
                    });
                    this.isLoggedIn = this.isAuthenticated();
                }
                AuthService.prototype.isAuthenticated = function () {
                    return this.backend.isLoggedIn();
                };
                AuthService.prototype.attemptLogin = function (email, password) {
                    this.backend.attemptAuth(email, password);
                };
                AuthService.prototype.logout = function () {
                    this.backend.logout();
                    this.router.navigate(['Login']);
                };
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map