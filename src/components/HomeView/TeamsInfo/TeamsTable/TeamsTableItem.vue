<template>
	<table class="teams-table-content">
		<tr>
			<th>
				{{ props.title }}
			</th>
			<th>И</th>
			<th>В</th>
			<th>Н</th>
			<th>П</th>
			<th>Г</th>
			<th>О</th>
		</tr>
		<tr v-for="item in props.teams" :key="item.id">
			<td>
				<div class="team-name">
					<img :class="{white: item.isWhite}" :src="item.src" :alt="item.name">
					<span>{{ item.name }}</span>
				</div>
			</td>
			<td>{{ item.stats.games }}</td>
			<td>{{ item.stats.win }}</td>
			<td>{{ item.stats.draw }}</td>
			<td>{{ item.stats.loose }}</td>
			<td>{{ item.stats.scores }}</td>
			<td>{{ item.stats.points }}</td>
		</tr>
	</table>
</template>

<script setup>

const props = defineProps(['title', 'teams'])

</script>

<style scoped lang="scss">

.teams-table-content {
	width: 100%;
	font-size: 1.5rem;
	text-align: center;
	border-collapse: collapse;
	max-width: 1200px;
	margin: 0 auto;
	color: white;
	
	img {
		width: 25px;
		height: 25px;
		object-fit: contain;
	}
	
	.white {
		filter: brightness(0) saturate(100%);
	}
	
	.team-name {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-align: start;
	}
	
	th {
		font-size: 1.875rem;
		
		&:first-child {
			text-align: start;
		}
	}
	
	th, td {
		padding: 0.5rem;
		
		&:first-child {
			padding-left: 5rem;
		}
		
		&:last-child {
			padding-right: 5rem;
		}
		
		&:not(:first-child) {
			width: 60px;
		}
		
	}
	
	
	tr {
		&:nth-child(even) {
			background: var(--orange);
		}
		
		&:nth-child(odd) {
			background: none;
			color: black;
		}
		
		&:first-child {
			background: none;
		}
	}
}

@media (max-width: 1024px) {
	.teams-table-content {
		th {
			font-size: 1.5rem;
		}
		
		td {
			font-size: 1rem;
		}
		
		th, td {
			padding: 0.25rem;
			
			&:first-child {
				padding-left: 2.5rem;
			}
			
			&:last-child {
				padding-right: 2.5rem;
			}
			
			&:not(:first-child) {
				width: 40px;
			}
			
		}
	}
}

@media (max-width: 576px) {
	.teams-table-content {
		th {
			font-size: 1rem;
		}
		
		th, td {
			
			&:first-child {
				padding-left: .5rem;
			}
			
			&:last-child {
				padding-right: .5rem;
			}
			
			&:not(:first-child) {
				width: 25px;
			}
			
		}
	}
}
</style>