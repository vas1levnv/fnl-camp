<template>
	<a href="#" class="video" :style="{ 'background-image': 'url(' + bg + ')' }">
		<div class="video-circle">
			<circle-bg/>
		</div>
		<play-btn-icon/>
		<h3>Трансляция в прямом эфире</h3>
		<div class="video-text">смотреть на</div>
		<img :src="icon" alt="kinopoisk-icon">
	</a>
</template>

<script setup>
import bg from '@/assets/img/kinopoisk-bg.png'
import icon from '@/assets/img/kinopoisk-color.png'
import PlayBtnIcon from "@/components/icons/PlayBtnIcon.vue";
import CircleBg from "@/components/icons/circle-bg.vue";
</script>

<style scoped lang="scss">
.video {
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	min-height: 800px;
	background-repeat: no-repeat;
	background-size: cover;
	text-align: center;
	padding: 0 2rem;
	background-position: center;
	position: relative;
	overflow: hidden;
	
	h3 {
		margin-top: 7rem;
		color: white;
		font-size: 2.5rem;
	}
	
	&-text {
		margin-bottom: 0.75rem;
		color: white;
	}
	
	&-circle {
		position: absolute;
		top: -1%;
		left: 0;
		width: 100%;
	}
}

@media (max-width: 1024px) {
	.video {
		&-circle {
			top: -0.5%;
			height: 15%;
			
			svg {
				height: 100%;
			}
		}
	}
}

@media (max-width: 768px) {
	.video {
		h3 {
			font-size: 2rem;
			max-width: 100%;
			margin: 3rem 0 1rem;
		}
	}
}
</style>