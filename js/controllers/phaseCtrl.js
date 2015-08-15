app.controller('phaseCtrl', function($scope, phaseService) {

	$scope.getPhase = function() {
		phaseService.getPhase(($scope.currentDate.getTime()) /1000).then(function(res) {
			console.log(res);
			$scope.moonInfo = res;
			show($scope.currentDate);
		});
	};

	var show = function(value) {
		if (value) {
			$scope.value = true; 
		} else {
			$scope.value = false; 
		}
	};

});



