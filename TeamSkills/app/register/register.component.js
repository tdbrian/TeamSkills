System.register(['angular2/core', 'angular2/router', '../_common/services/current-user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, current_user_service_1;
    var Register;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            }],
        execute: function() {
            Register = (function () {
                function Register(userService) {
                    this.userService = userService;
                    userService.onUserCreated.subscribe(function () {
                        alert('Your account was created! Please log in now.');
                    });
                }
                Register.prototype.attemptRegisterUser = function () {
                    this.userService.createUser(this.name, this.email, this.password);
                };
                Register = __decorate([
                    core_1.Component({
                        selector: 'register',
                        templateUrl: 'app/register/register.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [current_user_service_1.CurrentUserService])
                ], Register);
                return Register;
            }());
            exports_1("Register", Register);
        }
    }
});
//# sourceMappingURL=register.component.js.map