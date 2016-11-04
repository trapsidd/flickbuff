define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/movies.html'
], function($, _, Backbone, hbs, MovieTemplate) {
  var Api = {
    users: function() {
      return $.get('https://jsonplaceholder.typicode.com/users').then(function(users) {
        return users;
      })
    },

    posts: function() {
      return $.get('https://jsonplaceholder.typicode.com/posts').then(function(posts) {
        return posts;
      });
    }
  };

  var MovieCollectionView = Backbone.View.extend({
    template: hbs.compile(MovieTemplate),
    render: function() {
      var _this = this;
      $.when([
        Api.users(),
        Api.posts()
      ]).then(function(data) {
        var users = data[0];
        var posts = data[1];
        users.then(function(resUsers) {
          var resDataUserWithPosts = _.map(resUsers, function(u) {
            posts.then(function(resPosts) {
              var resp = _.where(resPosts, {
                userId: u.id
              });
              u.posts = resp;
            });
            return u;
          });
          console.log(resDataUserWithPosts);
          _this.$el.html(_this.template(resDataUserWithPosts));
        });
      });

      // var _this = this;
      // this.collection.fetch().done(function(data) {
      //   _this.$el.html(_this.template(data));
      // });

      return this;
    }
  });

  return MovieCollectionView;
})
