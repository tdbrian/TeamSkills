System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Skill, SkillLevel;
    return {
        setters:[],
        execute: function() {
            Skill = (function () {
                function Skill(name) {
                    this.name = name;
                }
                return Skill;
            }());
            exports_1("Skill", Skill);
            SkillLevel = (function () {
                function SkillLevel(skill, level) {
                    this.skill = skill;
                    this.level = level;
                }
                return SkillLevel;
            }());
            exports_1("SkillLevel", SkillLevel);
        }
    }
});
//# sourceMappingURL=skill.model.js.map