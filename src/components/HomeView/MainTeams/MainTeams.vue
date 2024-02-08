<template>
  <div class="teams">
    <div class="teams-bg">
      <img :src="banner" alt="camp">
    </div>
    <div class="teams-wrapper">
      <div class="container">
        <div class="teams-list">
          <div class="teams-list__left">
            <div class="teams-img" v-for="item in teamFirst" :key="item.id">
              <img :src="item.src" :alt="item.name"></div>
          </div>
          <div class="teams-icon">
            <kinopoisk-icon/>
          </div>
          <div class="teams-list__right">
            <div class="teams-img" v-for="item in teamsSecond" :key="item.id">
              <img :src="item.src" :alt="item.name"></div>
          </div>
        </div>
        <div class="teams-text">
          Спустя 4 года Футбольная Национальная Лига возобновляет проведение зимнего Кубка ФНЛ.
          <br>
          <br>
          Зимний Кубок ФНЛ проводился на протяжении 9 лет, начиная с 2012 года, где победителем стал ФК
          “Урал”. Кстати, команда из Екатеринбурга чаще всех становилась чемпионом турнира: в 2012, 2013 и
          2018 годах.
        </div>
        <div class="teams-links">
          <custom-button class="teams-links-item" @click="scrollToElement(item)" v-for="item in store.state.anchors" :key="item.id">
            {{ item.name }}
          </custom-button>
        </div>
        <form class="teams-vote">
          <h2>Голосование за лучший гол</h2>
          <div class="teams-vote-list">
            <div class="teams-vote-item" v-for="item in 6" :key="item">
              <div class="teams-vote__img">
                <div class="teams-vote__img-player">
                  <img :src="votePlayer" alt="player">
                </div>
                <div class="teams-vote__img-bg"></div>
              </div>
              <div class="teams-vote__content">
                <div class="teams-vote__top">
                  <div class="teams-vote__top-name">Иван Остойич</div>
                  <div class="teams-vote__top-number">5</div>
                  <div class="teams-vote__top-team">ФК «Енисей»</div>
                </div>
                <div class="teams-vote__middle">
                  <div class="teams-vote__middle-item">
                    <div class="teams-vote__middle-title">Амплуа</div>
                    <div class="teams-vote__middle-text">Защитник</div>
                  </div>
                  <div class="teams-vote__middle-item">
                    <div class="teams-vote__middle-title">Страна</div>
                    <div class="teams-vote__middle-text teams-vote__middle-country">
                      <img :src="countryVote" alt="">
                      <div>Россия</div>
                    </div>
                  </div>
                  <div class="teams-vote__middle-item teams-vote__middle-title">
                    Игра
                  </div>
                  <div class="teams-vote__middle-item teams-vote__middle-game">
                    <img :src="enisei" alt="">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M0.68327 2.02619C0.625166 1.96808 0.579076 1.8991 0.54763 1.82319C0.516185 1.74727 0.5 1.6659 0.5 1.58373C0.5 1.50156 0.516185 1.42019 0.54763 1.34428C0.579076 1.26836 0.625166 1.19938 0.68327 1.14128C0.741374 1.08317 0.810353 1.03708 0.88627 1.00564C0.962186 0.974193 1.04355 0.958008 1.12572 0.958008C1.20789 0.958008 1.28926 0.974193 1.36518 1.00564C1.44109 1.03708 1.51007 1.08317 1.56818 1.14128L8 7.57435L14.4318 1.14128C14.4899 1.08317 14.5589 1.03708 14.6348 1.00564C14.7107 0.974193 14.7921 0.958008 14.8743 0.958008C14.9564 0.958008 15.0378 0.974193 15.1137 1.00564C15.1896 1.03708 15.2586 1.08317 15.3167 1.14128C15.3748 1.19938 15.4209 1.26836 15.4524 1.34428C15.4838 1.42019 15.5 1.50156 15.5 1.58373C15.5 1.6659 15.4838 1.74727 15.4524 1.82319C15.4209 1.8991 15.3748 1.96808 15.3167 2.02619L8.88366 8.45801L15.3167 14.8898C15.3748 14.9479 15.4209 15.0169 15.4524 15.0928C15.4838 15.1687 15.5 15.2501 15.5 15.3323C15.5 15.4145 15.4838 15.4958 15.4524 15.5717C15.4209 15.6477 15.3748 15.7166 15.3167 15.7747C15.2586 15.8328 15.1896 15.8789 15.1137 15.9104C15.0378 15.9418 14.9564 15.958 14.8743 15.958C14.7921 15.958 14.7107 15.9418 14.6348 15.9104C14.5589 15.8789 14.4899 15.8328 14.4318 15.7747L8 9.34166L1.56818 15.7747C1.51007 15.8328 1.44109 15.8789 1.36518 15.9104C1.28926 15.9418 1.20789 15.958 1.12572 15.958C1.04355 15.958 0.962186 15.9418 0.88627 15.9104C0.810353 15.8789 0.741374 15.8328 0.68327 15.7747C0.625166 15.7166 0.579076 15.6477 0.54763 15.5717C0.516185 15.4958 0.5 15.4145 0.5 15.3323C0.5 15.2501 0.516185 15.1687 0.54763 15.0928C0.579076 15.0169 0.625166 14.9479 0.68327 14.8898L7.11634 8.45801L0.68327 2.02619Z"
                          fill="#EA571C"/>
                    </svg>
                    <img :src="enisei" alt="">
                  </div>
                  <div class="teams-vote__middle-item">
                    <div class="teams-vote__middle-title">Дата</div>
                    <div class="teams-vote__middle-text">12.06.2023</div>
                  </div>
                  <div class="teams-vote__middle-item">
                    <div class="teams-vote__middle-title">Счёт</div>
                    <div class="teams-vote__middle-text">3 : 2</div>
                  </div>
                </div>
              </div>
              <div class="teams-vote__btns">
                <button class="teams-vote__btns-watch">
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M0 9.45801C0 14.408 4.05 18.458 9 18.458C13.95 18.458 18 14.408 18 9.45801C18 4.50801 13.95 0.458008 9 0.458008C4.05 0.458008 0 4.50801 0 9.45801ZM1.8 9.45801C1.8 5.49801 5.04 2.25801 9 2.25801C12.96 2.25801 16.2 5.49801 16.2 9.45801C16.2 13.418 12.96 16.658 9 16.658C5.04 16.658 1.8 13.418 1.8 9.45801ZM9.09 6.12801C8.55 5.76801 7.83 5.76801 7.2 6.03801C6.66 6.39801 6.3 6.93801 6.3 7.65801V11.258C6.3 11.888 6.66 12.518 7.29 12.878C7.83 13.148 8.55 13.148 9.09 12.788L11.79 10.988C12.33 10.628 12.6 10.088 12.6 9.45801C12.6 8.82801 12.33 8.28801 11.79 7.92801L9.09 6.12801ZM9.18 10.448L8.1 11.168V9.72801V9.09801V7.65801L9.18 8.37801L9.9 8.82801L10.8 9.45801L9.9 10.088L9.18 10.448Z"
                          fill="#EA571C"/>
                  </svg>
                  <span>
                    Смотреть хайлайт
                  </span>
                </button>
                <button class="teams-vote__btns-action">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M0.500244 9.45801C0.500244 14.3992 4.55907 18.458 9.50024 18.458C14.4414 18.458 18.5002 14.3992 18.5002 9.45801C18.5002 4.51683 14.4414 0.458008 9.50024 0.458008C4.55907 0.458008 0.500244 4.51683 0.500244 9.45801ZM2.26495 9.45801C2.26495 5.48742 5.52966 2.22271 9.50024 2.22271C13.4708 2.22271 16.6473 5.39918 16.6473 9.36977C16.6473 13.3404 13.4708 16.5168 9.50024 16.5168C5.52966 16.6051 2.26495 13.4286 2.26495 9.45801ZM13.7355 7.34036C14.0885 6.98742 14.0002 6.36977 13.6473 6.10507C13.2944 5.75213 12.7649 5.75213 12.412 6.10507L8.17671 10.7815L6.58848 8.84036C6.23554 8.48742 5.70613 8.39918 5.35319 8.75212C4.91201 9.10507 4.91201 9.63448 5.17671 9.98742L7.3826 12.7227C7.55907 12.8992 7.82377 13.0757 8.08848 13.0757C8.35319 13.0757 8.61789 12.9874 8.79436 12.8109L13.7355 7.34036Z"
                          fill="white"/>
                  </svg>
                  <span>
                  Голосовать
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script setup>
import {useStore} from "vuex";
import banner from '@/assets/img/homeBg.png'
import KinopoiskIcon from "@/components/icons/KinopoiskIcon.vue";
import CustomButton from "@/components/UI/CustomButton.vue";
import votePlayer from "@/assets/img/votePlayer.png"
import enisei from "@/assets/img/Enisei.png"
import countryVote from "@/assets/img/countryVote.png"

