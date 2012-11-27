define(['backbone','movieModel'], function (Backbone,movieModel) {
  return Backbone.Collection.extend({

    model : movieModel

  });
});