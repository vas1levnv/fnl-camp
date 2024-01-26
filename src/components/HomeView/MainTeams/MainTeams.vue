<template>
	<div class="teams" :style="{ 'background-image': 'url(' + banner + ')' }">
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
			</div>
		</div>
	</div>

</template>

<script setup>
import {useStore} from "vuex";
import banner from '@/assets/img/main-stadium.png'
import KinopoiskIcon from "@/components/icons/KinopoiskIcon.vue";

const store = useStore()
const teamFirst = store.state.teamsFirst
const teamsSecond = store.state.teamsSecond

</script>

<style scoped lang="scss">
.teams {
	height: 100vh;
	min-height: 800px;
	display: flex;
	align-items: flex-end;
	background-repeat: no-repeat;
	background-position: bottom;
	background-size: cover;
	
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.00) 53.81%), linear-gradient(0deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.48) 100%);
	}
	
	&-wrapper {
		position: relative;
		width: 100%;
		background: var(--linear-gradient);
		
	}
	
	&-list {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 7.5rem 0;
		
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
		top: -80%;
		left: 50%;
		transform: translateX(-50%);
		width: 20vw;
		
		svg {
			width: 100%;
		}
	}
}


@media (max-width: 1024px) {
	.teams {
		&-list {
			flex-direction: column;
			padding: 7.5rem 0 5rem;
			
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
		
		&-img {
			display: flex;
			justify-content: center;
			max-height: 100px;
		}
		
		&-icon {
			top: -70%;
			width: 200px;
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
		
		&-img {
			max-height: 70px;
		}
		
		&-icon {
			top: -105%;
			width: 150px;
		}
	}
}
</style>