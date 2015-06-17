
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
		
		var getRepo = function(username,reponame) {
			return $http.get("https://api.github.com/repos/" + username + "/" + reponame).success(function(response) {
				return response;
			});
		};
		
		var getContributors = function(username,reponame) {
			return $http.get("https://api.github.com/repos/" + username + "/" + reponame+"/contributors").success(function(response) {
				return response;
			});
		};
		
		var chainedPromises = function(username,reponame) {
			var repo;
			var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
			return $http.get(repoUrl).success(function(response) {
				repo = response;
				return $http.get(repoUrl+"/contributors").success(function(response) {
					repo.contributors = response;
					return repo;
				});
			});
			
		};
		
		var valami = function() {
			console.log("called through my special services");
		}
		
		return {
			getUser: getUser,
			getRepos: getRepos,
			valami: valami,
			getRepo: getRepo,
			getContributors: getContributors,
			chainedPromises: chainedPromises
		};
	};
	
	var myApp = angular.module("githubViewer");
	
	//register the service with angular, so the other components can use it
	myApp.service("github",github);
	
	
}());
