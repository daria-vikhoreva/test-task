<template>
	<div class="card">
		<div
			class="card__wrapper"
			v-if="isEdited"
		>
			<UiInput
				placeholder="Заголовок задачи"
				v-model="editedTitleValue"
				class="card__input"
			/>
			<UiInput
				placeholder="Описание задачи"
				v-model="editedDescriptionValue"
				class="card__input"
			/>

			<div class="card__buttons">
				<UiButton
					text="Сохранить"
					color="blue"
					@click="editTask(card)"
				/>
				<UiButton
					text="Отменить"
					color="red"
					@click="cancelEdit(card)"
				/>
			</div>
		</div>
		<div
			v-else
			class="card__wrapper"
		>
			<div class="card__title">{{ card.title }}</div>
			<div class="card__descr">
				{{ card.description }}
			</div>

			<div class="card__buttons">
				<UiButton
					text="Редактировать"
					color="blue"
					@click="openEditor()"
				/>
				<UiButton
					text="Удалить"
					color="red"
					@click="deleteTask()"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import UiButton from './UI/UiButton.vue';
import UiInput from './UI/UiInput.vue';

export default {
	name: 'TaskCard',
	props: ['card'],
	emits: ['deleteTask'],
	data() {
		return {
			isEdited: false,
			editedTitleValue: this.card.title,
			editedDescriptionValue: this.card.description,
		};
	},
	components: {
		UiButton,
		UiInput,
	},
	methods: {
		editTask(card) {
			if (this.editedTitleValue || this.editedDescriptionValue) {
				const payload = {
					id: card.id,
					newTitle: this.editedTitleValue,
					newDescription: this.editedDescriptionValue,
				};
				this.$store.dispatch('EDIT_TASK', payload);
				this.isEdited = false;
			} else {
				this.isEdited = false;
				this.deleteTask();
			}
		},
		cancelEdit() {
			this.isEdited = false;
			this.editedTitleValue = this.card.title;
			this.editedDescriptionValue = this.card.description;
		},

		openEditor() {
			this.isEdited = true;
		},
		deleteTask() {
			this.$emit('deleteTask');
		},
	},
};
</script>

<style scoped>
.card__wrapper {
	display: flex;
	width: 320px;
	min-height: 200px;
	flex-direction: column;
	justify-content: space-between;
	padding: 25px 20px;
	border-radius: 5px;
	border: 2px solid grey;
}
.card__buttons {
	margin-top: 8px;
	display: flex;
	justify-content: space-around;
}
.card__title {
	font-weight: 500;
	word-wrap: anywhere;
}
.card__descr {
	word-wrap: anywhere;
}
.card__input {
	border: 1px solid grey;
}
</style>
