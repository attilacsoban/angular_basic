(function(){

	var myApp = angular.module("githubViewer", []);
	var count = 0;
	
	var MainController = function(s,h) {
	
		s.message = "hello angular!!";
		s.clickMethod = function() {
			count += 1;
			console.log(count);
		}
		
		var url = "https://api.github.com/users/attilacsoban";
		
		var onUserComplete = function(response) {
			s.user = response;
		};
		
		var onError = function(data,status,header,config) {
			s.isError = true;
			s.data = data;
			s.status = status;
			s.headers = header;
			s.config = config;
		};
		//http.get will return a promise -> that will pass to response argument
		//then second parameter : what to do when error occur
		h.get(url).success(onUserComplete).error(onError);
		
	};
	//ha így hívom:[$scope,$http,MainController] 	akkor fenn hasznalhatok a var MainControll-nal n,h parametereket
	//minifier eseten jo
	myApp.controller("MainController",["$scope","$http",MainController]);
	
	
	
}());