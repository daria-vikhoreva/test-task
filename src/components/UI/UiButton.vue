<template>
	<button
		class="button"
		@click="handleEvent"
	>
		{{ text }}
	</button>
</template>

<script>
export default {
	name: 'UiButton',
	props: ['text'],
	methods: {
		handleEvent(event) {
			this.$emit('click', event.target.value);
		},
	},
};
</script>

<style scoped>
.button {
	border-radius: 5px;
	padding: 10px 16px;
	width: max-content;
	background-color: rgb(177, 177, 177);
	border: none;
	cursor: pointer;
}
</style>
