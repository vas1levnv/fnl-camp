<template>
	<a href="#" class="video" :style="{ 'background-image': 'url(' + bg + ')' }">
		<play-btn-icon/>
		<h3>Трансляция в прямом эфире</h3>
		<div class="video-text">смотреть на</div>
		<img :src="icon" alt="kinopoisk-icon">
	</a>
</template>

<script>
import bg from '@/assets/img/kinopoisk-bg.png'
import icon from '@/assets/img/kinopoisk-color.png'
import PlayBtnIcon from "@/components/icons/PlayBtnIcon.vue";

export default {
	name: "VideoRedirect",
	components: {PlayBtnIcon},
	data() {
		return {
			bg: bg,
			icon: icon
		}
	}
}
</script>

<style scoped lang="scss">
.video {
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	
	h3 {
		margin-top: 7rem;
		color: white;
		font-size: 2.5rem;
	}
	
	&-text {
		margin-bottom: 0.75rem;
	}
}
</style>