<template>
	<div class="tasks">
		<h1>Страница со списком задач</h1>
		<div class="tasks__wrapper">
			<CreateTaskForm />
			<TasksList :cards="cards" />
		</div>
	</div>
</template>

<script>
import CreateTaskForm from '../components/CreateTaskForm.vue';
import TasksList from '../components/TasksList.vue';

export default {
	name: 'TasksView',
	components: {
		CreateTaskForm,
		TasksList,
	},
	data() {
		return {
			cards: this.$store.state.cards ? this.$store.state.cards : '',
		};
	},
};
</script>

<style>
.tasks__wrapper {
	display: flex;
	gap: 70px;
}
</style>
