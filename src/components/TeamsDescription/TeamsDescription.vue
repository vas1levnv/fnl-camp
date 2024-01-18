<template>
	<div class="descr">
		<div class="container">
			<div class="descr-wrapper">
				<div class="descr-list">
					<div class="descr-item" v-for="item in teams" :key="item.id">
						<div class="descr-item__img"><img :src="item.src" alt="item.name"></div>
						<div class="descr-item__content">
							<div>{{ item.name }}</div>
							<div>Год основания - {{ item.year }}</div>
							<div v-if="item.championship">Чемпионат - {{ item?.championship }}</div>
							<div>{{ item.description }}</div>
							<div>
								<div>Достижения</div>
								<ul>
									<li v-for="el in item.achievements" :key="el.id">
										{{ el.text }}
									</li>
								</ul>
							</div>
							<div>
								<div>Главные лица</div>
								<div v-for="person in item.persons" :key="person.id">
									<img :src="person.src" :alt="person.name">
									<div>{{ person.name }}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import personTeam from '@/assets/img/personTeam.png'
import teamDesc1 from '@/assets/img/teamDesc1.png'
import teamDesc2 from '@/assets/img/teamDesc2.png'

export default {
	name: "TeamsDescription",
	data() {
		return {
			teams: [
				{
					id: 1,
					name: 'Родина',
					src: teamDesc1,
					year: '2015 год',
					description: 'По итогам первой части сезона «Родина» занимает 7 место в МЕЛБЕТ-Первой Лиге. В прошлом сезоне клуб принимал участие в стыковых матчах за выход в РПЛ против «Пари НН»',
					championship: 'МЕЛБЕТ-Первая Лига',
					achievements: [
						{
							id: 1,
							text: '5 место в первенстве МЕЛБЕТ-Первой Лиги сезона'
						},
						{
							id: 2,
							text: '2022/2023 и попадание в стыковые матчи за выход в РПЛ'
						}],
					persons: [
						{
							id: 1,
							src: personTeam,
							name: 'Максим Турищев'
						},
						{
							id: 2,
							src: personTeam,
							name: 'Иван Тимошенко'
						},
						{
							id: 3,
							src: personTeam,
							name: 'Руслан Фищенко'
						}
					],
				},
				{
					id: 2,
					name: 'Енисей',
					src: teamDesc2,
					year: '1937 год',
					description: 'По итогам первой части сезона «Енисей» занимает 10 место в МЕЛБЕТ-Первой Лиге. В прошлом сезоне клуб принимал участие в стыковых матчах за выход в РПЛ против «Факела». ',
					championship: 'МЕЛБЕТ-Первая Лига',
					achievements: [
						{
							id: 1,
							text: 'Выход в сезоне 2018/2019 в Российскую Премьер-Лигу'
						},
						{
							id: 2,
							text: 'Полуфиналист Кубка России сезона 2021/2022'
						},
					],
					persons: [
						{
							id: 1,
							src: personTeam,
							name: 'Херман Феррейра'
						},
						{
							id: 2,
							src: personTeam,
							name: 'Василий Кичин'
						},
						{
							id: 3,
							src: personTeam,
							name: 'Андрей Тихонов'
						}
					],
				},
				{
					id: 3,
					name: 'Спартак-2',
					src: teamDesc1,
					year: '2013 год',
					description: 'Первым турниром, в котором команда примет участие после возрождения станет Кинопоиск Camp. Во второй команде «Спартака» получали игровой опыт Илья Кутепов, Максим Глушенков, Зелимхан Бакаев и другие российские футболисты.',
					championship: null,
					achievements: [
						{
							id: 1,
							text: '5 место в первенстве МЕЛБЕТ-Первой Лиги сезона 2015/2016'
						},
					],
					persons: [
						{
							id: 1,
							src: personTeam,
							name: 'Дмитрий Комбаров'
						},
					],
				},
				{
					id: 4,
					name: 'Амкал',
					src: teamDesc2,
					year: '2018 год',
					description: 'Старейший и один из самых известных (2,8 млн. подписчиков на YouTube) медийных футбольный клубов.',
					championship: 'Winline Media Football League',
					achievements: [
						{
							id: 1,
							text: 'Чемпион Московского кубка селебрити-2021'
						},
						{
							id: 2,
							text: 'Бронзовые призеры 3 сезона Winline Media Football League'
						},
					],
					persons: [
						{
							id: 1,
							src: personTeam,
							name: 'Герман El Classico'
						},
						{
							id: 2,
							src: personTeam,
							name: 'Прокоп'
						},
						{
							id: 3,
							src: personTeam,
							name: 'Андрей Сибскана'
						},
					
					],
				},
				{
					id: 5,
					name: 'Broke Boys',
					src: teamDesc1,
					year: '2022 год',
					description: 'За два года существования Broke Boys стали одной из самых обсуждаемых и успешных в футбольном плане медийных команд.',
					championship: 'Winline Media Football League',
					achievements: [
						{
							id: 1,
							text: 'Серебряные призеры Московского кубка селебрити-2022 и Московского кубка селебрити-2023'
						},
						{
							id: 2,
							text: 'Серебряные призеры 4 сезона Winline Media Football League'
						},
					],
					persons: [
						{
							id: 1,
							src: personTeam,
							name: 'Дмитрий Егоров'
						},
						{
							id: 2,
							src: personTeam,
							name: 'Артем Райзен'
						},
						{
							id: 3,
							src: personTeam,
							name: 'Илья Мазуров'
						},
						{
							id: 3,
							src: personTeam,
							name: 'Алишер Рахимов'
						},
					],
				},
				{
					id: 6,
					name: 'Кызыл-Жар',
					src: teamDesc2,
					year: '1968 год',
					description: 'С 2020 года “Кызыл-Жар” выступает в Казахстанской Премьер-Лиге. По итогам сезона клуб из Петропавловска занял 5 место',
					championship: 'Казахстанская Премьер-Лига',
					achievements: [
						{
							id: 1,
							text: 'Участник Лиги Конференций в сезоне 2022/2023'
						},
						{
							id: 2,
							text: 'Серебряный призер Казахстанской Премьер-Лиги 1999 и 2000 годов'
						},
						{
							id: 3,
							text: 'Бронзовый призер Казахстанской Премьер-Лиги 2001 года'
						},
					],
					persons: [
						{
							id: 1,
							src: personTeam,
							name: 'Алексей Щебетун'
						},
						{
							id: 2,
							src: personTeam,
							name: 'Владислав Сорокин'
						},
						{
							id: 3,
							src: personTeam,
							name: 'Евгений Березкин'
						},
					],
				}
			]
		}
	},
}
</script>

<style lang="scss" scoped>
.descr {
	&-wrapper {
		padding: 6.25rem 0;
	}
	
	&-item {
		display: flex;
		justify-content: space-between;
		margin-bottom: 6.5rem;
		
		&:nth-child(2n) {
			flex-direction: row-reverse;
		}
		
		& .descr-item__content {
			width: 50%;
		}
	}
}
</style>