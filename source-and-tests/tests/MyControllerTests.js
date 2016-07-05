describe('MyController', function(){
	beforeEach(module('my-module'));

	describe('addSong()', function(){
		it('should add songs', inject(function($controller) {
			var scope = {};
			var myController = $controller('MyController', {
				$scope: scope
			});

			scope.addSong('While My Guitar Gently Weeps');

			scope.songs.should.contain('While My Guitar Gently Weeps');
		}));
	});
});
describe('MyController1', function(){
	beforeEach(module('my-module'));

	describe('getFullName()', function(){
		it('should handle names correctly', inject(function($controller){
			var myController = $controller('MyController1');

			myController.firstName = 'George';
			myController.lastName = 'Harrison';

			myController.getFullName().should.equal('George Harrison');
		}));
	});
});

describe('MyController2', function(){
	beforeEach(module('my-module'));

	describe('get-instruments result', function(){
		it('should be added to scope', inject(function($controller, $httpBackend){
			var scope = {};
			$httpBackend
				.when('GET', 'api/get-instruments')
				.respond([
					'vocals', 'guitar', 'sitar'
				]);
			var myController = $controller('MyController2', {
				$scope: scope
			});

			$httpBackend.flush();

			scope.instruments.should.contain('sitar');
		}));
	});
	describe('get-instruments with error', function(){
		it('should be a status with error', inject(function($controller, $httpBackend){
			var scope = {};
			$httpBackend
				.when('GET', 'api/get-instruments')
				.respond(500, '');
			var myController = $controller('MyController2', {
				$scope: scope
			});

			$httpBackend.flush();

			scope.status.should.contain('ERROR');
		}));
	});
});






