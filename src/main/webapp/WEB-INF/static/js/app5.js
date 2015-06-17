
(function() {
	
	//ngRoute is another module, that my module needs
	var app = angular.module("githubViewer",["ngRoute"]);
	
	//register config function inside we will define our routes
	app.config(function($routeProvider) {
		$routeProvider.when("/main", {
			templateUrl: "main.html",
			controller: "MainController"
		})
		.when("/user/:username",{ //:username will threated as a parameter, it needs to attract from the url later on
			templateUrl: "userDetails5.html",
			controller: "UserController"
		})
		.otherwise({redirectTo: "/main"});
		
		
		
	});
	
	
	
	
	
	
	
	
}());
