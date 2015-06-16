(function(){

	var myApp = angular.module("githubViewer", []);
	var count = 0;
	
	var MainController = function(s,h,i) {	
		
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
			
		//counting donw than perform an automatic search
		//im gonna call it every secont... that is need some service
		//settimeout, setinterval kell angular provide 2 service for these kind of setup $timeout, $interval
		//why use the angular service over the basic javascript? 1. unittest => easier to test
		//2. if i use settimeout setinterval the data binding will not change correctly
		//to use interval need to pass the service to the controller $interval = i
		//interval 3th parameter is how many intervals i want
		var startCountDown = function() {
			i(decrementCountDown,1000,s.countdown);
		};
		
		var decrementCountDown = function() {
			s.countdown -= 1;
			if(s.countdown < 1)
				  s.search();
		};
		
		s.message = "Github Viewer!";
		s.username = "angular";
		s. repoOrder = "-stargazers_count"; //no haard coded in the html view... 
		///now easy to change sort order by the user
		s.countdown = 5;
		startCountDown();
		
	};
	
	myApp.controller("MainController",["$scope","$http","$interval",MainController]);
	
}());