<template>
	<div class="map" ref="stadium" :style="{ 'background-image': 'url(' + map + ')' }">
		<div class="map-content">
			<div>
				<location-icon/>
			</div>
			<div>
				Титаник Мардан, <br>
				Белек, Турция
			</div>
		</div>
	</div>
</template>

<script setup>
import map from '@/assets/img/map.png'
import LocationIcon from "@/components/icons/location-icon.vue";

import {onMounted, ref} from "vue";
import {useStore} from "vuex";

const store = useStore()
const stadium = ref()

onMounted(() => {
	store.commit('addAnchors', {id: 6, name: 'Стадион', link: stadium.value})
})
</script>

<style scoped lang="scss">
.map {
	max-height: 420px;
	min-height: 250px;
	height: 20vw;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;
	
	&-content {
		position: absolute;
		top: 50%;
		right: 20%;
		color: white;
		font-weight: 700;
		font-size: 1.75rem;
		display: flex;
		align-items: center;
		gap: 2rem;
		transform: translateY(-50%);
		
		svg {
			height: 70px;
		}
	}
}

@media (max-width: 1024px) {
	.map {
		&-content {
			right: 10%;
			gap: 1rem;
			font-size: 1rem;
			svg {
				height: 35px;
			}
		}
	}
}

@media (max-width: 768px) {
	.map {
		min-height: 200px;
	}
}
</style>