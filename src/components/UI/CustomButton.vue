<template>
	<button>
		<slot/>
	</button>
</template>

<script setup>
</script>

<style scoped lang="scss">
button {
	border: none;
	outline: none;
	background: var(--orange);
	color: white;
	padding: 1rem 2.5rem;
	border-radius: 1rem;
	font-size: 1.25rem;
	font-weight: 500;
	cursor: pointer;
	white-space: nowrap;
}

@media (max-width: 768px) {
	button {
		padding: 0.5rem 1rem;
	}
}
</style>