<template>
	<header-page/>
	<main-teams/>
	<winners-section/>
</template>

<script>

import MainTeams from "@/components/MainTeams/MainTeams.vue";
import HeaderPage from "@/components/Header/HeaderPage.vue";
import WinnersSection from "@/components/WinnersSection/WinnersSection.vue";

export default {
	name: 'App',
	components: {WinnersSection, HeaderPage, MainTeams},
	
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

</style>
