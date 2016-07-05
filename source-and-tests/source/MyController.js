'use strict';

(function(){
	angular.module('my-module', []);
	angular
		.module('my-module')
		.controller('MyController1', [
			function(){
				var self = this;
				self.firstName = '';
				self.lastName = '';

				self.getFullName = function(){
					return self.firstName + ' ' + self.lastName;
				};
					return self;
			}											
		]);
	angular
		.module('my-module')
		.controller('MyController', [
			'$scope',
			function($scope){
				var self = this;

				// ...

				$scope.songs = [
					'Here Comes The Sun'
				];

				$scope.addSong = function(song) {
					$scope.songs.push(song);
				};

				return self;
			}
			]);
	angular
		.module('my-module')
		.controller('MyController2', [
			'$scope', '$http',
			function($scope, $http){
				var self = this;
				// ...
				$scope.instruments = ['foo'];
				$scope.status = '';
				$http.get('api/get-instruments')
					.success(function(data) {
						$scope.instruments = data;
					})
					.error(function(){
						$scope.status = 'ERROR'
					});

				return self;
			}
		]);
})();