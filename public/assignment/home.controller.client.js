(function () {
    angular
        .module("WamApp")
        .controller("homeController");

    function homeController($location, $rootScope) {

        var model = this;

        model.currentUser = $rootScope.currentUser;

        function init() {

        }
        init();


    }
})();