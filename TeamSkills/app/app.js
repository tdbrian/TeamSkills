System.register(['angular2/core', 'angular2/router', './shell/nav', './register/register', './login/login', './home/home', './manageSkills/manage-skills', './viewTeam/view-team', './_common/services/current-user.service', './_common/services/firebase.service'], function(exports_1, context_1) {
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
    var core_1, router_1, nav_1, register_1, login_1, home_1, manage_skills_1, view_team_1, current_user_service_1, firebase_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (nav_1_1) {
                nav_1 = nav_1_1;
            },
            function (register_1_1) {
                register_1 = register_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (manage_skills_1_1) {
                manage_skills_1 = manage_skills_1_1;
            },
            function (view_team_1_1) {
                view_team_1 = view_team_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (firebase_service_1_1) {
                firebase_service_1 = firebase_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.html',
                        directives: [
                            nav_1.AppNav,
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            current_user_service_1.CurrentUserService,
                            firebase_service_1.FireBaseService
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_1.Home, useAsDefault: true },
                        { path: '/register', name: 'Register', component: register_1.Register },
                        { path: '/login', name: 'Login', component: login_1.Login },
                        { path: '/view-team', name: 'ViewTeam', component: view_team_1.ViewTeam },
                        { path: '/manage-skills', name: 'ManageSkills', component: manage_skills_1.ManageSkills }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map