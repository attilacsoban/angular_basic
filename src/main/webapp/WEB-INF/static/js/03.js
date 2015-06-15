(function(){

	var myApp = angular.module("githubViewer", []);
	var count = 0;
	
	var MainController = function(s,h) {
	
		s.message = "Github Viewer!";
		s.username = "angular";
		var url = "https://api.github.com/users/";
		
		var onRepos = function(response) {
			s.repos = response;
		}
		
		var onUserComplete = function(response) {
			s.isError = false;
			s.user = response;
			h.get(s.user.repos_url).success(onRepos,onError);  
		};
		
		var onError = function(data,status,header,config) {			
			s.data = data;
			s.status = status;
			s.headers = header;
			s.config = config;
			s.isError = true;
		};
		
		s.search = function() {
			h.get(url+s.username).success(onUserComplete).error(onError);		
		};
			
		
		s.search();
	};
	
	myApp.controller("MainController",["$scope","$http",MainController]);
	
}());