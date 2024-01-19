<template>
	<footer class="footer" :style="{'background-image': 'url(' + footerBg + ')'}">
		<div class="container">
			<div class="footer-wrapper">
				<a href="#" class="footer-logo">
					<fnl-icon/>
				</a>
				<div class="footer-list">
					<a href="#">
						<telegram-icon/>
					</a>
					<a href="#">
						<vk-icon/>
					</a>
					<a href="#">
						<youtube-icon/>
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import footerBg from '@/assets/img/footer-bg.png'
import FnlIcon from "@/components/icons/FnlIcon.vue";
import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import VkIcon from "@/components/icons/VkIcon.vue";
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";

export default {
	name: "FooterPage",
	components: {YoutubeIcon, VkIcon, TelegramIcon, FnlIcon},
	data() {
		return {
			footerBg: footerBg,
		}
	}
}
</script>

<style scoped lang="scss">
.footer {
	background-size: cover;
	background-repeat: no-repeat;
	background-position: top;
	
	&-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: end;
		height: 40vh;
		min-height: 380px;
		padding: 5rem 0;
	}
	
	&-logo{
		width: 56px;
		svg{
			width: 100%;
			height: 100%;
		}
	}
	
	&-list {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
}


@media (max-width: 768px) {
	.footer{
		&-wrapper {
			height: 20vh;
			min-height: 200px;
			padding: 2rem 0;
		}
	}
}
</style>