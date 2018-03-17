
var app = angular.module('ShoppingApp',['ngMaterial']);

app.config(['$mdIconProvider', function($mdIconProvider) {
  $mdIconProvider.icon('md-toggle-arrow', 'img/icons/toggle-arrow.svg', 48);
}]);


app.controller('AppCtrl', ['$scope','$http','$mdMedia',
	function($scope,$http,$mdMedia){
	  var thisCtrl = this;
	  $scope.items = [];
	getNetworkData();
	function remove(array, element) {
       return array.filter(e => e !== element);
    }
	function getNetworkData(){
		$http.get('https://a29f8r5cp1.execute-api.us-east-1.amazonaws.com/dev/getitems')
		.then(function(response) {
			console.log(response);
			console.log("data::" + response.data[0].name);
			$scope.items = response.data;
		}).catch(function(response) {
			console.log("Error getting data ");
		});
	}
	
	
}]);


