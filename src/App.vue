<template>
	<header-page/>
	<main-teams/>
	<teams-info/>
	<winners-section/>
	<video-redirect/>
	<teams-description/>
	<map-section/>
	<about-stadium/>
	<sponsors-section/>
	<footer-page/>
</template>

<script>

import MainTeams from "@/components/MainTeams/MainTeams.vue";
import HeaderPage from "@/components/Header/HeaderPage.vue";
import WinnersSection from "@/components/WinnersSection/WinnersSection.vue";
import TeamsDescription from "@/components/TeamsDescription/TeamsDescription.vue";
import MapSection from "@/components/MapSection/MapSection.vue";
import VideoRedirect from "@/components/VideoRedirect/VideoRedirect.vue";
import TeamsInfo from "@/components/TeamsInfo/TeamsInfo.vue";
import AboutStadium from "@/components/AboutStadium/AboutStadium.vue";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection.vue";
import FooterPage from "@/components/Footer/FooterPage.vue";

export default {
	name: 'App',
	components: {
		FooterPage,
		SponsorsSection,
		AboutStadium,
		TeamsInfo, VideoRedirect, MapSection, TeamsDescription, WinnersSection, HeaderPage, MainTeams
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
