angular.module('classified', [])
.controller('loginCtrl', function($scope,$http){
	$scope.loginUser = function(){
		alert('hello');
$http.post('/loginUser', $scope.contact).success(function(responce){
			console.log($scope.contact = responce);
		});		
	}

    
});

