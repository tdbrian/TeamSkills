System.register(['angular2/core', 'angular2/router', '../_common/services/auth.service', '../_common/services/current-user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1, current_user_service_1;
    var AppNav;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            }],
        execute: function() {
            AppNav = (function () {
                function AppNav(auth, userService) {
                    this.auth = auth;
                    this.userService = userService;
                }
                AppNav.prototype.logout = function () {
                    this.auth.logout();
                };
                AppNav = __decorate([
                    core_1.Component({
                        selector: 'app-nav',
                        templateUrl: 'app/shell/nav.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, current_user_service_1.CurrentUserService])
                ], AppNav);
                return AppNav;
            }());
            exports_1("AppNav", AppNav);
        }
    }
});
//# sourceMappingURL=nav.component.js.map