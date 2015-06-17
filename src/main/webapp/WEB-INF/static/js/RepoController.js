
(function() {
	
	var app = angular.module("githubViewer");
	
	var RepoController = function(s,route,git) {
		
		var onRepoComplete = function(response) {
			s.isError = false;
			s.repo = response;
			
		};
		
		var onContributorsComplete = function(response) {
			s.contributors = response;
		};
		
		var onError = function(data,status,header,config) {			
			s.data = data;
			s.status = status;
			s.headers = header;
			s.config = config;
		}
		
		var onChainPromiseGet = function(response) {
			s.repo = response;
		};
		
		git.chainedPromises(route.username,route.reponame).success(onChainPromiseGet,onError);
				
	//	git.getRepo(route.username,route.reponame).success(onRepoComplete,onError);
	//	git.getContributors(route.username,route.reponame).success(onContributorsComplete,onError);
		
	};
	
	app.controller("RepoController",["$scope","$routeParams","github",RepoController]);
	
	
}());