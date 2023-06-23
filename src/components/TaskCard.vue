<template>
	<div class="card">
		<div class="card__wrapper">
			<template v-if="isEdited">
				<UiInput
					placeholder="Заголовок задачи"
					v-model="form.title"
					class="card__input"
				/>

				<UiInput
					placeholder="Описание задачи"
					v-model="form.description"
					class="card__input"
				/>

				<div class="card__buttons">
					<UiButton
						text="Сохранить"
						color="blue"
						@click="handleEditTask(card)"
					/>
					<UiButton
						text="Отменить"
						color="red"
						@click="cancelEdit(card)"
					/>
				</div>
			</template>

			<template v-else>
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
			</template>
		</div>
	</div>
</template>

<script>
import UiButton from './UI/UiButton.vue';
import UiInput from './UI/UiInput.vue';
import { mapActions } from 'vuex';

export default {
	name: 'TaskCard',
	props: {
		card: {
			type: Object,
			required: true,
		},
	},
	emits: ['deleteTask'],
	data() {
		return {
			isEdited: false,
			form: {
				title: this.card.title,
				description: this.card.description,
			},
		};
	},
	components: {
		UiButton,
		UiInput,
	},
	methods: {
		handleEditTask(card) {
			if (this.form.title || this.form.description) {
				const editedTask = {
					id: card.id,
					title: this.form.title,
					description: this.form.description,
				};
				this.editTask(editedTask);
				this.isEdited = false;
			} else {
				this.deleteTask();
			}
		},
		cancelEdit() {
			this.isEdited = false;
			this.form = this.card;
		},

		openEditor() {
			this.isEdited = true;
		},
		deleteTask() {
			this.$emit('deleteTask');
		},

		...mapActions(['editTask']),
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
