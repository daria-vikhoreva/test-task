<template>
	<div class="tasks">
		<h1 class="tasks__header">Мои задачи</h1>
		<div class="tasks__wrapper">
			<div class="tasks__form">
				<h2>Добавить задачу</h2>
				<CreateTaskForm />
			</div>

			<TasksList :cards="cards" />
		</div>
	</div>
</template>

<script>
import CreateTaskForm from '../components/CreateTaskForm.vue';
import TasksList from '../components/TasksList.vue';

import { mapGetters } from 'vuex';

export default {
	name: 'TasksView',
	components: {
		CreateTaskForm,
		TasksList,
	},
	computed: {
		...mapGetters({ cards: 'getTasks' }),
	},
};
</script>

<style>
.tasks__wrapper {
	display: flex;
	gap: 70px;
}

.tasks__form {
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding: 25px 20px;
	border-radius: 5px;
	border: 2px solid grey;
	height: 100%;
}
</style>
