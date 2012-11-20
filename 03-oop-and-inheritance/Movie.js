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
				console.log('Event' + evt + 'fired!');
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