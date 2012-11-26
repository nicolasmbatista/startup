requirejs.config({
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'foo': {
            deps: ['bar'],
            exports: 'Foo',
            init: function (bar) {
                //Using a function allows you to call noConflict for
                //libraries that support it, and do other cleanup.
                //However, plugins for those libraries may still want
                //a global. "this" for the function will be the global
                //object. The dependencies will be passed in as
                //function arguments. If this function returns a value,
                //then that value is used as the module export value
                //instead of the object found via the 'exports' string.
                return this.Foo.noConflict();
            }
        }
    }
});

require(["lib/backbone","lib/handlebars","app/model/movieModel"], function(underscore,movieModel) {
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



});
