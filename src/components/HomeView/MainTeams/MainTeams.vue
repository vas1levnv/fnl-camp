<template>
	<div class="teams">
		<div class="teams-bg">
			<img :src="banner" alt="camp">
		</div>
		<div class="teams-wrapper">
			<div class="container">
				<div class="teams-list">
					<div class="teams-list__left">
						<div class="teams-img" v-for="item in teamFirst" :key="item.id">
							<img :src="item.src" :alt="item.name"></div>
					</div>
					<div class="teams-icon">
						<kinopoisk-icon/>
					</div>
					<div class="teams-list__right">
						<div class="teams-img" v-for="item in teamsSecond" :key="item.id">
							<img :src="item.src" :alt="item.name"></div>
					</div>
				</div>
				<div class="teams-text">
					Спустя 4 года Футбольная Национальная Лига возобновляет проведение зимнего Кубка ФНЛ.
					<br>
					<br>
					Зимний Кубок ФНЛ проводился на протяжении 9 лет, начиная с 2012 года, где победителем стал ФК
					“Урал”. Кстати, команда из Екатеринбурга чаще всех становилась чемпионом турнира: в 2012, 2013 и
					2018 годах.
				</div>
				<div class="teams-links">
					<custom-button class="teams-links-item" @click="scrollToElement(item)" v-for="item in store.state.anchors" :key="item.id">
						{{ item.name }}
					</custom-button>
				</div>
			</div>
		</div>
	</div>

</template>

<script setup>
import {useStore} from "vuex";
import banner from '@/assets/img/homeBg.png'
import KinopoiskIcon from "@/components/icons/KinopoiskIcon.vue";
import CustomButton from "@/components/UI/CustomButton.vue";

const store = useStore()
const teamFirst = store.state.teamsFirst
const teamsSecond = store.state.teamsSecond

const scrollToElement = (item) => {
	item.link.scrollIntoView({behavior: "smooth"});
}

</script>

<style scoped lang="scss">
.teams {
	display: flex;
	flex-direction: column;
	position: relative;
	color: white;
	
	&-bg {
		margin-bottom: -6px;
		width: 100%;
		
		img {
			max-width: 100%;
			width: 100%;
		}
	}
	
	&-text {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 500;
		max-width: 850px;
		margin: 0 auto 5rem;
	}
	
	//&:before {
	//	content: '';
	//	position: absolute;
	//	top: 0;
	//	left: 0;
	//	width: 100%;
	//	height: 100%;
	//	background: linear-gradient(0deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.00) 53.81%), linear-gradient(0deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.48) 100%);
	//}
	
	&-wrapper {
		position: relative;
		width: 100%;
		background: var(--orange);
		padding-bottom: 6rem;
	}
	
	&-list {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 7.5rem 0 2rem;
		
		&__left, &__right {
			display: flex;
			justify-content: space-between;
			gap: 2rem;
			width: 30%;
			
			img {
				width: 100%;
			}
		}
	}
	
	&-icon {
		position: absolute;
		top: -30%;
		left: 50%;
		transform: translateX(-50%);
		width: 20vw;
		
		svg {
			width: 100%;
		}
	}
	
	&-text {
		text-align: center;
		max-width: 850px;
		margin: 5rem auto 5rem;
	}
	
	&-links {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		
		gap: 2.5rem;
		row-gap: 1rem;
		
		&-item {
			line-height: 100%;
			width: min-content;
			white-space: normal;
			background: white;
			color: var(--orange);
		}
	}
}


@media (max-width: 1440px) {
	.teams {
		background-position: top;
		
		&-icon {
			top: -20%;
			width: 200px;
		}
		
		&-links {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			
			&-item {
				width: auto;
			}
		}
	}
	
}

@media (max-width: 1024px) {
	.teams {
		&-list {
			flex-direction: column;
			padding: 10rem 0 2rem;
			
			&__left, &__right {
				width: 100%;
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				
				img {
					width: auto;
					max-width: 100%;
					object-fit: contain;
					max-height: 100%;
				}
				
			}
			
			&__left {
				margin-bottom: 2rem;
			}
		}
		
		&-text {
			font-size: 1.5rem;
		}
		
		&-img {
			display: flex;
			justify-content: center;
			max-height: 100px;
		}
		
		&-icon {
			top: -23%;
			width: 200px;
		}
		
		//&-bg {
		//	max-height: 60vh;
		//	min-height: 300px;
		//}
	}
}

@media (max-width: 768px) {
	.teams {
		&-wrapper {
			padding-bottom: 3rem;
		}
		
		&-list {
			padding-top: 7.5rem;
		}
		
		&-icon {
			top: -250px;
			width: 150px;
		}
		
		&-text {
			font-size: 1rem;
			margin: 2rem 0;
		}
		
		&-links {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}
	}
}

@media (max-width: 576px) {
	.teams {
		&-list {
			padding: 5rem 0 2rem;
			
			&__left, &__right {
				grid-template-columns: 3fr 4fr 3fr;
			}
		}
		
		&-bg {
			height: 250px;
			
			img {
				height: 100%;
				width: auto;
				object-fit: cover;
			}
		}
		
		&-img {
			max-height: 70px;
		}
		
		&-icon {
			top: -275px;
			width: 125px;
		}
		
		&-links {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
		}
		
	}
}
</style>