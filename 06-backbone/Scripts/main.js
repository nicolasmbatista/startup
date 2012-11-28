requirejs.config({
	deps: ['main'],
	paths: {		
		underscore : 'lib/underscore',
		jquery : 'lib/jquery',
		backbone : 'lib/backbone',
		handlebars : 'lib/handlebars',
		movieModel : 'app/model/movieModel',
		movieView : 'app/view/movieView',
		movieCollection : 'app/collection/movieCollection'
	},

    shim: {
        backbone : {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        }
    }
});

require(["backbone","movieModel","movieView","movieCollection"], function(underscore,movieModel,movieView,movieCollection) {	

	//Model test
	var terminator = new movieModel();//Empty
	var ants = new movieModel({name : "ants", year : "1990", synopsis : "boring ants"});//from a direct json
	console.log("new movie created: "+terminator.get("name"));
	terminator.set("name","terminator");
	terminator.set("year","1992");
	terminator.set("synopsis","Bla bla terminator tutututuut hasta la vista baby")
	console.log("Changed movie name: "+terminator.get("name"));

	//Collection test
	var col = new movieCollection();
	col.add(terminator);
	col.add(ants);

	for(var i = 0; i < col.length ; i++){
			console.log("Movie "+ i +" from my collection: "+col.at(i).get("name"));
	}

	//View Test
	var view = new movieView({collection : col, el : $('.testdiv')});
	$('.testdiv').append(view.render());
	

});

