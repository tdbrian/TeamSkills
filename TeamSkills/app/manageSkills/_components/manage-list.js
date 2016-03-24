System.register(['angular2/core', '../_pipes/has-skills'], function(exports_1, context_1) {
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
    var core_1, has_skills_1;
    var ManageList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (has_skills_1_1) {
                has_skills_1 = has_skills_1_1;
            }],
        execute: function() {
            ManageList = (function () {
                function ManageList() {
                    this.itemSelected = new core_1.EventEmitter();
                }
                ManageList.prototype.addOrRemoveItem = function (item) {
                    this.itemSelected.emit(item);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ManageList.prototype, "list", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ManageList.prototype, "userItems", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ManageList.prototype, "itemSelected", void 0);
                ManageList = __decorate([
                    core_1.Component({
                        selector: 'manage-list',
                        templateUrl: 'app/manageSkills/_components/manage-list.html',
                        pipes: [has_skills_1.HasSkills]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ManageList);
                return ManageList;
            }());
            exports_1("ManageList", ManageList);
        }
    }
});
//# sourceMappingURL=manage-list.js.map