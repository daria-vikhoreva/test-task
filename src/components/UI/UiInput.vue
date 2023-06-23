<template>
	<input
		type="text"
		class="input"
		:placeholder="placeholder"
		:value="value"
		@input="updateValue"
	/>
</template>

<script>
export default {
	name: 'UiInput',
	props: {
		placeholder: {
			type: String,
			required: true,
		},
		value: {
			type: String,
			required: true,
		},
	},
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
