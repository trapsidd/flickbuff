require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
	},
	paths: {
		jquery: '../../bower_components/jquery/dist/jquery.min',
		underscore: '../../bower_components/underscore/underscore-min',
		backbone: '../../bower_components/backbone/backbone-min',
    handlebars: '../../bower_components/handlebars/handlebars.min',
    text: '../../bower_components/text/text'
	}
});

require([
	'handlebars',
	'./app'
], function (hbs, App) {

	hbs.registerHelper('link', function(url) {
		// console.log(url);
	  url  = hbs.Utils.escapeExpression(url);
	  var result = '<a href="' + url + '">' + url + '</a>';

	  return new hbs.SafeString(result);
	});

	new App();
});
