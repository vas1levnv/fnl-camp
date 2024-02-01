<template>
	<div class="sponsors-section">
		<div class="container">
			<div class="sponsors-section-wrapper">
				<h2>Спонсоры турнира</h2>
				<div class="sponsors-section-list">
					<a :href="item.link" target="_blank" class="sponsors-section-item" v-for="item in store.state.sponsors" :key="item.id">
						<div class="sponsors-section-item__img"><img :src="item.src" alt="item.text"></div>
						<div>{{ item.text }}</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {useStore} from "vuex";

const store = useStore()

</script>

<style scoped lang="scss">
.sponsors-section {
	font-size: 2.25rem;
	font-weight: 500;
	
	h2 {
		text-align: center;
	}
	
	&-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 5rem 0;
		gap: 2rem;
	}
	
	&-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2.5rem;
		text-align: center;
		
		&__img {
			display: flex;
			align-items: center;
			height: 110px;
			
			img {
				max-width: 100%;
			}
		}
	}
}

@media (max-width: 1024px) {
	.sponsors-section {
		font-size: 1.5rem;
		
		h2 {
			font-size: 2rem;
		}
		
		&-list {
			grid-template-columns: 1fr;
			padding: 2rem 0 3rem;
		}
		
		&-item {
			gap: 1rem;
		}
	}
}

</style>