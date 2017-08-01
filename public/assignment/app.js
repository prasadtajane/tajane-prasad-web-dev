/**
 * Created by prasadtajane on 7/17/17.
 */

//this is known as IIFE immediately invoke function expression.

(function ()   {
    angular
        .module("WamApp", ["ngRoute"])
        .directive("wdSortable", wdSortable)
        .controller("sortableController", sortableController);


    function wdSortable() {

        function linkFunction(scope, element) {
            //console.log(element);
            var startIndex = -1;
            var stopIndex = -1;
            element
                .sortable({
                    start:(function (event, ui) {
                        console.log($(ui.item).index());
                        startIndex=$(ui.item).index();
                    }),
                    stop:(function (event, ui) {
                       console.log($(ui.item).index());
                       stopIndex=$(ui.item).index();
                       scope.sortableController.sort(startIndex, stopIndex)
                    })
                });
        }

        return{
            scope:{},
            link:linkFunction,
            controller:sortableController,
            controllerAs:"sortableController"
        }
    }


    function sortableController(widgetService) {
        //will NOT work without the 'vm' variable.
        var vm = this;
        vm.sort = sort;

        function sort(start, stop) {
            console.log([start,stop]);
            widgetService.sort(start, stop);
        }
    }

})();