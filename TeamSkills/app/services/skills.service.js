System.register(['./firebase.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var firebase_service_1;
    var SkillsService;
    return {
        setters:[
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
                return SkillsService;
            }());
            exports_1("SkillsService", SkillsService);
        }
    }
});
//# sourceMappingURL=skills.service.js.map