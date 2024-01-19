<template>
	<button>
		<slot/>
	</button>
</template>

<script>
export default {
	name: "CustomButton"
}
</script>

<style scoped lang="scss">
button {
	border: none;
	outline: none;
	background: var(--orange);
	color: black;
	padding: 0.75rem 1.5rem;
	border-radius: 1rem;
	font-size: 1.25rem;
	font-weight: 500;
	cursor: pointer;
	white-space: nowrap;
}

@media (max-width: 768px) {
	button{
		padding: 0.5rem 1rem;
	}
}
</style>