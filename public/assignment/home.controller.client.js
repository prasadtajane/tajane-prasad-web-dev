(function () {
    angular
        .module("WamApp")
        .controller("homeController");

    function homeController($location, $rootScope, $routeParams) {

        var model = this;

        function init() {
            $rootScope.currentUser = $routeParams.userId;
            model.currentUser = $rootScope.currentUser;

        }
        init();


    }
})();