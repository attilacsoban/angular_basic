
(function(){
	var work = function(){
		console.log("working hard");
	};
	var doWork = function(f){
		console.log("start working");
		try {
			f();
		} catch (e) {
			console.log(e);
		}
		console.log("working finished");
	};
	doWork(work);
	
	
	// object has data and method
	var createWorker = function (){
		var workCount = 0;
		var task1 = function() {
			workCount ++;
			console.log("task1: " + workCount);
		}
		var task2 = function() {
			workCount ++;
			console.log("task2: "+workCount);
		}
		return {
			job1: task1,
			job2: task2
		};
	};
	
	var worker = createWorker();
	
	worker.job1();
	worker.job2();
	worker.job1();
	worker.job2();

}());




var myApp = angular.module("myApp", []);
myApp.controller("MainController", function($scope,$http) {

	$scope.message = "hello angular!!";
	
	var url = "https://api.github.com/users/attilacsoban";
	
	var onUserComplete = function(response) {
		$scope.user = response;
	};
	
	var onError = function(data,status,header,config) {
		$scope.isError = true;
		$scope.data = data;
		$scope.status = status;
		$scope.headers = header;
		$scope.config = config;
	};
	//http.get will return a promise -> that will pass to response argument
	//then second parameter : what to do when error occur
	$http.get(url).success(onUserComplete).error(onError);
	
});



