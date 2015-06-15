document.write("helloka");

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
	var task1 = function() {
		console.log("task1");
	}
	var task2 = function() {
		console.log("task2");
	}
	return {
		job1: task1,
		job2: task2
	};
};

var worker = createWorker();
worker.job1();
worker.job2();