const store = useStore()
const teamFirst = store.state.teamsFirst
const teamsSecond = store.state.teamsSecond

const scrollToElement = (item) => {
  item.link.scrollIntoView({behavior: "smooth"});
}

</script>

<style scoped lang="scss">
.teams {
  display: flex;
  flex-direction: column;
  position: relative;
  color: white;

  &-bg {
    margin-bottom: -6px;
    width: 100%;

    img {
      max-width: 100%;
      width: 100%;
    }
  }

  &-text {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    max-width: 850px;
    margin: 0 auto 5rem;
  }

  //&:before {
  //	content: '';
  //	position: absolute;
  //	top: 0;
  //	left: 0;
  //	width: 100%;
  //	height: 100%;
  //	background: linear-gradient(0deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.00) 53.81%), linear-gradient(0deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.48) 100%);
  //}

  &-wrapper {
    position: relative;
    width: 100%;
    background: var(--orange);
    padding-bottom: 6rem;
  }

  &-list {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 7.5rem 0 2rem;

    &__left, &__right {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      width: 30%;

      img {
        width: 100%;
      }
    }
  }

  &-icon {
    position: absolute;
    top: -30%;
    left: 50%;
    transform: translateX(-50%);
    width: 20vw;

    svg {
      width: 100%;
    }
  }

  &-text {
    text-align: center;
    max-width: 850px;
    margin: 5rem auto 5rem;
  }

  &-links {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 2.5rem;
    row-gap: 1rem;

    &-item {
      line-height: 100%;
      width: min-content;
      white-space: normal;
      background: white;
      color: var(--orange);
    }
  }

  &-vote {
    margin: 7.5rem 0 0;

    h2 {
      color: white;
      text-align: center;
      margin-bottom: 3rem;
    }

    &-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      column-gap: 8rem;
      max-width: 1300px;
      margin: 0 auto;
    }

    &-item {
      display: grid;
      grid-template-columns: 5fr 7fr;
      padding: 1.25rem 3rem;
      background: white;
      color: black;
      border-radius: .75rem;
      gap: 1.75rem;
      font-size: 1.25rem;
      max-width: 600px;

      &:nth-child(even) {
        justify-self: right;
      }
    }

    &__img {
      position: relative;
      height: fit-content;

      &-player {
        position: relative;
        display: flex;
        align-items: end;

        z-index: 5;
        background: white;
        border-radius: 1rem;
        border: 1px solid var(--orange);

        img {
          position: relative;
          top: 1px;
          left: -10px;
          width: 100%;
        }
      }

      &-bg {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 10px;
        left: 10px;
        background: var(--linear-gradient);
        border-radius: 1rem;
      }
    }

    &__top {
      display: grid;
      grid-template-columns: 1fr auto;

      &-name {
        font-size: 2rem;
        line-height: 100%;
        font-weight: 700;
        color: var(--orange);
      }

      &-number {
        font-size: 5rem;
        color: var(--orange);
        font-weight: 700;
        grid-row: 1/3;
        grid-column: 2/3;
        opacity: 0.5;
        line-height: 100%;
      }
    }

    &__middle {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-top: 1rem;

      &-title {
        color: var(--orange);
        font-weight: 700;
      }

      &-game {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        img {
          max-width: 40px;
          max-height: 40px;
        }
      }

      &-country {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }

    &__btns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      grid-column: 1/3;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }
      
      &-watch{
        color: var(--orange);
        border: 2px solid var(--orange);
        background: white;
      }
      
      &-action{
        color: white;
        background: var(--linear-gradient);
      }
    }
  }
}


