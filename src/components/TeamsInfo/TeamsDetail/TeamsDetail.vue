<template>
	<div class="teams-detail">
		<teams-item title="Первая группа" :teams="teamsFirst"/>
		<teams-item title="Вторая группа" :teams="teamsSecond"/>
	</div>
</template>

<script>
import TeamsItem from "@/components/TeamsInfo/TeamsDetail/TeamsItem.vue";

export default {
	name: "TeamsDetail",
	components: {TeamsItem},
	props: ['teamsFirst', 'teamsSecond']
	
}
</script>

<style scoped lang="scss">
.teams-detail {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 6rem;
}

@media (max-width: 1024px) {
	.teams-detail {
		grid-template-columns: 1fr;
		gap: 2rem;
	}
}
</style>