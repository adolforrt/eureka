var eurekaApp = angular.module('eurekaApp',[
	'ngRoute',
	
	]);


eurekaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      
      when('/home', {
        templateUrl: 'partials/home.html'
        
      }).      

      when('/about', {
        templateUrl: 'partials/about.html'
        
      }).

      when('/portfolio', {
        templateUrl: 'partials/portfolio.html'
        
      }).

      when('/blog', {
        templateUrl: 'partials/blog.html'
        
      }).

      when('/contact', {
        templateUrl: 'partials/contact.html'
        
      }).
      
      otherwise({
        redirectTo: '/home'
      });
  }]);



 /*when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).


 <a href="#/phones/{{phone.id}}">{{phone.name}}</a>

 */