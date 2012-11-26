define(['backbone'], function (Backbone) {
  return Backbone.Model.extend({

    //Defaults attributes
    defaults: function() {
      return {
        name: "Movie with no name"
      };
    },

    // Ensure that each movie created has `name`.
    initialize: function() {
      if (!this.get("name")) {
        this.set({"name": this.defaults.title});
      }
    },

    //changes movie name
    setName: function(newName) {
      this.save({name: newName});
    },

    //shows movie name
    showName: function() {
      this.get("name");
    }
  });
});