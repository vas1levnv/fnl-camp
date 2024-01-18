<template>
	<main-teams/>
</template>

<script>

import MainTeams from "@/components/MainTeams/MainTeams.vue";

export default {
	name: 'App',
	components: {MainTeams},
	
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
}

#app {
	width: 100%;
	height: 100%;
}

.container {
	max-width: 1720px;
	margin: 0 auto;
	padding: 0 1rem;
}

</style>
