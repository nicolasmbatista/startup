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
	var myProfile = {
				name : "Nicolas Batista"
				,currentJob : "Student at UNCPBA"
				,location : "Argentina"
				,industry : "Computer Games"
				,description : "Im an enthusiastic computer games programmer."
				,profileImg : "http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/2/000/1a6/31d/269e581.jpg"
				,jobs: [
				    {company: "LaYapa 2005-2008: ", description: "Worked as manager at customer service with two people in charge."},
				    {company: "Jojocompany 2008-2012: ", description: "Just creating cool stuff."}
				  ]
			};


			//Handlebars list
	/*Handlebars.registerHelper('list', function(items, options) {
	  var out = "<ul>";

	  for(var i=0, l=items.length; i<l; i++) {
	    out = out + "<li>" + options.fn(items[i]) + "</li>";
	  }

	  return out + "</ul>";
	});*/

		//Handlebars template generation
  	/*var source   = $('#template').html();
	var template = Handlebars.compile(source);
	var context = myProfile
	var html    = template(context);*/

	//set the html from the template
	

	//Model test
	var terminator = new movieModel();//Empty
	var ants = new movieModel({name : "ants"});//from a direct json
	var prof = new movieModel(myProfile); //from my profil json
	console.log("new movie created: "+prof.get("name"));
	console.log("new movie created: "+terminator.get("name"));
	terminator.set("name","terminator");
	console.log("Changed movie name: "+terminator.get("name"));

	//Collection test
	var col = new movieCollection();
	col.add(terminator);
	col.add(ants);
	col.add(prof);

	for(var i = 0; i < col.length ; i++){
			console.log("Movie "+ i +" from my collection: "+col.at(i).get("name"));
	}


	var view = new movieView({model : terminator, el : $('#testdiv')});
	$('body').html(view.render().el);
	//View Test

});

