<template>
	<div class="tasks-list">
		<h2>Текущий список задач</h2>

		<div class="tasks-wrapper">
			<TaskCard
				v-for="(card, index) in cards"
				:key="index"
				:card="card"
				@deleteTask="deleteTask(card)"
			/>
		</div>
	</div>
</template>

<script>
import TaskCard from './TaskCard.vue';
export default {
	name: 'TasksList',
	props: ['cards'],
	data() {
		return {};
	},
	components: {
		TaskCard,
	},
	methods: {
		deleteTask(task) {
			this.$store.dispatch('DELETE_TASK', task);
		},
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
