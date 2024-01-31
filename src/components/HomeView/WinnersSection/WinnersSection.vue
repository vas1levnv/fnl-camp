<template>
	<div class="winners">
		<div class="container">
			<div class="winners-wrapper">
				<h2>Победители прошлых лет</h2>
				<div class="winners-teams">
					<div class="winners-item" :key="item.id" v-for="item in teams">
						<div class="winners-item__icon">
							<place-icon></place-icon>
							<div class="winners-item__icon-place">{{ item.places }}</div>
						</div>
						<div class="winners-item__years">{{ item.years }}</div>
						<div class="winners-item__name">{{ item.name }}</div>
						<div class="winners-item__img"><img :src="item.src" alt="item.name"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import PlaceIcon from "@/components/icons/PlaceIcon.vue";
import {useStore} from "vuex";

const store = useStore()
const teams = store.state.winnersTeam

</script>

<style scoped lang="scss">
.winners {
	background: var(--linear-gradient);
	
	&-wrapper {
		padding: 5rem 0 10rem;
		color: white;
	}
	
	h2 {
		text-align: center;
		color: white;
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
		
		&__icon {
			position: relative;
			
			&-place {
				position: absolute;
				bottom: 5%;
				left: -15%;
				font-size: 4.5rem;
				font-weight: 700;
				line-height: 100%;
			}
			
			svg {
				height: 120px;
			}
		}
		
		&__years {
			font-size: 0.875rem;
			font-weight: 700;
			margin: 1.5rem 0 1rem;
			white-space: nowrap;
		}
		
		&__name {
			font-size: 1.25rem;
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
		
		h2 {
			font-size: 2rem;
		}
		
		&-item {
			
			&__name {
				margin-bottom: 1.5rem;
			}
			
			&:last-child {
				grid-column: 1/3;
			}
		}
		
	}
}

</style>