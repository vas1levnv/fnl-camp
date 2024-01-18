<template>
	<header-page/>
	<main-teams/>
</template>

<script>

import MainTeams from "@/components/MainTeams/MainTeams.vue";
import HeaderPage from "@/components/Header/HeaderPage.vue";

export default {
	name: 'App',
	components: {HeaderPage, MainTeams},
	
}
</script>

<style lang="scss">

@import "@/assets/main.css";
@import "@/assets/fonts/ttruns/style.css";

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
