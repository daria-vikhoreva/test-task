<template>
	<div class="tasks">
		<h1>Мои задачи</h1>
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
	computed: {
		cards: (props) => props.$store.getters.getTasks,
	},
};
</script>

<style>
.tasks__wrapper {
	display: flex;
	gap: 70px;
}
</style>
