<template>
	<div class="calendar-section">
		<h2>Расписание игр</h2>
		<table>
			<tr>
				<th></th>
				<th>Дата</th>
				<th>Время</th>
				<th></th>
			</tr>
			<tr v-for="item in games" :key="item.id">
				<td>
					<div>
						<div><img :src="item.teamHome.src" :alt="item.teamHome.name"></div>
						<div>{{ item.teamHome.name }}</div>
					</div>
				</td>
				<td>{{ item.date }}</td>
				<td>{{ item.time }}</td>
				<td>
					<div>
						<div>{{ item.teamGuest.name }}</div>
						<div><img :src="item.teamGuest.src" :alt="item.teamGuest.name"></div>
					</div>
				</td>
			</tr>
		</table>
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
				background: var(--linear-gradient);
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
			
			&:first-child {
				text-align: start;
				padding-left: 1.5rem;
			}
			
			&:last-child {
				text-align: end;
				padding-right: 1.5rem;
			}
		}
	}
}


@media (max-width: 1024px) {
	.calendar-section {
		table {
			td {
				font-size: 1.25rem;
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