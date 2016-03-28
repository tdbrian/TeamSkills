System.register(['angular2/core', '../_pipes/selected-values.pipe', 'angular2/common', "ng2-bootstrap/ng2-bootstrap"], function(exports_1, context_1) {
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
    var core_1, selected_values_pipe_1, common_1, ng2_bootstrap_1;
    var ManageList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (selected_values_pipe_1_1) {
                selected_values_pipe_1 = selected_values_pipe_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            ManageList = (function () {
                function ManageList() {
                    this.itemSelected = new core_1.EventEmitter();
                    this.max = 5;
                    this.isReadonly = false;
                    this.ratingStates = [
                        { stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle' },
                        { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' },
                        { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' },
                        { stateOn: 'glyphicon-heart' },
                        { stateOff: 'glyphicon-off' }
                    ];
                }
                ManageList.prototype.addOrRemoveItem = function (name) {
                    this.itemSelected.emit(name);
                };
                ManageList.prototype.userHasItem = function (name) {
                    if (this.userItems) {
                        return this.userItems.map(function (x) {
                            if (x.skill)
                                return x.skill.name;
                            else if (x.project)
                                return x.project.name;
                        }).includes(name);
                    }
                };
                ManageList.prototype.hoveringOver = function (value) {
                    this.overStar = value;
                    this.percent = 100 * (value / this.max);
                };
                ;
                ManageList.prototype.resetStar = function () {
                    this.overStar = null;
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
                        templateUrl: 'app/manage/_components/manage-list.html',
                        pipes: [selected_values_pipe_1.SelectedValues],
                        directives: [ng2_bootstrap_1.Rating, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ManageList);
                return ManageList;
            }());
            exports_1("ManageList", ManageList);
        }
    }
});
//# sourceMappingURL=manage-list.component.js.map