<template>
	<div class="map" :style="{ 'background-image': 'url(' + map + ')' }"></div>
</template>

<script>
import map from '@/assets/img/map.png'

export default {
	name: "MapSection",
	data() {
		return {
			map: map
		}
	}
}
</script>

<style scoped lang="scss">
.map {
	max-height: 420px;
	min-height: 250px;
	height: 25vw;
	background-position: right;
	background-size: cover;
	background-repeat: no-repeat;
}

@media (max-width: 768px) {
	.map{
		background-position: 75% 50%;
		min-height: 200px;
	}
}
</style>