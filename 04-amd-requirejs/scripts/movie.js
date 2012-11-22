define("movie", function () {
	//Constructor
	var Movie = function () {
	};

	//Private vars and functions
	var attributes = {};
	var observers = [];
	//I can't use "this" in this function, cause when its called, this = window (see play and stop)
	var trigger = function(evt,movie){
				console.log('Event ' + evt + ' fired!');
				for(var i = 0; i < observers.length ; i++){
					observers[i].notify(evt,movie);
				}				
			};
			
	Movie.prototype = {
		constructor : Movie
		,getAttribute : function (key){
			return attributes[key];
			}

		,setAttribute : function (key,value){
				attributes[key] = value;
			}
			//So in play and stop, i have to pass a reference to me, so trigger can "send me" along with the event
		,play : function(){
				trigger('play',this);
			}

		,stop : function(){
				trigger('stop',this);
			}

		,addObserver : function (observer){
			observers.push(observer);
		}		
	};

	return Movie;


});