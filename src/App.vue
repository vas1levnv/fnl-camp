<template>
	<header-page/>
	<router-view/>
	<footer-page/>
	<move-to-top/>
</template>

<script>
import HeaderPage from "@/components/Header/HeaderPage.vue";
import FooterPage from "@/components/Footer/FooterPage.vue";
import MoveToTop from "@/components/MoveToTop/MoveToTop.vue";

export default {
	name: 'App',
	components: {
		MoveToTop,
		FooterPage,
		HeaderPage
	},
	
}
</script>

<style lang="scss">

@import "@/assets/main.css";
@import "@/assets/fonts/ttruns/stylesheet.css";

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body {
	min-height: 100vh;
	width: 100vw;
	font-family: "TT Runs", sans-serif;
	overflow-x: hidden;
	background: black;
	color: white;
}

#app {
	width: 100%;
	height: 100%;
}

.container {
	max-width: 1720px;
	margin: 0 auto;
	padding: 0 2rem;
}


@media (max-width: 768px) {
	.container {
		padding: 0 1rem;
	}
}
</style>
