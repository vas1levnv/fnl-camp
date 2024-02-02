document.addEventListener("DOMContentLoaded", () => {
	
	// секции
	const btnsList = document.querySelectorAll('.teams-links-item')
	const anchorsList = document.querySelectorAll('[data-anchors]')
	btnsList.forEach(el => el.addEventListener('click', function() {
		anchorsList.forEach(item => {
			if(this.dataset.src === item.dataset.anchors) {
				item.scrollIntoView({behavior: "smooth"})
			}
		})
	}))
	
	// команды
	
	const btnsTeamsList = document.querySelectorAll('[data-teams]')
	const teamsList = document.querySelectorAll('[data-detail]')
	btnsTeamsList.forEach(el => el.addEventListener('click', function() {
		teamsList.forEach(item => {
			if(this.dataset.teams === item.dataset.detail) {
				item.scrollIntoView({behavior: "smooth"})
			}
		})
	}))
	
	document.querySelector('.move-to-top').addEventListener('click', function() {
		window.scrollTo({top: 0, behavior: 'smooth'});
	})
})