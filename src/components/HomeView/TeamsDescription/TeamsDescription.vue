<template>
	<div class="descr">
		<div class="container">
			<div class="descr-wrapper">
				<div class="descr-list">
					<teams-description-item v-for="item in teams" :key="item.id" :item="item"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {useStore} from "vuex";
import TeamsDescriptionItem from "@/components/HomeView/TeamsDescription/TeamsDescriptionItem.vue";

const store = useStore()
const teams = store.state.teams


</script>

<style lang="scss" scoped>
.descr {
	&-wrapper {
		padding: 6.25rem 0;
	}
}

</style>