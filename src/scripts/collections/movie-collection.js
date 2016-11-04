define([
  'backbone',
  'models/movie-model'
], function(Backbone, MovieModel) {
  var MovieCollection = Backbone.Collection.extend({
    model: MovieModel,
    url: 'https://jsonplaceholder.typicode.com/users'
  });

  return MovieCollection
});
