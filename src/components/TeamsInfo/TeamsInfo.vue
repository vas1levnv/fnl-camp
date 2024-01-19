<template>
	<div class="teams-info">
		<div class="container">
			<teams-detail/>
		</div>
	</div>
</template>

<script>
import TeamsDetail from "@/components/TeamsInfo/TeamsDetail/TeamsDetail.vue";

export default {
	name: "TeamsInfo",
	components: {TeamsDetail}
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