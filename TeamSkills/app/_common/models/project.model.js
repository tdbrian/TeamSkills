System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Project, ProjectLevels;
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
            ProjectLevels = (function () {
                function ProjectLevels(project, level) {
                    this.project = project;
                    this.level = this.level;
                }
                return ProjectLevels;
            }());
            exports_1("ProjectLevels", ProjectLevels);
        }
    }
});
//# sourceMappingURL=project.model.js.map