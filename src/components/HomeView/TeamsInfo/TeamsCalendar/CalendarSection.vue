<template>
	<div class="calendar-section">
		<h2>Расписание игр</h2>
		<div class="calendar-section-wrapper">
			<table>
				<tr>
					<th></th>
					<th></th>
					<th>Дата</th>
					<th>Время</th>
				</tr>
				<tr v-for="item in games" :key="item.id">
					<td>
						<div class="calendar-section__team">
							<div class="calendar-section__team-img" v-if="item.teamHome.src" :class="{white: item.teamHome.isWhite}">
								<img :src="item.teamHome.src" :alt="item.teamHome.name">
							</div>
							<div>{{ item.teamHome.name }}</div>
						</div>
					</td>
					<td>
						<div class="calendar-section__team">
							<div class="calendar-section__team-img" v-if="item.teamGuest.src" :class="{white: item.teamGuest.isWhite}">
								<img :src="item.teamGuest.src" :alt="item.teamGuest.name">
							</div>
							<div>{{ item.teamGuest.name }}</div>
						</div>
					</td>
					<td>{{ item.date }}</td>
					<td>{{ item.time }}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script setup>
import {useStore} from "vuex";

const store = useStore()
const games = store.state.games

</script>

<style scoped lang="scss">
.calendar-section {
	margin-top: 5rem;
	text-align: center;
	
	&-wrapper {
		max-width: 100%;
		overflow-x: auto;
	}
	
	h2 {
		
		margin-bottom: 1.25rem;
	}
	
	table {
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		border-collapse: collapse;
		
		
		tr {
			&:nth-child(odd) {
				
			}
			
			&:nth-child(even) {
				background: var(--orange);
				color: white;
			}
		}
		
		th {
			font-size: 2.25rem;
			font-weight: 500;
			padding-bottom: 0.5rem;
		}
		
		td {
			text-align: center;
			font-size: 1.875rem;
			font-weight: 500;
			padding: 0.5rem;
			
			&:first-child, &:nth-child(2) {
				text-align: start;
				padding-left: 1.5rem;
			}
			
			&:last-child {
				//text-align: end;
				padding-right: 1.5rem;
				
				//.calendar-section__team {
				//	justify-content: flex-end;
				//}
			}
		}
	}
	
	&__team {
		display: flex;
		align-items: center;
		gap: 1rem;
		
		&-img {
			display: flex;
			align-items: center;
			width: 40px;
			height: 40px;
			
			img {
				max-width: 100%;
				max-height: 100%;
			}
		}
		
		& .white {
			filter: brightness(0) saturate(100%);
		}
	}
}


@media (max-width: 1024px) {
	.calendar-section {
		table {
			
			th {
				font-size: 1.25rem;
				padding-bottom: 0.25rem;
			}
			
			td {
				font-size: 1rem;
			}
		}
	}
}

@media (max-width: 768px) {
	.calendar-section {
		h2 {
			font-size: 2rem;
			margin-bottom: 1rem;
		}
		
		&__data {
			font-size: 1.5rem;
		}
		
		table {
			
			th {
				font-size: 1rem;
			}
			
			td {
				font-size: 1rem;
				
				&:first-child {
					padding-left: .5rem;
				}
				
				&:last-child {
					padding-right: .5rem;
				}
			}
		}
	}
}
</style>