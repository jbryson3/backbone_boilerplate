define(['Backbone', ''],
function(Backbone){
	return Backbone.Router.extend({
		routes : {
			"": "index"
		},
		
		index: function(id){
			console.log("index page encountered: " + id);
		}
	});
});