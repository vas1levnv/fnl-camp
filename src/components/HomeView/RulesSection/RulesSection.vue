<template>
	<div class="rules">
		<div class="container">
			<div class="rules-wrapper">
				<h2>Правила</h2>
				<div class="rules-list">
					<div class="rules-item" v-for="item in store.state.rules" :key="item.id">
						<div class="rules-item__title">{{ item.title }}</div>
						<div class="rules-item__body">{{ item.body }}</div>
					</div>
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
.rules {
	padding: 7.5rem 0 3rem;
	
	h2 {
		text-align: center;
	}
	
	&-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		position: relative;
		top: -5rem
	}
	
	&-item {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		background: var(--linear-gradient);
		border-radius: 2rem;
		color: white;
		padding: 3rem;
		gap: 1.5rem;
		
		&:nth-child(2), &:nth-child(5) {
			position: relative;
			top: 6rem;
		}
		
		&__title {
			font-size: 2.25rem;
			font-weight: 700;
		}
		
		&__body {
			font-size: 1.25rem;
		}
	}
}

@media (max-width: 1440px) {
	.rules {
		&-list {
			gap: 2rem;
		}
		
		&-item {
			gap: 0.5rem;
			padding: 2rem;
			
			&__title {
				font-size: 1.5rem;
				margin-bottom: 0.5rem;
			}
			
			&__body {
				font-size: 1rem;
			}
		}
	}
}

@media (max-width: 1200px) {
	.rules {
		h2 {
			font-size: 2.5rem;
		}
		
		&-list {
			gap: 1rem;
		}
		
		&-item {
			&__title {
				font-size: 1.25rem;
			}
		}
	}
}

@media (max-width: 1024px) {
	.rules {
		&-list {
			grid-template-columns: 1fr 1fr;
			top: 0;
			margin-top: 2rem;
		}
		
		&-item {
			&__title {
				font-size: 1.25rem;
			}
			
			&:nth-child(2), &:nth-child(5) {
				top: 0;
			}
		}
	}
}

@media (max-width: 768px) {
	.rules {
		
		padding: 2rem 0;
		
		&-list {
			grid-template-columns: 1fr;
			top: 0;
			margin-top: 2rem;
		}
		
		&-item {
			&__title {
				font-size: 1.125rem;
			}
		}
		
	}
}

</style>