<template>
	<div class="descr" ref="descr">
		<div class="container">
			<div class="descr-wrapper">
				<div class="descr-list">
					<teams-description-item v-for="item in teams" :key="item.id" :item="item"/>
				</div>
			</div>
		</div>
		<div class="descr-circle">
			<circle-bg/>
		</div>
	</div>
</template>

<script setup>
import {useStore} from "vuex";
import TeamsDescriptionItem from "@/components/HomeView/TeamsDescription/TeamsDescriptionItem.vue";
import CircleBg from "@/components/icons/circle-bg.vue";
import {onMounted, ref} from "vue";

const store = useStore()
const teams = store.state.teams
const descr = ref()

onMounted(() => {
	store.commit('addAnchors', {id: 5, name: 'Команды', link: descr.value})
})

</script>

<style lang="scss" scoped>
.descr {
	position: relative;
	
	&-wrapper {
		padding: 6.25rem 0;
	}
	
	&-circle {
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 100%;
		transform: rotate(180deg);
	}
}

@media (max-width: 1024px) {
	.descr {
		&-wrapper {
			padding: 4rem 0 8rem;
		}
		
		&-circle {
			bottom: -5px;
			height: 100px;
			
			svg {
				height: 100%;
			}
		}
	}
}

@media (max-width: 768px) {
	.descr {
		&-wrapper {
			padding: 2rem 0 6rem;
		}
	}
}

</style>