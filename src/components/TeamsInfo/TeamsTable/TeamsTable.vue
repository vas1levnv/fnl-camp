<template>
	<div class="teams-table">
		<h2>Турнирная таблица</h2>
		<teams-table-item title="Первая группа" :teams="teamsFirst"/>
		<teams-table-item title="Вторая группа" :teams="teamsSecond"/>
	</div>
</template>

<script>
import TeamsTableItem from "@/components/TeamsInfo/TeamsTable/TeamsTableItem.vue";

export default {
	name: "TeamsTable",
	components: {TeamsTableItem},
	props: {
		teamsFirst: Array,
		teamsSecond: Array,
	},
}
</script>

<style scoped lang="scss">
.teams-table {
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	margin-top: 3rem;
	
	h2 {
		text-align: center;
	}
}

@media (max-width: 1024px) {
	.teams-table{
		gap: 1.5rem;
	}
}

@media (max-width: 768px) {
	.teams-table{
		gap: 1rem;
		margin-top: 1.5rem;
		
		h2{
			font-size: 1.5rem;
		}
	}
}
</style>