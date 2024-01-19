<template>
	<div class="winners">
		<div class="container">
			<div class="winners-wrapper">
				<div class="winners-text">
					Спустя 4 года Футбольная Национальная Лига возобновляет проведение зимнего Кубка ФНЛ.
					<br>
					<br>
					Зимний Кубок ФНЛ проводился на протяжении 9 лет, начиная с 2012 года, где победителем стал ФК
					“Урал”. Кстати, команда из Екатеринбурга чаще всех становилась чемпионом турнира: в 2012, 2013 и
					2018 годах.
				</div>

				<h2>Победители прошлых лет</h2>
				<div class="winners-teams">
					<div class="winners-item" :key="item.id" v-for="item in teams">
						<place-many-icon v-if="item.name === 'Урал'"></place-many-icon>
						<place-icon v-else></place-icon>
						<div class="winners-item__years">{{ item.years }}</div>
						<div class="winners-item__name">{{ item.name }}</div>
						<div class="winners-item__img"><img :src="item.src" alt="item.name"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ural from '@/assets/img/ural.png'
import luch from '@/assets/img/luch.png'
import volgar from '@/assets/img/volgar.png'
import orenburg from '@/assets/img/orenburg.png'
import fakel from '@/assets/img/fakel.png'
import avangard from '@/assets/img/avangard.png'
import khimki from '@/assets/img/khimki.png'
import PlaceManyIcon from "@/components/icons/PlaceManyIcon.vue";
import PlaceIcon from "@/components/icons/PlaceIcon.vue";

export default {
	name: "WinnersSection",
	components: {PlaceIcon, PlaceManyIcon},
	data() {
		return {
			teams: [
				{id: 1, years: '2012, 2013, 2018', name: 'Урал', src: ural},
				{id: 2, years: '2014', name: 'Луч-Энергия', src: luch},
				{id: 3, years: '2015', name: 'Волгарь', src: volgar},
				{id: 4, years: '2016', name: 'Оренбург', src: orenburg},
				{id: 5, years: '2017', name: 'Факел', src: fakel},
				{id: 6, years: '2019', name: 'Авангард', src: avangard},
				{id: 7, years: '2020', name: 'Химки', src: khimki},
			]
		}
	},
}
</script>

<style scoped lang="scss">
.winners {
	&-wrapper {
		padding: 5rem 0 10rem;
	}
	
	&-text {
		font-size: 2.25rem;
		font-weight: 500;
		margin-bottom: 5rem;
	}
	
	h2 {
		text-align: center;
	}
	
	&-teams {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 2rem;
		margin-top: 3.25rem;
	}
	
	&-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		
		svg {
			height: 85px;
		}
		
		&__years {
			font-size: 0.875rem;
			font-weight: 700;
			margin: 1.5rem 0 1rem;
			white-space: nowrap;
		}
		
		&__name {
			font-size: 1.25rem;
			color: var(--orange);
			font-weight: 700;
			margin-bottom: 2.75rem;
			white-space: nowrap;
		}
		
		img {
			height: 9rem;
		}
	}
}

@media (max-width: 1440px) {
	.winners {
		&-teams {
			grid-template-columns: repeat(4, 1fr);
			row-gap: 4rem;
		}
	}
}

@media (max-width: 1024px) {
	.winners {
		
		&-wrapper {
			padding: 3rem 0 5rem;
		}
		
		&-text {
			font-size: 1.5rem;
		}
		
		&-teams {
			grid-template-columns: repeat(4, 1fr);
			row-gap: 4rem;
		}
	}
}

@media (max-width: 768px) {
	.winners {
		&-teams {
			grid-template-columns: repeat(2, 1fr);
			row-gap: 2rem;
		}
		
		h2{
			font-size: 2rem;
		}
		
		&-item {
			&:last-child {
				grid-column: 1/3;
			}
		}
	}
}

</style>