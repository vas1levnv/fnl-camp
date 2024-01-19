<template>
	<footer class="footer" :style="{'background-image': 'url(' + footerBg + ')'}">
		<div class="container">
			<div class="footer-wrapper">

			</div>
		</div>
	</footer>
</template>

<script>
import footerBg from '@/assets/img/footer-bg.png'

export default {
	name: "FooterPage",
	data() {
		return {
			footerBg: footerBg,
		}
	}
}
</script>

<style scoped lang="scss">
.footer {
	height: 40vh;
	min-height: 380px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: top;
}
</style>