import {createStore} from "vuex";
import ural from "@/assets/img/ural.png";
import luch from "@/assets/img/luch.png";
import volgar from "@/assets/img/volgar.png";
import orenburg from "@/assets/img/orenburg.png";
import fakel from "@/assets/img/fakel.png";
import avangard from "@/assets/img/avangard.png";
import khimki from "@/assets/img/khimki.png";
import enisei from "@/assets/img/Enisei.png";
import eniseiTeam from "@/assets/img/eniseiTeam.png";
import spartak from "@/assets/img/spartak.png";
import spartakTeam from "@/assets/img/spartakTeam.png";
import bb from "@/assets/img/bb.png";
import bbTeam from "@/assets/img/brokeboysTeam.png";
import rodina from "@/assets/img/rodina.png";
import rodinaTeam from "@/assets/img/rodinaTeam.png";
import amkal from "@/assets/img/Amkal.png";
import amkalTeam from "@/assets/img/amkalTeam.png";
import petropavl from "@/assets/img/petropavl.png";
import petropavlTeam from "@/assets/img/petropavlTeam.png";
import sponsorKinopoisk from "@/assets/img/sponsor-kinopoisk.png"
import sponsorBetboom from "@/assets/img/sponsor-betboom.png"
import sponsorSportmaster from "@/assets/img/sponsor-sportmaster.png"
import playerRodina1 from "@/assets/img/players/playerRodina1.png"
import playerRodina2 from "@/assets/img/players/playerRodina2.png"
import playerRodina3 from "@/assets/img/players/playerRodina3.png"
import playerEnisei1 from "@/assets/img/players/playerEnisei1.png"
import playerEnisei2 from "@/assets/img/players/playerEnisei2.png"
import playerEnisei3 from "@/assets/img/players/playerEnisei3.png"
import playerSpartak1 from "@/assets/img/players/playerSpartak1.png"
import playerSpartak2 from "@/assets/img/players/playerSpartak2.png"
import playerSpartak3 from "@/assets/img/players/playerSpartak3.png"
import playerAmkal1 from "@/assets/img/players/playerAmkal1.png"
import playerAmkal2 from "@/assets/img/players/playerAmkal2.png"
import playerAmkal3 from "@/assets/img/players/playerAmkal3.png"
import playerBB1 from "@/assets/img/players/playerBB1.png"
import playerBB2 from "@/assets/img/players/playerBB2.png"
import playerBB3 from "@/assets/img/players/playerBB3.png"
import playerPetr1 from "@/assets/img/players/playerPetr1.png"
import playerPetr2 from "@/assets/img/players/playerPetr2.png"
import playerPetr3 from "@/assets/img/players/playerPetr3.png"

