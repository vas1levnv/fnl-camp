<template>
	<div class="about-stadium" ref="stadium">
		<div class="container">
			<div class="about-stadium-wrapper">
				<div class="about-stadium__title">О стадионе</div>
				<div>Семь раз Кубок проводился на Кипре и два раза в Турции. В 2024 году Кубок пройдет на стадионе
					“Титаник Мардан” (г.Белек, Турция) с вместимостью 7400 зрителей.
					<br>
					<br>
					Стадион является тренировочным для клуба турецкой Суперлиги “Антальяспора”, а еще 16 октября 2023
					года сборная России проводила здесь товарищеский матч со сборной Кении.
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

const store = useStore()
const stadium = ref()

onMounted(() => {
	store.commit('addAnchors', {id: 6, name: 'Стадион', link: stadium.value})
})
</script>

<style scoped lang="scss">
.about-stadium {
	padding: 6.25rem 0;
	font-weight: 500;
	font-size: 2.25rem;
	
	&-wrapper {
		max-width: 1400px;
		margin: 0 auto;
	}
	
	&__title {
		font-weight: 600;
		margin-bottom: 1.25rem;
	}
}

@media (max-width: 1024px) {
	.about-stadium {
		padding: 3.25rem 0;
		font-weight: 500;
		font-size: 1.25rem;
	}
}

</style>