<template>
	<header class="header">
		<div class="container">
			<div class="header-wrapper">
				<kinopoisk-small-icon/>
			</div>
		</div>
	</header>
</template>

<script setup>
import KinopoiskSmallIcon from "@/components/icons/KinopoiskSmallIcon.vue";
</script>

<style scoped lang="scss">
.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	
	&-wrapper {
		padding: 3.6rem 0;
	}
}

@media (max-width: 1024px) {
	.header {
		&-wrapper {
			padding: 2rem 0;
		}
	}
}

@media (max-width: 768px) {
	.header {
		&-wrapper {
			padding: 1rem 0;
		}
	}
}

</style>