define(['backbone','handlebars'], function (Backbone,handlebars) {
  return Backbone.View.extend({

	className: "testdiv",

	template: Handlebars.compile($('#template').html()),

	 render: function() {
	 	for(var i = 0; i < this.collection.length ; i++){
			this.$el.append(this.template(this.collection.at(i).toJSON()));
		}
      
      return this;
    }
    
  });
});
