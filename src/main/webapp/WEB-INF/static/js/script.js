
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

