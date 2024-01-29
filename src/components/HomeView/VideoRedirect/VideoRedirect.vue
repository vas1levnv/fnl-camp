<template>
	<a href="#" class="video" :style="{ 'background-image': 'url(' + bg + ')' }">
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
	
	h3 {
		margin-top: 7rem;
		color: white;
		font-size: 2.5rem;
	}
	
	&-text {
		margin-bottom: 0.75rem;
		color: white;
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