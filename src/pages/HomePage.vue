<template>
	<main-teams/>
	<teams-info/>
	<winners-section/>
	<video-redirect/>
	<teams-description/>
	<map-section/>
	<about-stadium/>
	<sponsors-section/>
</template>

<script>
import TeamsDescription from "@/components/TeamsDescription/TeamsDescription.vue";
import MapSection from "@/components/MapSection/MapSection.vue";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection.vue";
import AboutStadium from "@/components/AboutStadium/AboutStadium.vue";
import MainTeams from "@/components/MainTeams/MainTeams.vue";
import WinnersSection from "@/components/WinnersSection/WinnersSection.vue";
import VideoRedirect from "@/components/VideoRedirect/VideoRedirect.vue";
import TeamsInfo from "@/components/TeamsInfo/TeamsInfo.vue";

export default {
	name: "HomePage",
	components: {
		TeamsInfo,
		VideoRedirect,
		WinnersSection,
		MainTeams,
		AboutStadium,
		SponsorsSection,
		MapSection,
		TeamsDescription
	}
}
</script>

<style scoped>

</style>