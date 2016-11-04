define([
  'backbone'
], function(Backbone) {
  var MovieModel = Backbone.Model.extend({
    urlRoot: 'https://jsonplaceholder.typicode.com'
  });

  return MovieModel;
});
