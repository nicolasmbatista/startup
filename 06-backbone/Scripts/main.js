requirejs.config({
	deps: ['main'],
	paths: {		
		underscore : 'lib/underscore',
		jquery : 'lib/jquery',
		backbone : 'lib/backbone',
		handlebars : 'lib/handlebars',
		movieModel : 'app/model/movieModel'
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

require(["backbone","handlebars","movieModel"], function(underscore,handlebars,movieModel) {
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

	Handlebars.registerHelper('list', function(items, options) {
	  var out = "<ul>";

	  for(var i=0, l=items.length; i<l; i++) {
	    out = out + "<li>" + options.fn(items[i]) + "</li>";
	  }

	  return out + "</ul>";
	});
  	var source   = $('#template').html();
	var template = Handlebars.compile(source);
	var context = myProfile
	var html    = template(context);
	$('body').html(html);
	//$.mobile.hidePageLoadingMsg();
	var a = new movieModel();
	console.log(a.get("name"));

	a.set("name","terminator");
	console.log(a.get("name"));

});
