(function(){

	var myApp = angular.module("githubViewer");
	var count = 0;
	//now controller just manage the search form, and the countdown and an automatic search
	var MainController = function(s,i,loc) {	

		var url = "https://api.github.com/users/";
		
		var decrementCountDown = function() {
			s.countdown -= 1;
			if(s.countdown < 1)
				  s.search();
		};		
		
		var countDownInterval = null;
		var startCountDown = function() {
			countDownInterval = i(decrementCountDown,1000,s.countdown);
		};
		//on search/auto-search change the url to #/user/{username}
		//putting data to the urel maks easy to pass parameter to a viewcontroller from another
		//2. bookmark
		//to do that we need: 1. create another route> 2. create template => 3.create controller=>
		//4. navigate to the url from search()
		s.search = function() {
			if(countDownInterval){
				i.cancel(countDownInterval);
				s.countdown = null;
			}
			//need to move to a route from here, to the 
			loc.path("/user/"+s.username);
		};
		
		s.username = "angular";		
		s.countdown = 5;
		startCountDown();
		
	};
	
	myApp.controller("MainController",["$scope","$interval","$location",MainController]);
	
}());