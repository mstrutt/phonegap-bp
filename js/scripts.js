document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
	if (navigator.splashscreen) // As will error in browser
		navigator.splashscreen.hide();

	// Enabling active states to be applied on tap
	document.addEventListener("touchstart", function() {}, true);
}

angular
	.module('phonegapBP', ['ngRoute', 'ngSanitize'])
	.config(function($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(false);
		$routeProvider.
			when("/",  {templateUrl:'pages/index.html'}).
			when("/kitten",  {templateUrl:'/pages/kitten.html',  controller:KittenCntl}).
			when("/test",  {templateUrl:'/pages/test.html'}).
			otherwise({redirectTo: '/'});
	});

function KittenCntl () {
	console.log('kittens');
}

AppCntl.$inject = ['$scope', '$route']
function AppCntl($scope, $route) {
	$scope.$route = $route;
}