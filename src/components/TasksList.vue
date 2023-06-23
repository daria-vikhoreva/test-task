<template>
	<div class="tasks-list">
		<h2>Текущий список задач</h2>

		<div class="tasks-wrapper">
			<TaskCard
				v-for="card in cards"
				:key="card.id"
				:card="card"
				@deleteTask="handleDeleteTask(card)"
			/>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

import TaskCard from './TaskCard.vue';
export default {
	name: 'TasksList',
	props: {
		cards: {
			type: Array,
			required: true,
		},
	},
	components: {
		TaskCard,
	},
	methods: {
		handleDeleteTask(task) {
			this.deleteTask(task);
		},
		...mapActions(['deleteTask']),
	},
};
</script>

<style scoped>
.tasks-list {
	display: flex;
	flex-direction: column;
	gap: 15px;
	width: 80%;
}
.tasks-wrapper {
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
}
</style>
