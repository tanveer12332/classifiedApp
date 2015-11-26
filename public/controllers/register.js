angular.module('classified', [])
.controller('regCtrl', function($scope,$http, $window){
	$scope.RegStatus = "REGISTER";
	$scope.isVisible = true;
	
	/*
$scope.addContact = function(){
	$http.post('/setcontacts', $scope.contact).success(function(responce){
		//console.log('data in controller'+  responce);
		$scope.contact= responce;
		console.log($scope.contact);
		//	$scope.RegStatus = "Thanks you are Register go Login page";
		//$window.location.href = '/login';
		$scope.contact ="";
		//$scope.isVisible = false;
	});
}	*/
    
})

