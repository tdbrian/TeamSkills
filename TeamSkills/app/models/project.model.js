System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Project, ProjectLevel;
    return {
        setters:[],
        execute: function() {
            Project = (function () {
                function Project(name) {
                    this.name = name;
                }
                return Project;
            }());
            exports_1("Project", Project);
            ProjectLevel = (function () {
                function ProjectLevel(project, level) {
                    this.project = project;
                    this.level = level;
                }
                return ProjectLevel;
            }());
            exports_1("ProjectLevel", ProjectLevel);
        }
    }
});
//# sourceMappingURL=project.model.js.map