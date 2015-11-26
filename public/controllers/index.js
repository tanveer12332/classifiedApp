angular.module('classified', [])
.controller('homeCtrl', function($scope){
     $scope.mobile = [{
		
        Name: "Nokia",
        Price: "25",
        Quantity: "20"
    }, {
        Name: "Samsung",
        Price: "100",
        Quantity: "15"
    }, {
        Name: "Motorola",
        Price: "15",
        Quantity: "13"
    },
	{
        Name: "Microsoft",
        Price: "15",
        Quantity: "0"
    },
	{
        Name: "Others",
        Price: "15",
        Quantity: "100"
    }
	];
  $scope.computer = [{
		
        Name: "Dell",
        Price: "25",
        Quantity: "20"
    }, {
        Name: "Hp",
        Price: "100",
        Quantity: "15"
    }, {
        Name: "Lenovo",
        Price: "15",
        Quantity: "13"
    },
	{
        Name: "Samsung",
        Price: "15",
        Quantity: "0"
    },
	{
        Name: "Others",
        Price: "15",
        Quantity: "100"
    }
	];
  $scope.vehicles = [{
		
        Name: "honda",
        Price: "25",
        Quantity: "20"
    }, {
        Name: "Civic",
        Price: "100",
        Quantity: "15"
    }, {
        Name: "Toyota",
        Price: "15",
        Quantity: "13"
    },
	{
        Name: "Ford",
        Price: "15",
        Quantity: "0"
    },
	{
        Name: "Others",
        Price: "15",
        Quantity: "100"
    }
	];$scope.animals = [{
		
        Name: "Dog",
        Price: "25",
        Quantity: "20"
    }, {
        Name: "Cats",
        Price: "100",
        Quantity: "15"
    }, {
        Name: "Birds",
        Price: "15",
        Quantity: "13"
    },
	{
        Name: "Aquariums",
        Price: "15",
        Quantity: "0"
    },
	{
        Name: "Others",
        Price: "15",
        Quantity: "100"
    }
	];
})

