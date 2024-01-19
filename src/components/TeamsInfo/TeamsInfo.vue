<template>
	<div class="teams-info">
		<div class="container">
			<teams-detail :teamsFirst="teamsFirst" :teamsSecond="teamsSecond"/>
			<teams-table :teamsFirst="teamsFirst" :teamsSecond="teamsSecond"/>
			<calendar-section/>
		</div>
	</div>
</template>

<script>
import TeamsDetail from "@/components/TeamsInfo/TeamsDetail/TeamsDetail.vue";
import TeamsTable from "@/components/TeamsInfo/TeamsTable/TeamsTable.vue";
import enisei from "@/assets/img/Enisei.png";
import spartak from "@/assets/img/spartak.png";
import bb from "@/assets/img/bb.png";
import rodina from "@/assets/img/rodina.png";
import amkal from "@/assets/img/Amkal.png";
import petropavl from "@/assets/img/petropavl.png";
import CalendarSection from "@/components/TeamsInfo/TeamsCalendar/CalendarSection.vue";

export default {
	name: "TeamsInfo",
	components: {CalendarSection, TeamsTable, TeamsDetail},
	data() {
		return {
			teamsFirst: [
				{
					id: 1, name: 'Енисей', src: enisei, link: '#', isWhite: false, stats: {
						games: 1,
						win: 1,
						draw: 1,
						loose: 1,
						scores: 1,
						points: 1,
					}
				},
				{
					id: 2, name: 'Спартак-2', src: spartak, link: '#', isWhite: false, stats: {
						games: 1,
						win: 1,
						draw: 1,
						loose: 1,
						scores: 1,
						points: 1,
					}
				},
				{
					id: 3, name: 'Broke Boys', src: bb, link: '#', isWhite: true, stats: {
						games: 1,
						win: 1,
						draw: 1,
						loose: 1,
						scores: 1,
						points: 1,
					}
				}
			],
			teamsSecond: [
				{
					id: 1, name: 'Родина', src: rodina, link: '#', isWhite: false, stats: {
						games: 1,
						win: 1,
						draw: 1,
						loose: 1,
						scores: 1,
						points: 1,
					}
				},
				{
					id: 2, name: 'Амкал', src: amkal, link: '#', isWhite: true, stats: {
						games: 1,
						win: 1,
						draw: 1,
						loose: 1,
						scores: 1,
						points: 1,
					}
				},
				{
					id: 3, name: 'Кызыл-Жар', src: petropavl, link: '#', isWhite: false, stats: {
						games: 1,
						win: 1,
						draw: 1,
						loose: 1,
						scores: 1,
						points: 1,
					}
				}
			],
		}
	}
}
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