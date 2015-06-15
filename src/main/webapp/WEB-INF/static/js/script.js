
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
