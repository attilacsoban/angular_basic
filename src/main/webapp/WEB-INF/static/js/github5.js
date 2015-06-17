
(function() {
	
	//design patter: function gets invoke return an object with api: revieling model design pattern
	//angular will invoke this module/service, what i return represent the public api
	//service has to get the user and the repos for that user, so it will need the basic $http service
	var github = function($http) {
		
		//return promise here
		var getUser = function(username) {
			return $http.get("https://api.github.com/users/"+username).success(function(response) {
				return response;
			});
		};
		
		var getRepos = function(user) {
			return $http.get(user.repos_url).success(function(response) {
				return response;
			});
		};		
		
		var valami = function() {
			console.log("called through my special services");
		}
		
		return {
			getUser: getUser,
			getRepos: getRepos,
			valami: valami
		};
	};
	
	var myApp = angular.module("githubViewer");
	
	//register the service with angular, so the other components can use it
	myApp.service("github",github);
	
	
}());
