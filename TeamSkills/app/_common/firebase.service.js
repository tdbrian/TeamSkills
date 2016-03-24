System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FireBaseService;
    return {
        setters:[],
        execute: function() {
            FireBaseService = (function () {
                function FireBaseService() {
                    var _this = this;
                    this.attemptAuth = function (email, password, onComplete) {
                        _this.firebase.authWithPassword({
                            email: email,
                            password: password
                        }, onComplete);
                    };
                    this.firebase = new Firebase(FireBaseService.URI);
                }
                FireBaseService.URI = "https://shining-fire-1754.firebaseio.com";
                return FireBaseService;
            }());
            exports_1("FireBaseService", FireBaseService);
        }
    }
});
//# sourceMappingURL=firebase.service.js.map