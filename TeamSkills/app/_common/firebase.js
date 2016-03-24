var FireBaseService = (function () {
    function FireBaseService() {
        this.firebase = new Firebase(FireBaseService.URI);
    }
    FireBaseService.URI = "https://shining-fire-1754.firebaseio.com";
    return FireBaseService;
}());
//# sourceMappingURL=firebase.js.map