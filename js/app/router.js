define(['Backbone', 'Handlebars', 'views/todo', 'collections/todos', 'text!templates/main.tpl', 'Bootstrap'],
function(Backbone, Handlebars, TodoView, TodoCollection, MainTemplate){

	return Backbone.Router.extend({
		initialize : function(){
		},
	
		routes : {
			"": "index"
		},
		
		index: function(id){
			$('#mainDiv').html(Handlebars.compile(MainTemplate));
			
			var listView = new TodoView();
			$('#list').html(listView.render());
		}
	});
	
});