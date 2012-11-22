define("movie",  function(){
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
);