@media (max-width: 1440px) {
  .teams {
    background-position: top;

    &-icon {
      top: -20%;
      width: 200px;
    }

    &-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      &-item {
        width: auto;
      }
    }

    &-vote {
      margin: 5rem 0 0;

      h2 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
      }

      &-list {
        gap: 3rem;
      }

      &-item {
        padding: 1.5rem 2rem;
        font-size: 1rem;
      }

      &__top {
        &-name {
          font-size: 1.5rem;
        }

        &-number {
          font-size: 3rem;
        }
      }
    }
  }

}

@media (max-width: 1024px) {
  .teams {
    &-list {
      flex-direction: column;
      padding: 10rem 0 2rem;

      &__left, &__right {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        img {
          width: auto;
          max-width: 100%;
          object-fit: contain;
          max-height: 100%;
        }

      }

      &__left {
        margin-bottom: 2rem;
      }
    }

    &-text {
      font-size: 1.5rem;
    }

    &-img {
      display: flex;
      justify-content: center;
      max-height: 100px;
    }

    &-icon {
      top: -23%;
      width: 200px;
    }

    //&-bg {
    //	max-height: 60vh;
    //	min-height: 300px;
    //}

    &-vote {
      &-list {
        grid-template-columns: 1fr;
      }

      &-item {
        margin: 0 auto;
      }
    }
  }
}

@media (max-width: 768px) {
  .teams {
    &-wrapper {
      padding-bottom: 3rem;
    }

    &-list {
      padding-top: 7.5rem;
    }

    &-icon {
      top: -250px;
      width: 150px;
    }

    &-text {
      font-size: 1rem;
      margin: 2rem 0;
    }

    &-links {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    
    &-vote{
      
      h2{
        font-size: 1.5rem;
      }
      
      &-list{
        gap: 1.5rem;
      }
    }
  }
}

@media (max-width: 576px) {
  .teams {
    &-list {
      padding: 5rem 0 2rem;

      &__left, &__right {
        grid-template-columns: 3fr 4fr 3fr;
      }
    }

    &-bg {
      height: 250px;

      img {
        height: 100%;
        width: auto;
        object-fit: cover;
      }
    }

    &-img {
      max-height: 70px;
    }

    &-icon {
      top: -275px;
      width: 125px;
    }

    &-links {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }

    &-vote {
      &-item{
        width: 100%;
        grid-template-columns: 1fr;
      }
     
      &__img{
        max-width: 200px;
        margin: 0 auto;
      }
      
      //&__middle {
      //  grid-template-columns: 1fr;
      //}
      &__btns{
        grid-column: auto;
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>