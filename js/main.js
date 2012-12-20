requirejs.config({
	baseUrl: "js/app/",
	
	paths : {
		Bootstrap : '../../assets/bootstrap/js/bootstrap.min',
		Backbone : '../../assets/backbone-min',
		'_' : '../../assets/underscore-min'
	},
	
	shim : {
		'_' : {
			exports: '_'
		},
	
		'Backbone' : {
			deps : ['jquery', '_'],
			exports : 'Backbone'
		},
		
		'Bootstrap' : {
			deps : ['jquery'],
			exports: 'Bootstrap'
		},
		
		'Handlebars' : {
			exports: 'Handlebars'
		}
	}
});

require(['Backbone', 'router'], 
function(Backbone, Router) {
    var app = new Router();
	Backbone.history.start();
});
