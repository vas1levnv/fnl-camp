<template>
	<div class="teams-table">
		<h2>Турнирная таблица</h2>
		<teams-table-item title="Первая группа" :teams="props.teamsFirst"/>
		<teams-table-item title="Вторая группа" :teams="props.teamsSecond"/>
	</div>
</template>

<script setup>
import TeamsTableItem from "@/components/TeamsInfo/TeamsTable/TeamsTableItem.vue";
const props = defineProps(['teamsFirst', 'teamsSecond'])
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
			font-size: 2rem;
		}
	}
}
</style>