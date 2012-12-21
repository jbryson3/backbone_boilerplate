requirejs.config({
	baseUrl: "js/app/",
	
	paths : {
		'_' : '../../assets/underscore-min',
		Bootstrap : '../../assets/bootstrap/js/bootstrap.min',
		Backbone : '../../assets/backbone-min',
		Handlebars : '../../assets/handlebars',
		text : '../../assets/require-text'
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
	},
	
	//urlArgs: "rand=" + Math.random()
});

require(['Backbone', 'router'], 
function(Backbone, Router) {
    var app = new Router();
	Backbone.history.start();
});
