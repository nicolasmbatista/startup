define(['backbone'], function (Backbone) {
  return Backbone.Model.extend({

    //Defaults attributes
    defaults: function() {
      return {
        name: "Movie with no name"
      };
    }
  });
});