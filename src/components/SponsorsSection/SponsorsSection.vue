<template>
	<div class="sponsors-section">
		<div class="container">
			<div class="sponsors-section-wrapper">
				<h2>Спонсоры турнира</h2>
				<div class="sponsors-section-list">
					<div class="sponsors-section-item" v-for="item in 5" :key="item">
						<fnl-icon/>
						<div>ФНЛ</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import FnlIcon from "@/components/icons/FnlIcon.vue";

export default {
	name: "SponsorsSection",
	components: {FnlIcon}
}
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
		grid-template-columns: repeat(5, 1fr);
		padding: 5rem 0;
		gap: 2rem;
	}
	
	&-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2.5rem;
	}
}

@media (max-width: 768px) {
	.sponsors-section {
		h2{
			font-size: 2rem;
		}
		
		&-list {
			grid-template-columns: repeat(2, 1fr);
			padding: 2rem 0 3rem;
		}
		
		&-item {
			&:last-child {
				grid-column: 1/3;
			}
		}
	}
}

</style>