<template>
	<div class="teams-detail">
		<teams-item title="Первая группа" :teams="props.teamsFirst"/>
		<teams-item title="Вторая группа" :teams="props.teamsSecond"/>
	</div>
</template>

<script setup>
import TeamsItem from "@/components/HomeView/TeamsInfo/TeamsDetail/TeamsItem.vue";

const props = defineProps(['teamsFirst', 'teamsSecond'])

</script>

<style scoped lang="scss">
.teams-detail {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 6rem;
}

@media (max-width: 1200px) {
	.teams-detail {
		gap: 3rem;
	}
}

@media (max-width: 1024px) {
	.teams-detail {
		grid-template-columns: 1fr;
		gap: 2rem;
	}
}
</style>