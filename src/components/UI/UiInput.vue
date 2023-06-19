<template>
	<input
		type="text"
		class="input"
		:placeholder="placeholder"
		:value="modelValue"
		@input="updateValue"
	/>
</template>

<script>
export default {
	name: 'UiInput',
	props: ['modelValue'],
	methods: {
		updateValue(event) {
			this.$emit('input', event.target.value);
		},
	},
};
</script>

<style scoped>
.input {
	padding: 10px;
	border-radius: 5px;
	border: 2px solid grey;
	width: 100%;
}
</style>
