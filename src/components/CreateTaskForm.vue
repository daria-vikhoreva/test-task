<template>
	<div class="form-wrapper">
		<h2 class="form__header">Добавить новую задачу</h2>
		<form
			class="form"
			@submit.prevent="createTask"
		>
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
				value="Создать задачу"
				class="form__button"
			/>
		</form>
	</div>
</template>

<script>
import { randomNumberExclude } from '../helpers/random';
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
					id: randomNumberExclude(this.$store.getters.getIDs),
					title: this.titleValue,
					description: this.descriptionValue,
				};
				this.$store.dispatch('ADD_TASK', card);
			}
		},
	},
};
</script>

<style scoped>
.form-wrapper {
	width: 400px;
	height: max-content;
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 12px 16px;
	border-radius: 5px;
	border: 2px solid grey;
}
.form {
	display: flex;
	flex-direction: column;
	gap: 12px;
}
.form__button {
	width: max-content;
	margin: 0 auto;
	border-radius: 5px;
	padding: 10px 16px;
	background-color: rgb(58, 71, 173);
	color: #fff;
	font-size: 14px;
	border: none;
	cursor: pointer;
}
</style>
