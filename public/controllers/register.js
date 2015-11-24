angular.module('classified', [])
.controller('regCtrl', function($scope,$http){
$scope.addContact = function(){
	$http.post('/setcontacts', $scope.contact).success(function(responce){
		console.log('data in controller'+ responce);
		$scope.contact= responce;
		console.log($scope.contact);
	});
}	
    
})

