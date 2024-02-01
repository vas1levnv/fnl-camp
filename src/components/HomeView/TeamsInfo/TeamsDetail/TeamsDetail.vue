<template>
	<div class="teams-detail" ref="teams">
		<teams-item title="Первая группа" :teams="props.teamsFirst"/>
		<teams-item title="Вторая группа" :teams="props.teamsSecond"/>
	</div>
</template>

<script setup>
import TeamsItem from "@/components/HomeView/TeamsInfo/TeamsDetail/TeamsItem.vue";
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

const props = defineProps(['teamsFirst', 'teamsSecond'])
const store = useStore()

const teams = ref()

onMounted(() => {
	store.commit('addAnchors', {id: 5, name: 'Команды', link: teams.value})
})

</script>

<style scoped lang="scss">
.teams-detail {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 6rem;
}

@media (max-width: 1400px) {
	.teams-detail {
		gap: 2rem;
	}
}

@media (max-width: 1200px) {
	.teams-detail {
		gap: 2rem;
		grid-template-columns: 1fr;
	}
}

</style>