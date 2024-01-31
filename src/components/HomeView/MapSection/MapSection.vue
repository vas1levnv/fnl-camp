<template>
	<div class="map" :style="{ 'background-image': 'url(' + map + ')' }"></div>
</template>

<script setup>
import map from '@/assets/img/map.png'
</script>

<style scoped lang="scss">
.map {
	max-height: 420px;
	min-height: 250px;
	height: 20vw;
	background-position: center;
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