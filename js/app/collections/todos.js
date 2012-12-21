define(['Backbone', 'models/todo'],
function(Backbone, Todo){
	
	return Backbone.Collection.extend({
		model : Todo,
		
		initialize : function(){
			
			this.add(new Todo({title:"First Thing"}));
			this.add(new Todo({title:"Second Thing"}));
			console.log(this.toJSON());
		}
	});

});