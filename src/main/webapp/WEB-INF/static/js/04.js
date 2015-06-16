(function(){

	var myApp = angular.module("githubViewer", []);
	var count = 0;
	
	var MainController = function(s,h,i,l) {	
		
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
		// with $log i can rewrite the service and for example send back a log message back to the web service
		//via http protocol, and there i can put it ina  log file, and after investigate it
		s.search = function() {
			l.info("Searching for: "+s.username);
			h.get(url+s.username).success(onUserComplete).error(onError);
			if(countDownInterval){
				i.cancel(countDownInterval);
				s.countdown = null;
			}
		};
			
		//counting donw than perform an automatic search
		//im gonna call it every secont... that is need some service
		//settimeout, setinterval kell angular provide 2 service for these kind of setup $timeout, $interval
		//why use the angular service over the basic javascript? 1. unittest => easier to test
		//2. if i use settimeout setinterval the data binding will not change correctly
		//to use interval need to pass the service to the controller $interval = i
		//interval 3th parameter is how many intervals i want
		//invoke interval will give back an object, we can use that object to cancel later the execution
		//after, when i do a search i will check if there is a counter, if yes, than stop it
		var countDownInterval = null;
		var startCountDown = function() {
			countDownInterval = i(decrementCountDown,1000,s.countdown);
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
	
	myApp.controller("MainController",["$scope","$http","$interval","$log",MainController]);
	
}());