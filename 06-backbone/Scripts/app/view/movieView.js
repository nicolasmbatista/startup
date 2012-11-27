define(['backbone'], function (Backbone) {
  return Backbone.Model.extend({

	tagName: "li",

	className: "body",

	events: {
	  "click .button.add" : "openAddDialog",
	  "click .button.edit":   "openEditDialog",
	  "click .button.remove": "remove"
	},

	 render: function() {
      this.$el.html(<h1>Movies!</h1>);
      return this;
    },
    
  });
});