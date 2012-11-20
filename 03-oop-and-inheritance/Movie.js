//This is my previous code. Before making a module out of it
/*
function Movie(){ 
			this.attributes = {} ;
			this.observers = [] ;

		}

Movie.prototype.getAttribute = function (key){
		return this.attributes[key];
	}

Movie.prototype.setAttribute = function (key,value){
		this.attributes[key] = value;
	}

Movie.prototype.trigger = function(evt){
		for(var i = 0; i < this.observers.length ; i++){
			this.observers[i].notify(evt,this);
		}
		console.log('Event ' + evt + ' fired!');
	}
Movie.prototype.play = function(){
		this.trigger('play');

	}

Movie.prototype.stop = function(){
		this.trigger('stop');
	}

Movie.prototype.addObserver = function (observer){
		this.observers.push(observer);
	}



function MovieObserver(){

}

MovieObserver.prototype.notify = function(value,movie){
	if(value == 'play'){
		console.log('Playing ' + movie.getAttribute('name') + '...');
	}else if (value == 'stop') {
		console.log(movie.getAttribute('name') + ' stopped.');
	}
}
*/

//Usage Example
/*
var terminator = new Movie();
terminator.setAttribute('name','Terminator');
terminator.setAttribute('year','1990');
var movieObserver = new MovieObserver();
terminator.addObserver(movieObserver);
terminator.play();
terminator.stop();
*/



//Movie module:
//****************************************************//

//Now the MovieObserver class has a public function notify (it works the same)


var MovieObserver = function(){
	return {
		notify : function(value,movie){
			if(value == 'play'){
				console.log('Playing ' + movie.getAttribute('name') + '...');
			}else if (value == 'stop') {
				console.log(movie.getAttribute('name') + ' stopped.');
			}
		}
	}
}

//And Movie class has attributes and observers private to the user, along with a trigger function. Rest of the methods are public
var Movie = function(){
	var attributes = {};
	var observers = [];
	//I can't use "this" in this function, cause when its called, this = window (see play and stop)
	var trigger = function(evt,movie){
				for(var i = 0; i < observers.length ; i++){
					observers[i].notify(evt,movie);
				}
				console.log('Event ' + evt + ' fired!');
			};
	
	return {
		getAttribute : function (key){
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
		
	}
}