export const store = createStore({
	state() {
		return {
			winnersTeam: [
				{id: 1, years: '2012, 2013, 2018', places: 3, name: 'Урал', src: ural},
				{id: 2, years: '2014', places: 1, name: 'Луч-Энергия', src: luch},
				{id: 3, years: '2015', places: 1, name: 'Волгарь', src: volgar},
				{id: 4, years: '2016', places: 1, name: 'Оренбург', src: orenburg},
				{id: 5, years: '2017', places: 1, name: 'Факел', src: fakel},
				{id: 6, years: '2019', places: 1, name: 'Авангард', src: avangard},
				{id: 7, years: '2020', places: 1, name: 'Химки', src: khimki},
			],
			teamsFirst: [
				{
					id: 1, name: 'Енисей', src: enisei, link: '#', isWhite: false, stats: {
						games: 0,
						win: 0,
						draw: 0,
						loose: 0,
						scores: 0,
						points: 0,
					}
				},
				{
					id: 2, name: 'Спартак-2', src: spartak, link: '#', isWhite: false, stats: {
						games: 0,
						win: 0,
						draw: 0,
						loose: 0,
						scores: 0,
						points: 0,
					}
				},
				{
					id: 3, name: 'Broke Boys', src: bb, link: '#', isWhite: true, stats: {
						games: 0,
						win: 0,
						draw: 0,
						loose: 0,
						scores: 0,
						points: 0,
					}
				}
			],
			teamsSecond: [
				{
					id: 1, name: 'Родина', src: rodina, link: '#', isWhite: false, stats: {
						games: 0,
						win: 0,
						draw: 0,
						loose: 0,
						scores: 0,
						points: 0,
					}
				},
				{
					id: 2, name: 'Амкал', src: amkal, link: '#', isWhite: true, stats: {
						games: 0,
						win: 0,
						draw: 0,
						loose: 0,
						scores: 0,
						points: 0,
					}
				},
				{
					id: 3, name: 'Кызыл-Жар', src: petropavl, link: '#', isWhite: false, stats: {
						games: 0,
						win: 0,
						draw: 0,
						loose: 0,
						scores: 0,
						points: 0,
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
					src: rodinaTeam,
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
							src: playerRodina1,
							name: 'Иван Тимошенко'
						},
						{
							id: 2,
							src: playerRodina2,
							name: 'Максим Турищев'
						},
						{
							id: 3,
							src: playerRodina3,
							name: 'Руслан Фищенко'
						}
					],
				},
				{
					id: 2,
					name: 'Енисей',
					src: eniseiTeam,
					year: '1937 год',
					description: 'По итогам первой части сезона «Енисей» занимает 10 место в МЕЛБЕТ-Первой Лиге. В прошлом сезоне клуб принимал участие в стыковых матчах за выход в РПЛ против «Факела». ',
					championship: 'МЕЛБЕТ-Первая Лига',
					achievements: [
						{
							id: 1,
							text: 'Выход в сезоне 2018/2019 в Российскую Премьер-Лигу'
						},
						{
							id: 2,
							text: 'Полуфиналист Кубка России сезона 2021/2022'
						},
					],
					persons: [
						{
							id: 1,
							src: playerEnisei1,
							name: 'Херман Феррейра'
						},
						{
							id: 2,
							src: playerEnisei2,
							name: 'Андрей Тихонов'
						},
						{
							id: 3,
							src: playerEnisei3,
							name: 'Василий Кичин'
						}
					],
				},
				{
					id: 3,
					name: 'Спартак-2',
					src: spartakTeam,
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
							src: playerSpartak1,
							name: 'Максим Офицеров'
						},
						{
							id: 2,
							src: playerSpartak2,
							name: 'Дмитрий Комбаров'
						},
						{
							id: 3,
							src: playerSpartak3,
							name: 'Дмитрий Иванников'
						},
					],
				},
				{
					id: 4,
					name: 'Амкал',
					src: amkalTeam,
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
							src: playerAmkal1,
							name: 'Герман El Classico'
						},
						{
							id: 2,
							src: playerAmkal2,
							name: 'Михаил Прокопьев'
						},
						{
							id: 3,
							src: playerAmkal3,
							name: 'Андрей Сибскана'
						},
					
					],
				},
				{
					id: 5,
					name: 'Broke Boys',
					src: bbTeam,
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
							src: playerBB1,
							name: 'Дмитрий Егоров'
						},
						{
							id: 2,
							src: playerBB2,
							name: 'Артем Райзен'
						},
						{
							id: 3,
							src: playerBB3,
							name: 'Иван Зириков'
						},
					],
				},
				{
					id: 6,
					name: 'Кызыл-Жар',
					src: petropavlTeam,
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
							src: playerPetr1,
							name: 'Бекзат Шадманов'
						},
						{
							id: 2,
							src: playerPetr2,
							name: 'Владислав Сорокин'
						},
						{
							id: 3,
							src: playerPetr3,
							name: 'Евгений Березкин'
						},
					],
				}
			],
			sponsors: [
				{id: 1, text: 'Титульный партнер', src: sponsorKinopoisk, link: 'https://hd.kinopoisk.ru/sport/'},
				{id: 2, text: 'Генеральный партнер', src: sponsorBetboom, link: 'https://betboom.ru/'},
				{
					id: 3,
					text: 'Технический партнер',
					src: sponsorSportmaster,
					link: 'https://www.sportmaster.ru/promo/2149276/'
				},
			],
			rules: [
				{
					id: 1,
					title: 'Чистое время игры',
					subtitle: '2 тайма по 25 минут',
					body: 'Считается только то время, когда мяч находится в игре. После любого свистка арбитра, выхода мяча за пределы поля счётчик времени останавливается'
				},
				{
					id: 2,
					title: 'Тренерский тайм-аут',
					body: 'Один раз за тайм команда может взять тайм-аут продолжительностью в одну минуту'
				},
				{
					id: 3,
					title: 'Судейский challenge',
					body: 'Команда вправе взять один раз за тайм-challenge на просмотр арбитром спорных игровых эпизодов (гол, пенальти, красная карточка)'
				},
				{
					id: 4,
					title: 'Красный (бонусный) мяч',
					body: 'Команда вправе взять один раз за матч бонусный мяч. Гол забитый бонусным мячом приравнивается к двум'
				},
				{
					id: 5,
					title: 'Оранжевая судейская карточка',
					body: 'Будет показана за фолы, оценивающиеся выше, чем жёлтая карточка, но недотягивающие на полноценную красную карточку. Если футболист получает оранжевую карточку, то он удаляется на 5 минут чистого времени'
				},
				{
					id: 6,
					title: 'Послематчевые буллитальти',
					body: 'Перед каждой парой бьющих футболистов путём жребия определяется будут игроки бить пенальти или будет совершён выход один на один с вратарём'
				},
			],
			anchors: []
		}
	},
	mutations: {
		changeLinkOnTeams(state, {item, name}) {
			state.teamsFirst.forEach((el) => {
				if(el.name === name) {
					el.link = item
				}
			})
			state.teamsSecond.forEach((el) => {
				if(el.name === name) {
					el.link = item
				}
			})
		},
		addAnchors(state, item) {
			state.anchors = [...state.anchors, item]
		}
	}
})