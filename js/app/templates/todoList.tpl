<ol id="todoList">
	{{#each items}}
	<li>{{this.name}} <a id="{{this.cid}}" class="removeListItem" href="#"><i class="icon-remove"></i></a></li>
	{{/each}}
</ol>