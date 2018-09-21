/* versão 1.6 do angular */
/* função autoinvocada - assim não pertence mais ao escopo global, deve-se fugir
segundo o guia do john papa */
(function() {
  angular.module('primeiraApp').controller('DashboardCtrl', [
    '$http',
    DashboardController
  ])

  function DashboardController($http) {
    const vm = this
    // vm means ViewModel accordingly with john papa
    vm.getSummary = function () {
      const url = 'http://localhost:3003/api/billingSummary'
      $http.get(url).then(function(response) {
        const {credit = 0, debt = 0} = response.data
        vm.credit = credit
        vm.debt = debt
        vm.total = credit - debt
      })
    }

    vm.getSummary()
  }
})()


/*
versão 1.5.9 do angular
angular.module('primeiraApp').controller('DashboardCtrl', [
  '$scope',
  '$http',
  DashboardController
])


function DashboardController($scope, $http) {

  $scope.getSummary = function() {
    const url = 'http://localhost:3003/api/billingSummary'
    $http.get(url).success(function({credit = 0, debt = 0}) {
      $scope.credit = credit
      $scope.debt = debt
      $scope.total = credit - debt
    })
  }

  $scope.getSummary()
}
*/
