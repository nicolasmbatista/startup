define(['backbone','handlebars'], function (Backbone,handlebars) {
  return Backbone.View.extend({

	tagName: "li",

	className: "body",

	events: {
	  "click .button.add" : "openAddDialog",
	  "click .button.edit":   "openEditDialog",
	  "click .button.remove": "remove"
	},


	template: Handlebars.compile($('#template').html()),

	 render: function() {
      //this.$el.html(this.template(this.model.toJSON()));
      this.$el.html('<h1>MOvies</h1>');
      return this;
    }
    
  });
});