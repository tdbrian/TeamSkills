System.register(['angular2/core', './firebase.service'], function(exports_1, context_1) {
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
    var core_1, firebase_service_1;
    var SkillsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (firebase_service_1_1) {
                firebase_service_1 = firebase_service_1_1;
            }],
        execute: function() {
            SkillsService = (function () {
                function SkillsService(backend) {
                    var _this = this;
                    this.backend = backend;
                    this.skills = [];
                    this.onSkillsChanged = function (skillsSnapshot) {
                        var skillList = skillsSnapshot.val();
                        _this.skills = skillList.map(function (x) { return { name: x }; });
                    };
                    this.updateSkills = function (skills) {
                        _this.skillsRepo.update(skills);
                    };
                    this.skillsRepo = backend.skills;
                    this.listenForIncomingEvents();
                }
                SkillsService.prototype.listenForIncomingEvents = function () {
                    this.skillsRepo.on(firebase_service_1.FireBaseService.VALUE, this.onSkillsChanged);
                };
                SkillsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [firebase_service_1.FireBaseService])
                ], SkillsService);
                return SkillsService;
            }());
            exports_1("SkillsService", SkillsService);
        }
    }
});
//# sourceMappingURL=skills.service.js.map