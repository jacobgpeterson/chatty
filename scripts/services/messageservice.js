'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($q, $http) {
    return {
    	getMessages: function(){
    		var dfd = $q.defer();

    		$http({
    			method: 'GET',
    			url: 'http://localhost:8777'
    		}).success(function(data){
    			dfd.resolve(data);
    		});
    		return dfd.promise;
    	},
    	addMessage: function(message, date) {
        var dfd = $q.defer();

        $http({
          method: 'POST',
          url: 'http://localhost:8777',
          data: {
          	message: message,
          	createdAt: date
          }
        }).success(function(data) {
          dfd.resolve(data);
        });

        return dfd.promise;
      	}
    }
});
