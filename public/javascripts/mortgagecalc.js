angular.module("MortgageModule", []).
    filter("chf", function ($filter) {
        return function (input) {
            return $filter('number')(input, 2) + " CHF";
        };
    }).
    directive('slider', function($parse) {
        return function(scope, element, attrs) {
            var ngModel = $parse(attrs.ngModel);
            scope.$watch(ngModel, function(value) {
                $(element).slider("value", value);
            });
            var sliderObj = {
                value: scope[attrs.ngModel],
                slide: function(value, ui) {
                    scope.$apply(function(scope) {
                        ngModel.assign(scope, ui.value);
                    });
                }};
            if (attrs.min !== undefined) sliderObj.min = parseFloat(attrs.min);
            if (attrs.max !== undefined) sliderObj.max = parseFloat(attrs.max);
            if (attrs.step !== undefined) sliderObj.step = parseFloat(attrs.step);
            $(element).slider(sliderObj);
        };
});

function Mortgage($scope) {
    $scope.price = 1000000;
    $scope.capital = 250000;
    $scope.interest = 5;

    $scope.$watch('price * capital * interest', function () {
        $scope.fondsPropres = $scope.capital - $scope.price * 0.05;
        $scope.fraisDacquisition = $scope.price * 0.05;
        $scope.montant = $scope.price - $scope.fondsPropres;
        $scope.rang1 = $scope.price * 0.66;
        $scope.rang2 = $scope.montant - $scope.rang1;
        $scope.interetsRang1 = $scope.rang1 * $scope.interest / 100;
        $scope.interetsRang2 = $scope.rang2 * $scope.interest / 100;
        $scope.amortissements = $scope.montant * 0.015;
        $scope.entretien = $scope.price * 0.01;

        $scope.totalCharges = $scope.interetsRang1 + $scope.interetsRang2 + $scope.amortissements + $scope.entretien;
        $scope.totalMensuel = ($scope.totalCharges - $scope.entretien) / 12;
    });
}
