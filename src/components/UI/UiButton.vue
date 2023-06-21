<template>
	<button
		class="button"
		:class="color"
		@click="handleEvent"
	>
		{{ text }}
	</button>
</template>

<script>
export default {
	name: 'UiButton',
	props: ['text', 'color'],
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
	font-size: 14px;
	font-weight: 500;
	border: none;
	cursor: pointer;
}

.blue {
	background-color: rgb(58, 71, 173);
	color: #fff;
}

.red {
	background-color: rgb(125, 40, 39);
	color: #fff;
}
</style>
