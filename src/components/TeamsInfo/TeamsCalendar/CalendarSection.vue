<template>
	<div class="calendar-section">
		<h2>Расписание игр</h2>
		<div class="calendar-section__data">Дата</div>
		<table>
			<tr v-for="item in games" :key="item.id">
				<td>{{ item.teamHome }}</td>
				<td>{{ item.time }}</td>
				<td>{{ item.teamGuest }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: "CalendarSection",
	data() {
		return {
			games: [
				{id: 1, teamHome: 'Енисей', time: '01.02.2024', teamGuest: 'Спартак-2'},
				{id: 1, teamHome: 'Родина', time: '01.02.2024', teamGuest: 'Амкал'},
				{id: 1, teamHome: 'Енисей', time: '01.02.2024', teamGuest: 'Broke Boys'},
				{id: 1, teamHome: 'Родина', time: '01.02.2024', teamGuest: 'Амкал'},
				{id: 1, teamHome: 'Родина', time: '01.02.2024', teamGuest: 'Broke Boys'},
				{id: 1, teamHome: 'Родина', time: '01.02.2024', teamGuest: 'Амкал'},
				{id: 1, teamHome: '1 место, 1 группа', time: '01.02.2024', teamGuest: '1 место, 2 группа'},
				{id: 1, teamHome: '2 место, 1 группа', time: '01.02.2024', teamGuest: '2 место, 2 группа'},
			]
		}
	}
}
</script>

<style scoped lang="scss">
.calendar-section {
	margin-top: 5rem;
	text-align: center;
	
	h2 {
		
		margin-bottom: 1.25rem;
	}
	
	&__data{
		margin-bottom: 0.5rem;
		font-size: 2.25rem;
		font-weight: 500;
	}
	
	table {
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		border-collapse: collapse;
		
		
		tr {
			&:nth-child(odd) {
				background: var(--linear-gradient);
				color: white;
			}
			
			&:nth-child(even) {
				
			}
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
		table{
			td{
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
		
		&__data{
			font-size: 1.5rem;
		}
		
		table{
			td{
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