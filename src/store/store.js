import {createStore} from "vuex";
import ural from "@/assets/img/ural.png";
import luch from "@/assets/img/luch.png";
import volgar from "@/assets/img/volgar.png";
import orenburg from "@/assets/img/orenburg.png";
import fakel from "@/assets/img/fakel.png";
import avangard from "@/assets/img/avangard.png";
import khimki from "@/assets/img/khimki.png";
import enisei from "@/assets/img/Enisei.png";
import spartak from "@/assets/img/spartak.png";
import bb from "@/assets/img/bb.png";
import rodina from "@/assets/img/rodina.png";
import amkal from "@/assets/img/Amkal.png";
import petropavl from "@/assets/img/petropavl.png";
import teamDesc1 from "@/assets/img/teamDesc1.png";
import personTeam from "@/assets/img/personTeam.png";
import teamDesc2 from "@/assets/img/teamDesc2.png";
import sponsorKinopoisk from  "@/assets/img/sponsor-kinopoisk.png"
import sponsorBetboom from  "@/assets/img/sponsor-betboom.png"
import sponsorSportmaster from  "@/assets/img/sponsor-sportmaster.png"

export const store = createStore({
	state() {
		return {
			winnersTeam: [
				{id: 1, years: '2012, 2013, 2018', name: 'Урал', src: ural},
				{id: 2, years: '2014', name: 'Луч-Энергия', src: luch},
				{id: 3, years: '2015', name: 'Волгарь', src: volgar},
				{id: 4, years: '2016', name: 'Оренбург', src: orenburg},
				{id: 5, years: '2017', name: 'Факел', src: fakel},
				{id: 6, years: '2019', name: 'Авангард', src: avangard},
				{id: 7, years: '2020', name: 'Химки', src: khimki},
			],
			teamsFirst: [
				{
					id: 1, name: 'Енисей', src: enisei, link: '#', isWhite: false, stats: {
						games: 1,
						win: 1,
						draw: 1,
						loose: 1,
						scores: 1,
						points: 1,
					}
				},
				{
					id: 2, name: 'Спартак-2', src: spartak, link: '#', isWhite: false, stats: {
						games: 1,
						win: 1,
						draw: 1,
						loose: 1,
						scores: 1,
						points: 1,
					}
				},
				{
					id: 3, name: 'Broke Boys', src: bb, link: '#', isWhite: true, stats: {
						games: 1,
						win: 1,
						draw: 1,
						loose: 1,
						scores: 1,
						points: 1,
					}
				}
			],
			teamsSecond: [
				{
					id: 1, name: 'Родина', src: rodina, link: '#', isWhite: false, stats: {
						games: 1,
						win: 1,
						draw: 1,
						loose: 1,
						scores: 1,
						points: 1,
					}
				},
				{
					id: 2, name: 'Амкал', src: amkal, link: '#', isWhite: true, stats: {
						games: 1,
						win: 1,
						draw: 1,
						loose: 1,
						scores: 1,
						points: 1,
					}
				},
				{
					id: 3, name: 'Кызыл-Жар', src: petropavl, link: '#', isWhite: false, stats: {
						games: 1,
						win: 1,
						draw: 1,
						loose: 1,
						scores: 1,
						points: 1,
					}
				}
			],
			games: [
				{
					id: 1,
					teamHome: {name: 'Енисей', src: enisei, isWhite: false},
					date: '10.02.2024',
					time: '-',
					teamGuest: {name: 'Спартак-2', src: spartak, isWhite: false}
				},
				{
					id: 2,
					teamHome: {name: 'Родина', src: rodina, isWhite: false},
					date: '12.02.2024',
					time: '-',
					teamGuest: {name: 'Кызыл-Жар', src: petropavl, isWhite: false}
				},
				{
					id: 3,
					teamHome: {name: 'Broke Boys', src: bb, isWhite: true},
					date: '14.02.2024',
					time: '-',
					teamGuest: {name: 'Енисей', src: enisei, isWhite: false}
				},
				{
					id: 4,
					teamHome: {name: 'Кызыл-Жар', src: petropavl, isWhite: false},
					date: '15.02.2024',
					time: '-',
					teamGuest: {name: 'Амкал', src: amkal, isWhite: true}
				},
				{
					id: 5,
					teamHome: {name: 'Спартак-2', src: spartak, isWhite: false},
					date: '17.02.2024',
					time: '-',
					teamGuest: {name: 'Broke Boys', src: bb, isWhite: true}
				},
				{
					id: 6,
					teamHome: {name: 'Амкал', src: amkal, isWhite: true},
					date: '17.02.2024',
					time: '-',
					teamGuest: {name: 'Родина', src: rodina, isWhite: false}
				},
				{
					id: 7,
					teamHome: {name: '3 место, 1 группа'},
					date: '21.02.2024',
					time: '-',
					teamGuest: {name: '3 место, 2 группа'}
				},
				{
					id: 8,
					teamHome: {name: '2 место, 1 группа'},
					date: '22.02.2024',
					time: '-',
					teamGuest: {name: '2 место, 2 группа'}
				},
				{
					id: 9,
					teamHome: {name: '1 место, 1 группа'},
					date: '02.2024',
					time: '-',
					teamGuest: {name: '1 место, 2 группа'}
				},
			],
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
			],
			sponsors: [
				{id:1, text: 'Титульный партнер', src: sponsorKinopoisk},
				{id:2, text: 'Генеральный партнер', src: sponsorBetboom},
				{id:3, text: 'Технический партнер', src: sponsorSportmaster},
			]
		}
	}
})