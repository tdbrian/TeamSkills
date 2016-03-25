System.register(['./firebase.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var firebase_service_1;
    var UsersService;
    return {
        setters:[
            function (firebase_service_1_1) {
                firebase_service_1 = firebase_service_1_1;
            }],
        execute: function() {
            UsersService = (function () {
                function UsersService(backend) {
                    var _this = this;
                    this.backend = backend;
                    this.users = [];
                    this.onUsersChanged = function (usersSnapshot) {
                        var usersObj = usersSnapshot.val();
                        _this.users = Object.keys(usersObj).map(function (key) { return usersObj[key]; });
                        console.info(_this.users);
                    };
                    this.usersRepo = backend.users;
                    this.listenForIncomingEvents();
                }
                UsersService.prototype.listenForIncomingEvents = function () {
                    this.usersRepo.on(firebase_service_1.FireBaseService.VALUE, this.onUsersChanged);
                };
                return UsersService;
            }());
            exports_1("UsersService", UsersService);
        }
    }
});
//# sourceMappingURL=users.service.js.map