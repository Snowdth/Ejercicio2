Vue.component('todo-component', {
  template: `
	<li>
		<div class="view">
			<label>
				<input class="todo-item-checkbox" type="checkbox">
			</label>
			<span class="todo-item-title">{{title}}</span>
			<i class="control destroy" v-on:click="$emit('remove')">✕</i>
		</div>
	</li>
  `,
  props: ['title']
})


var ejercicioApp = new Vue ({
	el: '#ejercicioApp',
	data: {
		showTareas: false,
		newTarea:'',
		tareas:[],
	},
	methods: {
		clickTodo: function () {
			this.showTareas = !this.showTareas
		},
		addNewTodo: function () {
			this.tareas.push(this.newTarea)
			this.newTarea = ''
		}
	}


})