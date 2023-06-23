<template>
	<div class="form-wrapper">
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
import { mapGetters, mapActions } from 'vuex';

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
					id: randomNumberExclude(this.IDs),
					title: this.titleValue,
					description: this.descriptionValue,
				};
				this.addTask(card);
				this.clearForm();
			}
		},
		clearForm: function () {
			this.titleValue = '';
			this.descriptionValue = '';
		},
		...mapActions(['addTask']),
	},
	computed: {
		...mapGetters({ IDs: 'getIDs' }),
	},
};
</script>

<style scoped>
.form-wrapper {
	width: 320px;
	height: max-content;
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
