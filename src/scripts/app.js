define([
  'jquery',
  'backbone',
  'handlebars',
  'collections/movie-collection',
  'views/movie-collection-view',
  'text!templates/app.html'
], function($, Backbone, hbs, MC, MCView, AppTemplate) {
  var AppView = Backbone.View.extend({
    el : $('#wrapper'),
    template : hbs.compile(AppTemplate),
    initialize: function() {
      this.render();
    },
    render: function() {
      var mcView = new MCView({
        collection: new MC()
      });
      this.$el.append(mcView.render().el);
    }
  });

  return AppView;
});
