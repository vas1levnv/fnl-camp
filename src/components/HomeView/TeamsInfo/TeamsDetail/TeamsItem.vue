<template>
	<div class="teams-detail-list">
		<h2 class="teams-detail__title">{{ props.title }}</h2>
		<div class="teams-detail-item" v-for="item in props.teams" :key="item.id">
			<div class="teams-detail-item__img" :class="{white: item.isWhite}">
				<img :src="item.src" :alt="item.name">
			</div>
			<div class="teams-detail-item__name">{{ item.name }}</div>
			<custom-button @click="scrollToElement(item)">О команде</custom-button>
		</div>
	</div>
</template>

<script setup>
import CustomButton from "@/components/UI/CustomButton.vue";

const props = defineProps(['title', 'teams'])

const scrollToElement = (item) => {
	item.link.scrollIntoView({behavior: "smooth"});
}

</script>

<style scoped lang="scss">
.teams-detail {
	&__title {
		margin-bottom: 2.5rem;
	}
	
	&-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.25rem;
		margin-bottom: 2rem;
		
		&__img {
			width: 125px;
			height: 125px;
			
			&.white {
				filter: brightness(0) saturate(100%);
			}
			
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
		
		&__name {
			flex: 1 1 0;
			font-size: 2.25rem;
			font-weight: 700;
		}
	}
}

@media (max-width: 1400px) {
	.teams-detail {
		&__title {
			font-size: 2.5rem;
			margin-bottom: 2.5rem;
		}
	}
}

@media (max-width: 1200px) {
	.teams-detail {
		&-item {
			&__name {
				font-size: 1.75rem;
			}
		}
	}
}

@media (max-width: 576px) {
	.teams-detail {
		&__title {
			font-size: 2rem;
			margin-bottom: 1.5rem;
		}
		
		&-item {
			margin-bottom: 1.5rem;
			
			&__img {
				width: 70px;
				height: 70px;
			}
			
			&__name {
				font-size: 1.25rem;
			}
		}
	}
}

@media (max-width: 375px) {
	.teams-detail {
		&-item {
			display: grid;
			grid-template-columns: auto 1fr;
			
			&__img {
				grid-row: 1/3;
			}
		}
	}
}

</style>