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
	];/*
	var category={"MOBILES":[
  {
   
  "id":0,
  "name": "Nokia",
  "count" : 20
  
  },
  {
    "id":1,
  "name": "Samsung",
  "count": 9
    
  },
  {
   "id":2,
  "name": "Motorola",
  "count" : 15
    
  },
  {
    "id":3,
  "name": "Microsoft",
  "count" : 0
    
  },
  {
  "id":4,
  "name": "Others",
  "count" : 100
    
  }
  ],
  "COMPUTER":[
    {
    "id":0,
    "name": "Dell",
    "count" : 20
    },
    {
    "id":1,
    "name": "Hp",
    "count" : 9
    },
    {
    "id":2,
    "name": "Mac",
    "count" : 15
    },
    {
    "id":3,
    "name": "Lenovo",
    "count" : 0
    },
    {
    "id":4,
    "name": "Others",
    "count" : 160
    }
    ],
    "VEHICLES":[
      {
    "id":0,
    "name": "Design & Development Jobs",
    "count" : 20 
      },
      {
    "id":1,
    "name": "Marketing Jobs",
    "count" : 9 
      },
     {
    "id":2,
    "name": "Accounts & Finance Jobs",
    "count" : 15 
      },
      {
    "id":3,
    "name": "Cleaning Jobs",
    "count" : 0 
      },
      {
    "id":4,
    "name": "Others",
    "count" : 160 
      }
      ],
      "ELECTRONICS":[
        {
    "id":0,
    "name": "Design & Development Jobs",
    "count" : 20 
      },
      {
    "id":1,
    "name": " Marketing Jobs",
    "count" : 9 
      },
     {
    "id":2,
    "name": "Accounts & Finance Jobs",
    "count" : 15 
      },
      {
    "id":3,
    "name": "Cleaning Jobs",
    "count" : 0 
      },
      {
    "id":4,
    "name": "Others",
    "count" : 160 
      }
        
        ]
};
$scope.items = category;
console.log($scope.items);
//var contactlist= [category];*/
})

