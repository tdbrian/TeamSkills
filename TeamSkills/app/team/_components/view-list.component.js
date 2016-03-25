System.register(['angular2/core', 'angular2/common', "ng2-bootstrap/ng2-bootstrap"], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_bootstrap_1;
    var ViewList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            ViewList = (function () {
                function ViewList() {
                    this.itemSelected = new core_1.EventEmitter();
                    this.x = 5;
                    this.y = 2;
                    this.max = 10;
                    this.rate = 7;
                    this.isReadonly = false;
                    this.ratingStates = [
                        { stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle' },
                        { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' },
                        { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' },
                        { stateOn: 'glyphicon-heart' },
                        { stateOff: 'glyphicon-off' }
                    ];
                }
                ViewList.prototype.updateCorrespondingItems = function (item) {
                    this.itemSelected.emit(item);
                };
                ViewList.prototype.hoveringOver = function (value) {
                    this.overStar = value;
                    this.percent = 100 * (value / this.max);
                };
                ;
                ViewList.prototype.resetStar = function () {
                    this.overStar = null;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ViewList.prototype, "list", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ViewList.prototype, "filter", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ViewList.prototype, "itemSelected", void 0);
                ViewList = __decorate([
                    core_1.Component({
                        selector: 'view-list',
                        templateUrl: 'app/team/_components/view-list.html',
                        directives: [ng2_bootstrap_1.Rating, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ViewList);
                return ViewList;
            }());
            exports_1("ViewList", ViewList);
        }
    }
});
//# sourceMappingURL=view-list.component.js.map