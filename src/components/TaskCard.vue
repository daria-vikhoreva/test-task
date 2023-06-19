<template>
	<div class="card">
		<div class="card__title">{{ card.title }}</div>
		<div class="card__descr">
			{{ card.description }}
		</div>
		<div class="card__buttons">
			<UiButton text="Редактировать" />
			<UiButton
				text="Удалить"
				@click="deleteTask"
			/>
		</div>
	</div>
</template>

<script>
import UiButton from './UI/UiButton.vue';
export default {
	name: 'TaskCard',
	props: ['card'],
	components: {
		UiButton,
	},
	data() {
		return {};
	},
	methods: {
		deleteTask(index) {
			// this.$store.commit('deleteTask', index);
			this.$emit('deleteTask', index);
		},
	},
};
</script>

<style scoped>
.card {
	display: flex;
	width: 320px;
	height: 200px;
	flex-direction: column;
	justify-content: space-between;
	gap: 12px;
	padding: 15px;
	border-radius: 5px;
	border: 2px solid grey;
}

.card__buttons {
	display: flex;
	justify-content: space-around;
}
</style>
