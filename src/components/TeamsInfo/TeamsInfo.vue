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
import TeamsDetail from "@/components/TeamsInfo/TeamsDetail/TeamsDetail.vue";
import TeamsTable from "@/components/TeamsInfo/TeamsTable/TeamsTable.vue";
import CalendarSection from "@/components/TeamsInfo/TeamsCalendar/CalendarSection.vue";
import {useStore} from "vuex";

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