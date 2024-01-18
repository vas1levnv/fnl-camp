<template>
	<header class="header">
		<div class="container">
			<div class="header-wrapper">
				<kinopoisk-small-icon/>
			</div>
		</div>
	</header>
</template>

<script>
import KinopoiskSmallIcon from "@/components/icons/KinopoiskSmallIcon.vue";

export default {
	name: "HeaderPage",
	components: {KinopoiskSmallIcon}
}
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
</style>