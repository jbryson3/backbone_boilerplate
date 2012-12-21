define(['jquery', 'Backbone', 'Handlebars', 'collections/todos', 'text!templates/todoList.tpl'],
function($, Backbone, Handlebars, TodoCollection, TodoListTpl){

	return Backbone.View.extend({
		
		initialize: function(collection){
			this.todoCollection = collection || new TodoCollection();
			
			this.todoCollection.on("change", this.render);
		},
		
		events : {
			"click .removeListItem" : "removeItem",
			"click .icon-remove" : "removeItem",
			"click" : "removeItem"
		},
		
		render: function(){
			var template = Handlebars.compile(TodoListTpl);
			
			var templObj = {
				items: []
			};
			
			var todoCollectionArr = this.todoCollection.toArray();
			
			for(var i=0; i<todoCollectionArr.length; i++){
				var todo = {};
				todo.name = todoCollectionArr[i].get("title");
				todo.cid = todoCollectionArr[i].cid;
				templObj.items.push(todo);
			}
			
			return template(templObj);
		},
		
		removeItem: function(){
			console.log("abc");
		}
	});
	
});