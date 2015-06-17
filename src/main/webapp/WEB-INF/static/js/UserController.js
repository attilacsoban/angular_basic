(function(){

	var myApp = angular.module("githubViewer");
		
	//now i need to get the parameter $routeParams itt will give me any param that is defined in the url
	//it make aviable as a property what i can read
	var UserController = function(s,git,route) {	
		
		var url = "https://api.github.com/users/";
		s.username = route.username;
		s. repoOrder = "-stargazers_count";		
		
		var onRepos = function(response) {
			s.repos = response;
		}
		
		var onUserComplete = function(response) {
			s.isError = false;
			s.user = response;
			git.getRepos(s.user).success(onRepos,onError);
		};
		
		var onError = function(data,status,header,config) {			
			s.data = data;
			s.status = status;
			s.headers = header;
			s.config = config;
			s.isError = true;
		};
	
		git.getUser(s.username).success(onUserComplete,onError);
		
	};
	
	myApp.controller("UserController",["$scope","github","$routeParams",UserController]);
	
}());