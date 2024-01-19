<template>
	<div class="teams-detail">
		<teams-item title="Первая группа" :teams="teamsFirst"/>
		<teams-item title="Вторая группа" :teams="teamsSecond"/>
	</div>
</template>

<script>
import enisei from '@/assets/img/Enisei.png'
import spartak from '@/assets/img/spartak.png'
import bb from '@/assets/img/bb.png'
import rodina from '@/assets/img/rodina.png'
import amkal from '@/assets/img/Amkal.png'
import petropavl from '@/assets/img/petropavl.png'
import TeamsItem from "@/components/TeamsInfo/TeamsDetail/TeamsItem.vue";

export default {
	name: "TeamsDetail",
	components: {TeamsItem},
	data() {
		return {
			teamsFirst: [
				{id: 1, name: 'Енисей', src: enisei, link: '#', isWhite: false},
				{id: 2, name: 'Спартак-2', src: spartak, link: '#', isWhite: false},
				{id: 3, name: 'Broke Boys', src: bb, link: '#', isWhite: true}
			],
			teamsSecond: [
				{id: 1, name: 'Родина', src: rodina, link: '#', isWhite: false},
				{id: 2, name: 'Амкал', src: amkal, link: '#', isWhite: true},
				{id: 3, name: 'Кызыл-Жар', src: petropavl, link: '#', isWhite: false}
			],
		}
	}
}
</script>

<style scoped lang="scss">
.teams-detail {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 3rem;
}

@media (max-width: 1024px) {
	.teams-detail {
		grid-template-columns: 1fr;
		gap: 2rem;
	}
}
</style>