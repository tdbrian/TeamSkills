System.register(['angular2/core', './_components/view-list'], function(exports_1, context_1) {
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
    var core_1, view_list_1;
    var ViewTeam;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (view_list_1_1) {
                view_list_1 = view_list_1_1;
            }],
        execute: function() {
            ViewTeam = (function () {
                function ViewTeam() {
                    this.team = {
                        title: "Team",
                        items: ["Thomas Brian", "Leif Thillet", "Shane Drye"]
                    };
                    this.skills = {
                        title: "Skills",
                        items: ["Angular", "C#", "Octopus"]
                    };
                    this.projects = {
                        title: "Projects",
                        items: ["Supportal", "Monsoon", "SecureTide"]
                    };
                }
                ViewTeam = __decorate([
                    core_1.Component({
                        selector: 'view-team',
                        templateUrl: 'app/viewTeam/view-team.html',
                        directives: [view_list_1.ViewList]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ViewTeam);
                return ViewTeam;
            }());
            exports_1("ViewTeam", ViewTeam);
        }
    }
});
//# sourceMappingURL=view-team.js.map