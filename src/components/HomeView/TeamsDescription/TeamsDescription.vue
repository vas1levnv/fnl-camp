<template>
	<div class="descr">
		<div class="container">
			<div class="descr-wrapper">
				<div class="descr-list">
					<div class="descr-item" v-for="item in teams" :key="item.id">
						<div class="descr-item__img"><img :src="item.src" alt="item.name"></div>
						<div class="descr-item__content">
							<div class="descr-item__name">{{ item.name }}</div>
							<div class="descr-item__year"><span class="orange-text">Год основания</span> - {{
									item.year
								}}
							</div>
							<div class="descr-item__championship" v-if="item.championship"><span class="orange-text">Чемпионат</span>
								- {{ item?.championship }}
							</div>
							<div>{{ item.description }}</div>
							<div class="descr-item__achievements">
								<div class="orange-text">Достижения</div>
								<ul>
									<li v-for="el in item.achievements" :key="el.id">
										{{ el.text }}
									</li>
								</ul>
							</div>
							<div class="descr-item__persons">
								<div class="orange-text">Главные лица</div>
								<div class="descr-item__persons-list">
									<div class="descr-item__persons-item" v-for="person in item.persons" :key="person.id">
										<img :src="person.src" :alt="person.name">
										<div class="descr-item__persons-name">{{ person.name }}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {useStore} from "vuex";

const store = useStore()
const teams = store.state.teams
</script>

<style lang="scss" scoped>
.descr {
	&-wrapper {
		padding: 6.25rem 0;
	}
	
	&-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 6.5rem;
		font-weight: 500;
		font-size: 1.5rem;
		gap: 5rem;
		
		&__img {
			img {
				width: 100%;
			}
		}
		
		&:nth-child(2n) {
			flex-direction: row-reverse;
		}
		
		&__content {
			width: 50%;
			display: flex;
			flex-direction: column;
			gap: 1.25rem;
		}
		
		&__name {
			font-size: 2.25rem;
		}
		
		&__achievements {
			ul {
				margin-top: 1.25rem;
				padding-left: 1.25rem;
			}
		}
		
		&__persons {
			&-list {
				display: flex;
				gap: 1.25rem;
				margin-top: 1.25rem;
			}
			
			&-name {
				margin: 0.5rem auto 0;
				width: 100px;
				text-align: center;
				font-size: 1rem;
			}
		}
	}
}


@media (max-width: 1200px) {
	.descr {
		&-item {
			font-size: 1rem;
		}
	}
}

@media (max-width: 1024px) {
	.descr {
		&-item {
			flex-direction: column-reverse;
			gap: 2rem;
			margin-bottom: 2rem;
			
			&:nth-child(2n) {
				flex-direction: column-reverse;
			}
			
			&__img {
				max-width: 300px;
			}
			
			&__content {
				width: 100%;
			}
		}
	}
}

@media (max-width: 768px) {
	.descr {
		&-item {
			&__persons {
				&-list {
					display: flex;
					flex-wrap: wrap;
					gap: 1.25rem;
					margin-top: 1.25rem;
				}
			}
		}
	}
}

</style>