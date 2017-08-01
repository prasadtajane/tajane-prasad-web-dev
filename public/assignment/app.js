/**
 * Created by prasadtajane on 7/17/17.
 */

//this is known as IIFE immediately invoke function expression.

(function ()   {
    angular
        .module("WamApp", ["ngRoute"])
        .directive("wdSortable", wdSortable);


    function wdSortable() {
        function linkFunction(scope, element) {
            console.log(element);
            $(element).sortable();
        }

        return{
            link:linkFunction
        }
    }
})();