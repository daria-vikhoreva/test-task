<template>
	<div class="form">
		<h2 class="form__header">Добавить новую задачу</h2>
		<div class="form__wrapper">
			<UiInput
				class="form__input"
				placeholder="Заголовок задачи"
				v-model="titleValue"
			/>
			<UiInput
				class="form__input"
				placeholder="Описание задачи"
				v-model="descriptionValue"
			/>

			<input
				type="submit"
				@click="createTask"
				value="Создать задачу"
				class="form__button"
			/>
		</div>
	</div>
</template>

<script>
import UiInput from './UI/UiInput.vue';
export default {
	name: 'CreateTaskForm',
	data() {
		return {
			titleValue: '',
			descriptionValue: '',
		};
	},
	components: {
		UiInput,
	},
	methods: {
		createTask: function () {
			if (this.titleValue || this.descriptionValue) {
				const card = {
					title: this.titleValue,
					description: this.descriptionValue,
				};
				this.$store.commit('createNewTask', card);
			}
		},
	},
};
</script>

<style scoped>
.form {
	width: 400px;
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.form__wrapper {
	display: flex;
	flex-direction: column;
	gap: 12px;
}
.form__button {
	width: max-content;
	margin: 0 auto;
	border-radius: 5px;
	padding: 10px 16px;
	background-color: rgb(177, 177, 177);
	border: none;
	cursor: pointer;
}
</style>
