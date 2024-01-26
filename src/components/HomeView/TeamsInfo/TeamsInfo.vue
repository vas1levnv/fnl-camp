<template>
	<div class="teams-info">
		<div class="container">
			<teams-detail :teamsFirst="teamsFirst" :teamsSecond="teamsSecond"/>
			<teams-table :teamsFirst="teamsFirst" :teamsSecond="teamsSecond"/>
			<calendar-section/>
		</div>
	</div>
</template>

<script setup>
import {useStore} from "vuex";
import TeamsDetail from "@/components/HomeView/TeamsInfo/TeamsDetail/TeamsDetail.vue";
import TeamsTable from "@/components/HomeView/TeamsInfo/TeamsTable/TeamsTable.vue";
import CalendarSection from "@/components/HomeView/TeamsInfo/TeamsCalendar/CalendarSection.vue";

const store = useStore()

const teamsFirst = store.state.teamsFirst
const teamsSecond = store.state.teamsSecond

</script>

<style scoped lang="scss">
.teams-info {
	background: white;
	color: black;
	padding: 9.5rem 0;
}

@media (max-width: 1024px) {
	.teams-info {
		padding: 5rem 0;
	}
}
</style>